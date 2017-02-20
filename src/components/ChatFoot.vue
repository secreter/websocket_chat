<template>
  <div class="foot-wrapper">
    <input class="chat-input" type="text" name="" @keyup.enter="send(msg)" v-model="msg">
    <span class="chat-sub" :class="{'primary':!!msg}"  @click="send(msg)">发送</span>
  </div>
</template>

<script>
import CHAT from '../api/client'
export default {
  data () {
    return {
      msg:''
    }
  },
  ready(){
    CHAT.init()
     console.log(CHAT,'ww')
  },
  methods:{
    send(msg){
      CHAT.submit(msg)
      this.msg=''
      console.log(CHAT)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.foot-wrapper{
  background-color: #f1f1f1;
  height: 40px;
  flex-shrink: 0;
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  border-top: solid 1px rgba(0,0,0,0.1);
  .chat-input{
    height: 100%;
    width: 80%;
    border-radius: 10px;
    outline: none;
    border:none; 
    box-sizing: border-box;
    padding: 5px;
  }
  .chat-sub{
    display: flex;
    background-color: rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 18%;
    border-radius: 10px;
    outline: none;
  }
  .primary{
    background-color: #3CAF36;
  }
}
</style>