import TopCompass from './index.js'
import { mount } from '@vue/test-utils'

describe('TopCompass.vue', () => {
  it('is a component', () => {
    const wrapper = mount(TopCompass)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders main node', () => {
    const wrapper = mount(TopCompass)
    expect(wrapper.classes()).toContain('TopCompass')
  })
})
