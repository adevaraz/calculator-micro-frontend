<template>
    <div id="app" ref="app">
        <h4>
            Calculator Buttons
        </h4>
        <div id="number-buttons">
            <h5>
                Number
            </h5>
            <button
                v-for="button in numberButtons"
                :key="button.value"
                v-on:click.capture="sendToDisplay(button.value)"
            >
                {{ button.value }}
            </button>
        </div>
        <div id="operator-buttons">
            <h5>
                Operator
            </h5>
            <button
                v-for="button in operatorButtons"
                :key="button.value"
                v-on:click.capture="sendToDisplay(button.value)"
            >
                {{ button.value }}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            numberButtons: [
                { value: '1' },
                { value: '2' },
                { value: '3' },
                { value: '4' },
                { value: '5' },
                { value: '6' },
                { value: '7' },
                { value: '8' },
                { value: '9' },
                { value: '0' }
            ],
            operatorButtons: [
                { value: '+' },
                { value: '-' },
                { value: '=' },
                { value: 'C' }
            ]
        }
    },
    methods: {
        sendToDisplay (value) {
            let data = {}

            if (value === '+' || value === '-' || value === '=') {
                data = {
                    type: 'operator',
                    val: value
                }
            } else if (value === 'C') {
                data = {
                    type: 'clear',
                    val: '0'
                }
            } else {
                data = {
                    type: 'number',
                    val: value
                }
            }

            window.parent.postMessage(data, "http://localhost:8080")
        }
    },
    mounted () {
        // const data = {
        //     type: 'buttonInfo',
        //     val: this.$refs.app.scrollHeight
        // }
        // window.parent.postMessage(data, "http://localhost:8080")
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

button {
    background-color: #173f5f;
    border: none;
    color: white;
    padding: 10px;
    width: 20%;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    border-radius: 0;
}

button:hover {
    background-color: #102f49;
}
</style>