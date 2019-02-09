// import passport from 'koa-passport';
// import localStrategy from 'passport-local';
// import UserModel from '../../dbs/users.js';
const passport =require('koa-passport');
const localStrategy=require('passport-local');
const UserModel=require('../../dbs/models/users.js');

passport.use(new localStrategy(async function(username,password,done){
    let where={
        username
    };
    let result =await UserModel.findOne(where)
    if(result!=null){
        if(result.password===password){
            return done(null,result)
        }
        else {
            return done(null,false,'密码错误')
        }
      
    }
}))

passport.serializeUser(function(user,done){
    done(null,user)
})

passport.deserializeUser(function(user,done){
    return done(null,user)
})

module.exports=passport