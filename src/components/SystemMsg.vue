<template>
	<div class="sys-wrap">
		<div class="sys-msg">
			{{msg}}
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				msg:''
			}
		},
		props:['msg']
	}
</script>
<style lang='less'>
	.sys-wrap{
		/*background-color: #fff;*/
		padding: 3px;
		display: flex;
		justify-content: center;
		align-items: center;
		.sys-msg{
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: rgba(0,0,0,0.05);
			border-radius: 10px;
			width: 60%;
			color: #999;
		}

	}
</style>