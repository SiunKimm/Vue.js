<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link replace :to="{ name: 'Names' }">Names</router-link> |
      <router-link to="/user">User</router-link> |
      <router-link to="/user2/HAHA">User2</router-link> |
      <button type="button" class="btn btn-secondary" @click="$router.go(3)">안녕</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>