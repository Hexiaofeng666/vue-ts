<template>
  <el-button type="success">Success</el-button>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> 
  </nav>
  <router-view/>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
