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