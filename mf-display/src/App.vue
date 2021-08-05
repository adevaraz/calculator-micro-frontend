<template>
    <div id="app">
        <h4> Display </h4>
        <table>
            <tr>
                {{ value }}
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      value: 0
    }
  },
  methods: {
    updateDisplay (event) {
      if(event.data !== null) {
        this.value = event.data.val
      } else {
        this.value = 0
      }
    }
  },
  mounted () {
    window.addEventListener('message', this.updateDisplay)
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

table {
  border: 1px solid gray;
  width: 100%;
  padding: 10px;
}
</style>
