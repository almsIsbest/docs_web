import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base :"/docs_web",
  head: [["link", { rel: "icon", href: "/logo_dingding.png" }]],
  title: "学习文档项目",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link:'/' },
      {text :"java" , items :[
          {text: "基础语法" ,link: '/docs/Java/Basic_features'},
          {text: "Java并发基础知识" ,link: '/docs/Java/basic_concurrent'},

        ]},
      {text:"数据结构与算法",items : [
          {text: "排序算法" ,link:'/docs/Data _Structures_Algorithms/sorts'},
          {text: "查询算法" ,link:'/docs/Data _Structures_Algorithms/search'},
          {text: "树" ,link:'/docs/Data _Structures_Algorithms/tree'},
          {text: "图" ,link:'/docs/Data _Structures_Algorithms/graph'},
        ]},
      {text : "框架学习" , items:[
          {text: "netty" ,link: '/docs/Java/netty'},
        ]}
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
    },
    // 配置markdown扩展
    markdown: {
      lineNumbers: true, // 开启代码块行号
      // options for markdown-it-anchor
      // https://github.com/valeriangalliat/markdown-it-anchor#usage
      // anchor: {
      //   permalink: markdownItAnchor.permalink.headerLink(),
      // },

      // // options for @mdit-vue/plugin-toc
      // // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
      // toc: { level: [2, 3] },
      // config: (md) => {
      //   // use more markdown-it plugins!
      //   md.use(tocPlugin);
      // },
    },
    mermaid: {
      // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    },
    mermaidPlugin: {
      class: "mermaid my-class", // set additional css classes for parent container
    },

  }
})
