// import theme from 'vitepress/dist/client/theme-default'
import theme from '../theme-default'
import back from '../../src/components/back-top.vue'
import demo from '../../src/components/demo/index.vue'
import DemoBlock from '../../src/components/demo/block.vue'

import './styles/custom.css'
import './styles/var.css'
import './styles/code.css'

export default {
  ...theme,
  enhanceApp({ app, router, siteData }) {
    app.component("back", back)
    app.component('demo', demo)
    app.component('DemoBlock', DemoBlock)
    // // app.component(Demo.name, Demo)
    // registerComponents(app)
  }
}