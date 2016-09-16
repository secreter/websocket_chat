<template>
<div class="other-wrap">
  <span class="-header" :style="{'background-color':color}">{{name.slice(-1)}}</span>
  <span class="-name">{{name}}</span>
  <div class="-msg">{{msg}}</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
    }
  },
  ready(){
    this.$el.scrollIntoView()
  },
  props:["msg","name","color"]
}
</script>
<style lang='less'>
.other-wrap{
  /*background-color: #666;*/
  padding: 5px 5px 0 5px;
  position: relative;
  .-header{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #905;
    height:50px;
    width: 50px;
    border-radius: 50%;
    font-weight: bolder;
  }
  .-name{
    /*background-color: #fff;*/
    position: absolute;
    font-size: 14px;
    padding: 2px;
    margin: 0 10px;
    color: #999;
  }
  .-msg{
    /*display: inline-flex;*/
    background-color: #fff;
    padding: 10px;
    position: relative;
    left: 60px;
    top: -20px;
    border-radius: 6px;
    max-width: ~'calc(100% - 180px)';
    font-size: 16px;
    &:before{
      content:'';
      display: inline-block;
      height: 0;
      width: 0;
      border-right: solid 10px #fff;
      border-top: solid 6px transparent;
      border-bottom : solid 6px transparent;
      position: absolute;
      top:5px;
      left: -8px;
    }
  }
}
</style>