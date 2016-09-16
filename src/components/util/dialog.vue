<template>
<div class="dialog-mask" transition="enter" @click="close">
	<div class="dialg-wrap">
		<slot></slot>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return {
			
		}
	},
	ready(){
	},
	components: {
  },
  props:{
  	'fastClose':{
  		type:Boolean,
  		default:false
  	}
  },
  methods:{
  	close(){
  		if (this.fastClose) {
  			this.$router.go(-1)
  		}
  	},
  }
}
</script>
<style lang='less'>
	.dialog-mask{
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.35);
		z-index: 9;
		display: flex;
		justify-content: center;
		align-items: center;
		.dialg-wrap{
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
</style>