<template>
  <div>
    <h1>Vue + Express Starter App</h1>
    <p v-if="userName">
      Hello {{ userName }}!
    </p>
    <p v-else>
      Loading...
    </p>
    <router-link to="/nope">Try 404 handling</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: null,
    }
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData() {
      // example of fetching from Express API - modify endpoints in /src/server/
      fetch('/api/getUsername')
        .then(res => res.json())
        .then(user => this.userName = user.username);
    }
  }
}
</script>

<style lang="scss" scoped>
$scout: #00a1b6;
h1 {
  color: $scout;
}
</style>
