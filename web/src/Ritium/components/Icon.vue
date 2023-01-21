<template>
	<i :class="classList"></i>
</template>

<script>
/* Icons
 * https://zavoloklom.github.io/material-design-iconic-font/icons.html
 * */
export default {
	name: 'RIcon',
	props: {
		r_icon: String,
	},
	computed: {
		classList() {
			return ['r_icon', 'zmdi', `zmdi-${this.r_icon}`]
		},
	},
}
</script>

<style scoped lang="sass">
.r_icon
	transition: all ease-in-out .2s
</style>
