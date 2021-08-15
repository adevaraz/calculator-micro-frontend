<template>
  <div id="app">
    <iframe id="navbar" ref="navbarFrame" src="http://localhost:8081" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
    <iframe id="display" ref="displayFrame" src="http://localhost:3000" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
    <iframe id="buttons" ref="buttonsFrame" src="http://localhost:8083" frameBorder="0">
        <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>

<script>
export default {
  name: 'App',
  title: 'Micro-frontend Calculator',
  data () {
    return {
      displayWin: {},
      result: '',
      calculator: {
        displayNumber: '0',
        firstNumber: '0',
        isSecondNumExist: false,
        operator: ''
      }
    }
  },
  methods: {
    refreshAllData () {
      this.result = ''
      this.refreshCalcData()
    },
    refreshCalcData() {
      this.calculator = {
        displayNumber: '',
        firstNumber: '',
        isSecondNumExist: false,
        operator: ''
      }
    },
    handleMessage (event) {
      let data = event.data

      switch(data.type) {
        case 'navbarInfo':
          this.$refs.navbarFrame.height = data.val + 50
          break

        case 'displayInfo':
          this.$refs.displayFrame.height = data.val
          break

        case 'buttonInfo':
          this.$refs.buttonsFrame.height = data.val + 50
          break

        case 'number':
          this.inputDigit(data.val)
          data = {
            val: this.calculator.displayNumber
          }
          this.sendToDisplay(data)

          if(this.calculator.displayNumber !== '' && this.calculator.firstNumber !== '') {
            this.calculator.isSecondNumExist = true
          }
          break
        
        case 'operator':
          if(data.val === '=') {
            this.performCalculation()
            data = {
              val: this.result
            }
            this.sendToDisplay(data)
          } else {
            this.calculator.operator = data.val

            if(this.result === '') {
              this.calculator.firstNumber = this.calculator.displayNumber
            } else {
              this.calculator.firstNumber = this.result
            }

            this.calculator.displayNumber = ''
          }
          break
        
        case 'clear':
          data = {
            val: '0'
          }
          this.sendToDisplay(data)
          this.refreshAllData()
          break
      }
    },
    sendToDisplay (data) {
      this.displayWin.postMessage(data, 'http://localhost:3000')
    },
    inputDigit (digit) {
      if(this.calculator.displayNumber === '') {
        return this.calculator.displayNumber = digit
      } else {
        return this.calculator.displayNumber += digit
      }
    },
    performCalculation () {
      if(this.calculator.isSecondNumExist) {
        let result = 0
        switch (this.calculator.operator) {
          case '+':
            result = parseInt(this.calculator.firstNumber) + parseInt(this.calculator.displayNumber)
            break
          case '-':
            result = parseInt(this.calculator.firstNumber) - parseInt(this.calculator.displayNumber)
            break
        }

        this.result = result.toString()

        this.refreshCalcData()
      }
    }
  },
  mounted () {
    this.refreshAllData()
    const display = this.$refs.displayFrame.contentWindow
    this.displayWin = display

    window.addEventListener('message', this.handleMessage)
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
