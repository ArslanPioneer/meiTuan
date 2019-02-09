const Router =require('koa-router')
const redis=require('koa-redis')
const nodeMailer =require('nodemailer')
// import User from '../dbs/models/users'
// import Passport from './utils/passport'
// import Email from '../dbs/config'
// import axios from './utils/axios'
const User =require('../dbs/models/users')
const Passport =require('./utils/passport')
const Email =require('../dbs/config')
const axios =require('./utils/axios')

let router =new Router({
    prefix:'/users'
})

let store=new redis().client;

router.post('/signup',async(ctx)=>{
    const {
        username,
        password,
        email,
        code
    }=ctx.request.body;
    if(code) {
        const saveCode=await store.hget(`nodemail:${username}`,'code')
        const saveExpire=await store.hget(`nodemail:${username}`,'expire')
    }
    if(code===saveCode){
        if(new Date().getTime()-saveExpire>0){
            ctx.body={
                code:-1,
                msg:'验证码已过期，请重新尝试'
            }
            return false
        }
        else {
            ctx.body={
                code:-1,
                msg:'请填写正确的验证码'
            }
        }
        // else {
        //     ctx.body ={
        //         code:-1,
        //         msg:'请填写正确的验证码'
        //     }
        // }
    }
    let user=await User.find({
        username
    })
    if(user.length){
        ctx.body={
            code:-1,
            msg:'已被注册'
        }
        return 
    }
   let muser=await User.create({
        username,
        password,
        email
   })
   if(user){
       let res=await axios.post('/users/signin',{
           username,
           password
       })
       if(res.data&&res.data.code===0){
            ctx.body={
                code:0,
                msg:'注册成功',
                user:res.data.user
            }
       }
       else {
            ctx.body={
                code:-1,
                msg:'注册失败'
            }
       }
   }
})

router.post('/signin',async(ctx,next)=>{
    return Passport.authenticate('local',function(err,user,info,status){
        if(err){
            ctx.body={
                code:-1,
                msg:err
            }
        }
        else {
            if(user){
                ctx.body={
                    code:1,
                    msg:info
                }
            }
        }
    })(ctx.next)
})

router.post('/verify',async (ctx,next)=>{
    let username=ctx.request.body.username;
    const saveExpire=await store.hget(`nodemail:${username}`,'expire')
    if(saveExpire&&new Date().getTime()-saveExpire<0){
        ctx.body={
            code:-1,
            msg:'验证请求过于频繁，1分钟以内'
        }
        return false
    }
    let transporter=nodeMailer.createTransport({
        host:Email.smtp.host,
        port:587,
        secure:false,
        auth:{
            user:Email.smtp.user,
            pass:Email.smtp.pass
        }
    })
    let ko ={
        code:Email.smtp.code(),
        expire:Email.smtp.expire(),
        email:ctx.request.body.email,
        user:ctx.request.body.username
    }

    let mailOption={
        from:`"认证邮件"<${Email.smtp.user}>`,
        to:ko.email,
        subject:'注册码',
        html:`您在课程中注册，您的邀请码是${ko.code}`
    }
    await transporter.sendMail(mailOptions,(err,info)=>{
        if(error){
            return console.log('error')
        }
        else {
            store.hmset(`nodemail:${ko.user}`, 'code', ko.code, 'expire', ko.expire, 'email', ko.email)
        }
    })
    ctx.body={
        code:0,
        msg:'验证码已发送，可能会有延时'
    }
})

router.get('/exit',async(ctx,next)=>{
    await ctx.logout()
    if(!ctx.isAuthenticated()){
        ctx.body={
            code:0
        }
    }
    else {
        ctx.body={
            code:-1
        }
    }
})

router.get('/getUser',async(ctx,next)=>{
    if(ctx.isAuthenticated()){
        const {username,email} =ctx.session.passport.user
        ctx.body={
            user:username,
            email
        }
    }else {
        ctx.body={
            user:'',
            email:''
        }
    }
})

module.exports=router