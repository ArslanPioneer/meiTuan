<template>
  <div>
    <el-row>
      <el-col :span="5">
        <left-menu/>
      </el-col>
      <el-col :span="19">
        <life/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import leftMenu from '@/components/index/menu.vue';
import life from '@/components/index/life.vue';
export default {
   components:{
     leftMenu,
     life
   }
}
</script>

<style style="scss">

</style>
