---
title: Avue学习
date: 2024-7-4
categories:
  - 前端
tags:
  - JavaScript
  - 学习
sticky: 3
---
1.在现有项目中使用 Avue 时，可以通过 npm 或 yarn 进行安装(需要先引入ElementUI作为依赖支持)：
---
``` javascript
npm i @smallwei/avue@latest-v2 -S
yarn add @smallwei/avue@latest-v2 -S

//需要先安装ElementUI的依赖
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(ElementUI)
Vue.use(Avue);
```
2.使用字典需要引入axios
---
```javascript
import axios from 'axios'
Vue.use(Avue,{axios})

//老版本需要使用如下
//main.js
window.axios = axios
```  
**ps:在vue ui中也可以直接配置vue**
3.在引入 Avue 时，可以传入一个全局配置对象
---
```javascript 
Vue.use(AVUE,{
  size:'',
  crudOption:{},
  formOption:{},
  tableSize:'',
  formSize:''
  appendToBody:true,
  modalAppendToBody:true,
  cos:{},
  qiniu:{},
  ali:{},
  canvas:{}
});
```
**Avue报错**
---
1.在引入的时候记得加入div
---
