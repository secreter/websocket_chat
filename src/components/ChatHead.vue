<template>
  <div class="head-wrapper">
    <div class="-left">
      <a href="http://mp.weixin.qq.com/s?__biz=MzAwMjAzNDU1NQ==&mid=401448725&idx=1&sn=2247d58a5c75e237b0d5f9f14ff42e56#rd">
        <i class="iconfont icon-keaide"></i>
      </a>
      <a href="http://www.redream.cn/main/treehole.php">
        <i class="iconfont icon-tree"></i>
      </a>
    </div>
    <div class="-mid">
      <p class="group-name">江湖人的江湖({{CHAT.onlineCount}})</p>
    </div>
    <div class="-right"  v-link="'/groupinfo'">
      <i class="iconfont icon-group"></i>
    </div>
    
  </div>
</template>

<script>
import Login from './login'
import CHAT from '../api/client'
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: '',
      CHAT:CHAT,

    }
  },
  ready(){
    console.log(11,CHAT.onlineCount)
  },
  components: {
    Login
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.head-wrapper{
  background-color: #34352c;
  height: 50px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;

  .-left{
    display: flex;
    flex-shrink: 0;
    height: 100%；
    width；70px;
    min-width: 70px;
    align-items: center;
    justify-content: space-around;
    .icon-keaide,.icon-tree{
      font-size: 28px !important;
      color: #fff;
    }
    a {
      text-decoration: none;
    }
  }
  .-mid{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #fff;
  }
  .-right{
    display: flex;
    align-items: center;
    height: 100%;
    width: 50px;
    justify-content: center;
    .icon-group{
      font-size: 30px !important;
      color: #fff;
    }
  }
}
</style>