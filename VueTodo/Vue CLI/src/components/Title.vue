// components/Title.vue
<template>
  <div id="title">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitleV',
  props: {
    name: String
  }
}
</script>

<style></style>