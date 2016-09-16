<template>
  <div class="body-wrapper">
    <template v-for="msgObj in CHAT.msgArr">
      <template v-if="msgObj.islogin">
        <system-msg :msg="msgObj.msg"></system-msg>
      </template>
      <template v-if="!msgObj.islogin">
        <other-msg v-if="msgObj.userid!=CHAT.userid" :name="msgObj.username" :msg="msgObj.msg" :color="msgObj.color"></other-msg>
      <self-msg v-if="msgObj.userid==CHAT.userid" :msg="msgObj.msg" :color="msgObj.color"></self-msg>
      </template>
    </template>
    <!-- <other-msg></other-msg> -->
    
  </div>

</template>

<script>
import OtherMsg from './OtherMsg'
import SelfMsg from './SelfMsg'
import SystemMsg from './SystemMsg'

import CHAT from '../api/client'
export default {
  data () {
    return {
      CHAT
    }
  },
  ready(){
    if (!localStorage.getItem('name')) {
      this.$router.go('/login')
    }
  },
  components:{
    OtherMsg,
    SelfMsg,
    SystemMsg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.body-wrapper{
  background-color: #f6f6f6;
  height: ~'calc(100% - 90px)';
  overflow-y: scroll;

}
</style>