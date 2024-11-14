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