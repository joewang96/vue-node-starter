<template>
  <div>
    <h1>Vue + Express Starter App</h1>
    <p>{{ message }}</p>
    <router-link to="/nope">Try 404 handling</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World!'
    }
  },
}
</script>

<style lang="scss" scoped>
$scout: #00a1b6;
h1 {
  color: $scout;
}
</style>
