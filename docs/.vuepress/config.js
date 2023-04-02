module.exports = {
  title: "光头强学前端",
  description: "每天学一点,进步多一点",
  extend: "@vuepress/theme-default",
  plugins: ["@vuepress/back-to-top"],
  base: "/blog/",
  head: [
    [
      "link",
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: 'https://hr-dev-1316781433.cos.ap-nanjing.myqcloud.com/header.ico'
      },
      [
        "script",
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js"
        }
      ],
      [
        "script",
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js"
        }
      ],
      [
        "link",
        {
          rel: "stylesheet",
          type: "text/css",
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css"
        }
      ]
    ]
  ],
  dest: "./docs/.vuepress/dist",
  ga: "",
  evergreen: true,
  serviceWorker: true,
  themeConfig: {
    smoothScroll: true,
    docsDir: "docs",
    docsBranch: "master",
    activeHeaderLinks: true,
    editLinks: true,
    nav: [
      { text: "首页", link: "/" },
      { text: "笔记文档", link: "/home/" },
      { text: "面试题", link: "/code/" },
      { text: "GitHub", link: "https://github.com/TaotaoDev/blog.github.io" }
    ],
    sidebarDepth: 2,
    sidebar: {
      "/home/": [
        "",
        {
          title: "前端基础",
          collapsable: true,
          children: ["jichu/css", "jichu/html"]
        },
        {
          title: "js学习",
          collapsable: true,
          children: [
            "jsstudy/jscj",
            "jsstudy/jsgao",
            "jsstudy/this",
            "jsstudy/es6"
          ]
        },
        {
          title: "常用UI库",
          collapsable: true,
          children: ["ui/jquery", "ui/fullpage", "ui/bootstrap"]
        },
        {
          title: "版本控制",
          collapsable: true,
          children: ["ban/svn", "ban/git"]
        },
        {
          title: "css预处理",
          collapsable: true,
          children: ["Less", "Sass"]
        },

        {
          title: "Vue学习",
          collapsable: true,
          children: ["Vue/chuji"]
        },
        {
          title: "网络基础",
          collapsable: true,
          children: ["wang/http", "wang/request"]
        },

        {
          title: "服务器基础",
          collapsable: true,
          children: ["fu/nginx", "fu/linux"]
        },
      ],
      "/code/": [
        "",
        {
          title: "44道js难题",
          collapsable: true,
          children: ["first"]
        },
        {
          title: "随意整理面试题",
          collapsable: true,
          children: ["second"]
        },
        {
          title: "面试题.pdf",
          collapsable: true,
          children: [
            "fourth/first.md",
            "fourth/second.md",
            "fourth/third.md",
            "fourth/fourth.md",
            "fourth/fifth.md",
            "fourth/sixth.md",
            "fourth/seventh.md",
            "fourth/eighth.md",
            "fourth/ninth.md",
            "fourth/tenth.md",
            "fourth/eleventh.md"
          ]
        },
        {
          title: "前端面试题汇总.pdf",
          collapsable: true,
          children: ["chen"]
        },
        {
          title: "反问面试官?",
          collapsable: true,
          children: ["fan"]
        },
        {
          title: "答案整理",
          collapsable: true,
          children: ["answer"]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
};
