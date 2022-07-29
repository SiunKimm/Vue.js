<template>
  <div>
    <router-link :to="{ name: 'HomeV' }">Home</router-link> |
    <router-link :to="{ name: 'UsersV' }">Users</router-link>
  </div>

  <router-view/>
</template>