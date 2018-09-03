<template>
  <div>
    <h1>Oops, this path doesn't seem to exist!</h1>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
$head: #b60031;
h1 {
  color: $head;
}
</style>

