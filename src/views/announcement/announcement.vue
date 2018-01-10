<template>
  <div class='abc'>
      <router-link  class="menu-indent" to="/announcement/index/query">
              选项一
      </router-link>
      <router-link  class="menu-indent" to="/announcement/index/show">
              选项二
      </router-link>
      <div class="children">
          <router-view></router-view>
      </div>
      
  </div>
</template>
<script>
export default {
  name:'announcement'
}
</script>
<style>

</style>
