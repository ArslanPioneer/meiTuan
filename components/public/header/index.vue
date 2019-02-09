<template>
  <div>
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
       <search-bar />
      </el-col>
    </el-row>
  </div>

</template>
<script>
import topBar from './topBar.vue';
import searchBar from './searchBar.vue';
export default {
  components: {
    topBar,
    searchBar
  }
}
</script>
<style lang="scss">
</style>