module.exports = {
    title: '1TB的博客',
    description: '1TB',
    base: '/blog/',
    theme: 'reco',
    themeConfig: {

        subSidebar:"auto",
        logo: "/head.jpg",
        authorAvatar: "/head.jpg",
        type: "blog",
        author: "1TB",
        nav: [
            { text: "首页", link: "/" },
            {
              text: "1TB 的博客",
              items: [
                { text: "掘金", link: "" },
                { text: "Github", link: "https://github.com/yqh12" }
              ]
            },
            {
              text:"百度",
              link:"https://www.baidu.com",
            },
            {
              text:"bilili",
              link:"https://www.bilibili.com/",
            }
          ],
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: "博客", // 默认文案 “分类”
        },
        tag: {
          location: 4, // 在导航栏菜单中所占的位置，默认4
          text: "Tag", // 默认文案 “标签”
        },
    }
    }, 
     plugins: [
        [
          "sakura",
          {
            num: 20, // 默认数量
            show: true, //  是否显示
            zIndex: -1, // 层级
            img: {
              replace: false, // false 默认图 true 换图 需要填写httpUrl地址
            },
          },
        ],
        [
            "cursor-effects",
            {
              size: 4, // size of the particle, default: 2
              shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
              zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
          ],
          [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
              audios: [
                {
                  name: "你大可不必假装快乐",
                  artist: "Plastic / Fallin` Dild",
                  url: "/docs/music/k.mp3",  
                  cover: "",
                },
                {
                  name: "팔베개",
                  artist: "최낙타",
                  url: "https://assets.smallsunnyfox.com/music/3.mp3",
                  cover:
                    "https://p1.music.126.net/qTSIZ27qiFvRoKj-P30BiA==/109951165895951287.jpg?param=200y200",
                },
              ],
              // 是否默认缩小
              autoShrink: true,
              // 缩小时缩为哪种模式
              shrinkMode: "float",
              // 悬浮窗样式
              floatStyle: { bottom: "20px", "z-index": "999999" },
            },
          ],
     ]
     

  }