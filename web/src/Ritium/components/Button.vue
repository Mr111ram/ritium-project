<script setup></script>

<template>
	<button
		class="button"
		v-text="r_text ?? 'placeholder'"
		:data-type="r_type ?? 'button'"
		:data-white="r_white ?? false"></button>
</template>

<script>
export default {
	name: 'RCButton',
	props: ['r_text', 'r_type', 'r_white'],
}
</script>

<style lang="sass" scoped>
@import '@/styles/_sizes.sass'
@import '@/styles/_colors.sass'
@import '@/styles/reset.sass'

.button
	background-color: transparent
	border: none
	text-align: center
	height: 1.5em
	line-height: 1.5em
	width: 1.5em

	background-color: darkcyan

	&[data-white="true"]
		color: $color-text_main
	&[data-white="false"]
		color: $color-white

	&[data-type="iconic-small"]
		font-size: $size-iconic_small
	&[data-type="iconic"]
		font-size: $size-iconic
	&[data-type="iconic-large"]
		font-size: $size-iconic_large
	// &[data-type="iconic-small"]
	// 	width: $size-iconic-small
	// 	height: $size-iconic-small
	// &[data-type="iconic"]
	// 	width: $size-iconic
	// 	height: $size-iconic
	// &[data-type="iconic-large"]
	// 	width: $size-iconic-large
	// 	height: $size-iconic-large
</style>
