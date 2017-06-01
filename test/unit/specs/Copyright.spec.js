import Vue from 'vue';
import Copyright from 'src/view/Copyright';

describe('Copyright.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Copyright);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.footer').textContent)
      .to.toEqual('RalfZ');
  });
});

