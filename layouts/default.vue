<template>
  <el-container>
    <el-header height="197px">
      <my-header />
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer height="100%">
      <my-footer />
    </el-footer>
  </el-container>

</template>
<script>
import myHeader from '@/components/public/header/index.vue';
import myFooter from '@/components/public/footer/index.vue';
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>
<style lang="scss">
.el-header,
.el-main,
.el-footer {
  width: 1190px;
  margin: 0 auto;
  padding: 0;
  overflow: unset;
}

.el-header {
  background: #f8f8f8;
  color: #999;
  width: 100%;
  font-size: 12px;
}

.layout-default {
  -webkit-font-smoothing: antialiased;
  font-family: "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue",
    "MIcrosoft YaHei", sans-serif !important;
  background-color: #f8f8f8;
}
</style>
