import Home from '@/components/HomeRoute/Home.vue';
import { mount } from '@vue/test-utils';

describe('Home.vue', () => {
  it('should render', () => {
    const name = 'World';
    const initialEnthusiasm = 5;

    const wrapper = mount(Home, {
      propsData: {
        name, initialEnthusiasm
      }
    })
    expect(wrapper.find('.greeting').text()).toBe('Home World!!!!!')
  })
});