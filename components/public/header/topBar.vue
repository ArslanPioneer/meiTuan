<template>
  <el-row :gutter="0" class="m-header">
    <el-col :span="5">
      <Geo/>
    </el-col>
    <el-col :span="5">
       <User />
    </el-col>
    <el-col :span="14">
        <nav-bar/>
    </el-col>
  </el-row>
</template>
<script>
import Geo from './geo.vue';
import User from './user.vue';
import NavBar from './nav.vue';
export default {
    components:{
        Geo,
        User,
        NavBar
    }
}
</script>
<style lang="scss">
 .m-header {
    width: 1190px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
  }
</style>