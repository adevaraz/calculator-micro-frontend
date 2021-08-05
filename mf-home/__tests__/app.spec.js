import { mount } from '@vue/test-utils'
import App from './../src/App.vue'

describe('App', () => {
    // Inspect the raw component options
    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })
})

describe('Mounted App', () => {
    const wrapper = mount(App);

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('addition', () => {
        wrapper.setData({ calculator: {
            displayNumber: '2',
            firstNumber: '3',
            isSecondNumExist: true,
            operator: '+'
        } })
        wrapper.vm.performCalculation()
        console.log(wrapper.vm.result)
        expect(wrapper.vm.result).toBe('5')
    })

    it('subtraction', () => {
        wrapper.setData({ calculator: {
            displayNumber: '2',
            firstNumber: '3',
            isSecondNumExist: true,
            operator: '-'
        } })
        wrapper.vm.performCalculation()
        console.log(wrapper.vm.result)
        expect(wrapper.vm.result).toBe('1')
    })

})