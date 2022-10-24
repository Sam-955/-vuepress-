import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
export default defineUserConfig({
  lang: 'en-US',
  title: '',
  description: 'Just playing around',
  // themeConfig:{
  //   logo:'https://vuejs.org/images/logo.png'
  // },
  theme: defaultTheme({
    // URL
    logo: 'https://vuejs.org/images/logo.png',
    // 页面颜色配置
    colorModeSwitch:true,
    // 项目仓库github链接
    repo: 'https://github.com/Sam-955',

    // 在这里进行配置
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/java/foo.md',
      },
      // NavbarGroup
      {
        text: '后端',
        //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        children: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
              text: 'JAVASE',
              link: '/java/bar.md', 
          
          },
          {
              text: 'JAVA笔记',
              link: '/java/foo.md', 
         
          },
        ],
      },
      {
        text: '前端',
        link: '/web/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        children: [
          // 说明：以下所有link的值只是在相应md文件头部定义的永久链接（不是什么特殊编码）。另外，注意结尾是有斜杠的
          {
            text: '前端文章',
            children: [
              { text: 'JavaScript', link: '/web/pages/text.md' , 
            },
            ],
          },
          {
            text: '学习笔记',
            children: [
              { text: '《JavaScript教程》', link: '/web/note/javascript.md' },
              { text: '《JavaScript高级程序设计》', link: '/web/note/js.md' },
            ],
          },
        ],
      },
      // 字符串 - 页面文件路径
      'README.md',
    ],
  }),
})