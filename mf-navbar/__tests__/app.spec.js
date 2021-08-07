import { mount } from '@vue/test-utils'
import App from './../src/App.vue'

describe('Mounted App', () => {
    const wrapper = mount(App);

    test('is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy()
    })

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('MF-Calculator')
    })
})