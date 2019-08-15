import AboutUs from '@/components/AboutUs.vue';
import { mount } from '@vue/test-utils';

describe('AboutUs.vue', () => {
  it('should render', () => {
    const name = 'AboutUs';
    const initialEnthusiasm = 5;

    const wrapper = mount(AboutUs, {
      propsData: {
        name, initialEnthusiasm
      }
    })
    expect(wrapper.find('.greeting').text()).toBe('AboutUs!!!!!')
  })
});