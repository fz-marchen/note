
const routers = require('./router')


console.log('routers', routers)
module.exports = {
  base: '/note/', // 简单说如下配置就会让你的项目的路径从 `https://domain.com/` 变成 `https://domain.com/base/`
  title: 'learn', // 页面标题，也会c显示在 navbar 上
  description: 'Good good study, day day up', // 渲染成页面的 `<meta name="description" content="A VitePress site">`

  head: [ 
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  
  themeConfig: {
    pages: {

    },
    nav: [ 
      
      // 导航栏配置
      {text: '首页', link: '/' },

      {
        text: '笔记', 
        link: '/src/pages/note/',
        items: [
          {
            text: '数学', 
            link: '/src/pages/math/',
            
          },
          {
            text: '数据结构和算法', 
            link: '/src/pages/algorithms/',
            
          },
          {
            text: '编译原理', 
            link: '/src/pages/compile-principle/',
            
          },
          {
            text: '计算机组成', 
            link: '/src/pages/computer-organization/',
            
          },
          {
            text: '操作系统', 
            link: '/src/pages/os/',
            
          },
          
          {
            text: '计算机网络', 
            link: '/src/pages/computer-network/',
            
          },
          {
            text: '数据库', 
            link: '/src/pages/database/',
            
          },
          {
            text: '前端', 
            link: '/src/pages/front-end/',
            
          },
          {
            text: '后端', 
            link: '/src/pages/back-end/',
          },
          
        ]
      },
      
      
    ],
    //   侧边导航
    sidebar: routers,
    // sidebarDepth: 3, // 侧边栏显示2级
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // config: md => {
    //   // 使用更多的 markdown-it 插件!
    //   // md.use(require('markdown-it-xxx'))
    //   // console.log(11111111111111111111111111111111111)
    //   // md.use(require('markdown-it-container'), 'demo', {
    //   //   validate(params) {
    //   //     console.log('22222222')
    //   //     return params.trim().match(/^demo\s*(.*)$/);
    //   //   },
    //   //   render(tokens, idx) {
    //   //     console.log('tokens[idx]', tokens[idx])
      
    //   //     const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    //   //     console.log('m', m)
    //   //     if (tokens[idx].nesting === 1) {
    //   //       // const description = m && m.length > 1 ? m[1] : ''
            
    //   //       const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
    //   //       return `<demo>${content ? content : ''}`
    //   //     }
    //   //     return '</demo>'
    //   //   }
    //   // })

    //   const { demoBlock, demoCode } = require('./plugins/md-loader')
      
    //   demoBlock(md)
    //   demoCode(md) // 代码高亮的语言默认为vue，可传入第二个参数自定义语言 demoCode(md, 'html')
    // }
  }
};