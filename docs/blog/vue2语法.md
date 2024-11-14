---
title: vue2语法总结
date: 2024-7-4
categories:
  - 前端
tags:
  - JavaScript
  - 学习

---

1.插值表达式
---

```JavaScript
<template>
  <div>
    <h1>{{title1}}</h1>
    <p>{{title2}}</p>
    <p>{{age>= 18 ? '成年':'未成年'}}</p>
    <p>{{ min + max  }}</p>
    <p>{{ Obj.name}}</p>
    <p>{{ Obj.num}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title1: "我是一个标题1",  
      title2: "我是标题2",
      age:19,
      min:1,
      max:20,
      Obj:{
        name:'kk',
        num:1,
      }
    }

  }
}
</script>
```
成功展示:
<my-component/>

2.各式的v-表达式
---
1. v-if : 销毁渲染 , 占用资源
2. v-show : 对属性的设置, display: none 隐藏
3. v-model : 双向绑定数据, 一般用于表单
4. v-bind: 可简写:title , 单向数据
5. computed : 计算属性, 利用缓存的机制, 提高效率, 减少资源占用
6. 修饰符的作用: 对输入值的限制约束 , 按键响应 等等
7. v-for 遍历数据  
key是必须的  
---
8. v-text ，v-html：区别于 v-html显而易见可以解析 html标签元素	

**双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 v-html 指令**
```JavaScript
<template>
    <div>
         <p >{{msg}}</p>
   <p ><span v-html="msg"></span></p>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        msg:'<span style="color: red">This should be red.</span>',

      }
  
    },
    methods:{

  }
}
  </script>
  ```
以下是展示：
<vue2-H/>  

**v-if和v-show都是用来隐藏，使用频率高使用v-show，反之用v-if**  

### v-bind特别常用简写是：
```javascript
<template>
    <div class="div1" v-bind:class="{ div2:true}">
      123
      <div class="div1" :class="{ div2:false}">
      123
    </div>
    </div>
   
  </template>
  
  <script>
  export default {
    data(){
      return{
     
      }
  
    },
    methods:{
  
  }
  }
  </script>
  <style>
  .div1{
      color: aqua;
  }
  .div2{
      color: black;
  }
  </style>
```
以下是展示:
<vue2-B/>

V-MODEL:
```javascript 
<template>
    <div class="div1" v-bind:class="{ div2:true}">
        <p>{{ message }}</p>
        <input v-model="message">
 </div>
   
  </template>
  
  <script>
 <template>
  <div>
      <p>{{ message }}</p>
      <input v-model="message">
</div>
 
</template>

<script>
export default {
  data(){
    return{
   message:'yyy'
    }

  },
  methods:{

}
}
</script>
<style>

</style>
```
如下展示：
<vue2-M/>
