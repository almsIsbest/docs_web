import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base :"/docs_web",
  head: [["link", { rel: "icon", href: "/logo_dingding.png" }]],
  title: "学习文档项目",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', items : [
          {text:"首页" ,link:"/"}
        ] },
      { text: 'Examples', link: '/markdown-examples' },
      {text :"java" , items :[
          {text: "基础语法" ,link: '/markdown-examples'}
        ]},
      {text:"两侧栏样式",link:'/two_side_example'}
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    sidebar :true,
    aside :"left",



    socialLinks: [
      { icon: 'github', link: 'https://github.com/almsIsbest' }
    ],
    footer:{
      copyright : "CopyRight@ 2024 Alms"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    }

  }
})
