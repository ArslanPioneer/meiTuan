<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a
          href="/"
          class="site-logo"
        ></a>
        <span class="login">
          <em class="bold">已有美团账号?</em>
          <a href="/login">
            <el-button
              type="primary"
              size="small"
            >登陆</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        ref="form"
        :model="form"
        :rules="rule"
        label-width="80px"
      >
        <el-form-item
          label="昵称"
          prop="name"
        >
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <!-- <el-form-item label="手机" prop="phoneNumber">
          <el-input v-model="form.phoneNumber"></el-input>
        </el-form-item> -->
        <el-form-item label="邮箱">
          <el-input
            v-model="form.email"
            prop="email"
          ></el-input>
          <el-button
            size="mini"
            round
            @click="sendMessage"
          >发送验证码</el-button>
          <span class="status">{{statusMessage}}</span>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
        >
          <el-input v-model="form.Number"></el-input>
        </el-form-item>
        <el-form-item
          label="创建密码"
          prop="pwd"
        >
          <el-input
            v-model="form.passsword"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="cpwd"
        >
          <el-input
            v-model="form.cpwd"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="register"
          >同意以下协议并注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
        <el-form-item>
          <a
            class="f1"
            href="http://www.meituan.com/about/terms"
            target="_blank"
          >《美团网用户协议》</a>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      statusMessage: '',
      error: '',
      form: {
        name: '',
        email: '',
        code: '',
        pwd: '',
        cpwd: ''
      },
      rule:{
        name:[
            {
                required:true,
                type:'string',
                message:'请输入昵称',
                trigger:'blur'
            }
        ],
        email:[
            {
                required:true,
                type:'email',
                message:'请输入邮箱',
                trigger:'blur'
            }
        ],
         code:[
            {
                required:true,
                type:'string',
                message:'请输入验证码',
                trigger:'blur'
            }
        ],
        pwd:[
            {
                required:true,
                type:'string',
                message:'请输入密码',
                trigger:'blur'
            }
        ],
        cpwd:[
            {
                required:true,
                type:'string',
                message:'请重复输入密码',
                trigger:'blur'
            },
            {
                validate:(rule,value,callback)=>{
                    if(value==""){
                        callback(new Error('请再次输入密码'))
                    }
                    else if(value !==this.form.pwd){
                        callback(new Error('两次密码输入不一致'))
                    }
                },
                trigger:'blur'
            }
        ]
      }
    }
  },
  methods: {
    sendMessaage: function () {
        console.log('1')
    },
    register: function () {
        console.log('2')
    }
  },
  layout: 'blank'
}
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>