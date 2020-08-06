## 如何利用在vue项目中利用jest搞测试
### 项目设置 
   - 使用vue-cli3.0以上
   - 安装 @vue/cli-plugin-unit-jest //  单元测试插件，更多细节请移步[相关文档](https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-unit-jest/README.md)
   - 安装 @vue/test-utils //  vue单元测试函数库，更多细节请移步[相关文档](https://vue-test-utils.vuejs.org/zh/)
   - 配置jest.config.js文件， [参考文档](https://jestjs.io/docs/zh-Hans/configuration)
   - package.json添加   "test:unit": "vue-cli-service test:unit --coverage", // 生成html测试报告
    "test": "vue-cli-service test:unit -u --silent",
### 示例：test.spec.js
```
import { mount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
// mock函数方便模拟ajax请求
const mockFn = function(url) { // url.方便模拟不同url返回不同的数据
 return Promise.resolve({list:{a:1}})
}
localVue.use(Vuex)
const mock = ()=> {}
const store = new Vuex.Store({
  user:{}
})
const $confirm = mock
const $route = {
  query: {userId: '123'},
  params:{}
}
// mock $router对象
const $router = {
  go:mock,
  push:mock,
  replace:mock,
}
localVue.prototype.$ajax = {
  get:(url)=> mockFn(url),
  post:(url)=> mockFn(url),
  delete:(url)=> mockFn(url),
  put:(url)=> mockFn(url),
}
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      store,
      propsData:{}, // 可以传入一些 vue实例选项中的props data
      mocks: {
        $router,
        $route,
        $confirm // 模拟像this.$comfirm这样的弹出确认框
      }
    })
    wrapper.vm.getDate()  // 可以直接调用vue实例中的函数， 跟多参考https://vue-test-utils.vuejs.org/zh/guides/#%E8%B5%B7%E6%AD%A5
    expect(wrapper.vm.msg).toBeUndefined() // jest 断言库
  })
  it('userId', () => {
    const wrapper = mount(HelloWorld, {
      localVue,
      store,
      mocks: {
        $router,
        $route
      }
    })
    expect(wrapper.vm.$route.query.userId).toBe('123') // 
  })
  test('re', ()=> {
    const wrapper = mount(HelloWorld, {
      localVue,
      store,
      mocks: {
        $router,
        $route
      }
    })
    expect(wrapper.element).toMatchSnapshot('test')
  })
})

```   
最后运行 npm run test:unit (这个后面可加文件，表示单独对某个文件测试)
打开coverage下的html就可以看到测试报告了