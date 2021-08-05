<template>
  <div id="app">
    <iframe ref="navbar" src="http://localhost:8081" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
    <iframe ref="displayFrame" src="http://localhost:8082" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
    <iframe ref="buttonsFrame" src="http://localhost:8083" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      displayWin: {}
    }
  },
  methods: {
    sendToDisplay (event) {
      const data = event.data
      this.displayWin.postMessage(data, 'http://localhost:8082')
    }
  },
  mounted () {
    const display = this.$refs.displayFrame.contentWindow
    this.displayWin = display

    window.addEventListener('message', this.sendToDisplay)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

iframe {
  width: 100%;
}
</style>
