<template>
    <nav id="app" ref="app">
        <h4> MF-Calculator </h4>
    </nav>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    const data = {
      type: 'navbarInfo',
      val: this.$refs.app.scrollHeight
    }
    window.parent.postMessage(data, "http://localhost:8080")
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

nav {
  margin: 0px;
  padding: 5px;
  background-color: #173f5f;
  color: white;
}
</style>
