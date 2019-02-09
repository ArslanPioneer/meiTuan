<template>
    <div class="m-geo">
         <i class="el-icon-location"/>北京市
         <nuxt-link class="changeCity" to="/changeCity">切换城市</nuxt-link>
         [铜陵 芜湖 合肥]
  
    </div>
</template>
<script>
export default {
    
    
}
</script>
<style lang="scss">
.m-geo {
    color: #666;
    font-size: 12px;
    .changeCity {
      background: #F4F4F4;
      border: 1px solid #E5E5E5;
      border-radius: 2px;
      color: #666;
      margin: 0 4px;
      padding: 0 2px;
      &:hover {
        color: #31BBAC;
      }
    }
    .username {
      color: #31BBAC;
      cursor: pointer;
    }
    .login,
    .register {
      font-size: 12px;
      line-height: 40px;
      color: #999;
      margin: 0 5px;
      &.login {
        color: #31BBAC;
        margin: 0 5px 0 20px;
      }
      &:hover {
        color: #31BBAC;
      }
    }
  }
</style>