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

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('Calculator Buttons')
    })

    it('renders the correct markup for number', () => {
        expect(wrapper.html()).toContain('Number')
    })

    it('renders the correct markup for operator', () => {
        expect(wrapper.html()).toContain('Operator')
    })

    it('has a button', () => {
        const button = wrapper.find('button')
        expect(button.exists()).toBe(true)
    })

    it('renders correctly with different data', async () => {
        wrapper.setData({ operatorButtons: [
            { value: '+' },
            { value: '-' },
            { value: '=' }
        ] })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('+')
    })

    it('renders correctly with different data', async () => {
        wrapper.setData({ numberButtons: [
            { value: '1' },
            { value: '2' },
            { value: '3' }
        ] })
        await wrapper.vm.$nextTick()
        expect(wrapper.text()).toContain('3')
    })

    it('button click', () => {
        wrapper.vm.sendToDisplay = jest.fn()

        const button = wrapper.find('button')
        button.trigger('click')
        expect(wrapper.vm.sendToDisplay).toHaveBeenCalled()
        // console.log(wrapper.vm.sendToDisplay('1').data)
    })
})