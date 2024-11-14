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