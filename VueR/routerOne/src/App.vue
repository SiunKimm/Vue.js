<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'Names' }">Names</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/user2/HAHA">User2</router-link> |
        <button type="button" class="btn btn-secondary" @click="$router.push('/user2/안녕')">뒤로가기</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>