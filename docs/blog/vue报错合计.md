---
title: vue报错合计
date: 2024-7-2
categories:
  - 前端
tags:
  - JavaScript
  - 模仿
sticky: 3
---
1.SyntaxError: Identifier '__vite__injectQuery' has already been declared  
---
多引用了一次vite在script里

2.路由无法跳转  
---
index.js的路径不对且在每个index.vue中没有引用ref就使用const ref={0}；
在package.json debug

3.子路由跳转到父理由的页面  
---
子路由的path不用加/ 并且要在引用页面＋**router-view**

4.父标签被子标签的display样式控制  
---
是因为父标签没有设置样式，命名错误

5.element-plus icon 无法导入  
---
因为不但要重新下icon库，还要吧每一个icon单独导入  
``` javascript
import {DArrowRight,DArrowLeft} from '@element-plus/icons-vue'
  export default {
    components: {
        DArrowRight,DArrowLeft
        },
        }
```  
6.设置鼠标移入移出后旋转图片样式复原  
---
是因为没有记录原来的角度，每次移入角度清零，所以在代码里重新设计加一个角度的计算

7.在vue3中移除了过滤器，用函数的方法来重新计算
---
``` javascript
      formatName(val) {
        return val.replace(/\.(mp3|flac)$/, "");
      },
      //格式化时间
      formatTime(val) {
        const min = Math.floor(val / 60);
        const sec = Math.floor(val % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
      }
```
8.vuex的运用出错，无法引入模块  
---
在 Vue 3 的 script setup 语法中，你可能不需要直接导入整个 store，除非你打算在某个组件的上下文中使用它。在大多数情况下，你可能希望直接访问 store 中的状态或方法，这可以通过使用 Composition API 的 ref 和 computed 来实现。
    vue3：
``` javascript
    <script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  console.log(store.state.myState);
});

// 你还可以在这里直接定义和使用其他组合式 API
const myComputedState = computed(() => store.getters.myGetter);
</script>

<template>
  <div>{{ myComputedState }}</div>
</template> 
```
9.vuex要在store里面的mutation里面加入如何去修改状态如下
---
``` javascript
   handleMouseEnter() {
      this.$store.commit('toggleIsBool', true);
  },
     toggleIsBool(state, value) {
      state.isbool = value; 
    },

    10.  handleMouseLeave() {
      this.timeoutId = setTimeout(() => {
        this.$store.commit('toggleIsBool', false);
      }, 1000);
    },这个之后放在图标上一秒后失效，因为timeoutId没有设置，每次判断是否已经进行这个操作

    11overflow：auto的滚动条样式
    ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ccc;
}
```
10.vite创建vue2配置问题  
---
在vite搭建时，不支持直接搭建vue2矿建，只能直接搭建vue3框架，还是使用vue ui或者vuecli来搭建方便，vite搭建vue2需要用原生的van后自己还要搭配相应的配置
11.vue2 组件引入  
---
首先在使用vue2不同页面或者组件的时候要先使用  
```//进行全局引入或者局部引入如   
import xxx from "@/pages/xxx.vue"
```
然后在```
components:{
  
}```  
中进行组件定义，再最后在父组件中进行使用，如<xxx />  
ps:要在定义组件的时候使用大驼峰形式，如FxxxAxxx这样的形式
---
可以在   
```在.eslintrc.cjs里边添加  
rules:{ ‘vue/multi-word-component-names’:‘off’ }
```
中进行修改

``` javascript  
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
++  rules:{
++    'vue/multi-word-component-names':'off'
++  }
}
```
11.vue2中组件的引用要驼峰型
---
12.在vue2中只能有一个根节点
---