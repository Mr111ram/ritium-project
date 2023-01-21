<script setup></script>

<template>
	<button
		class="button"
		:data-type="r_type"
		:data-dark="r_dark"
		:data-round="r_round"
		:data-size="r_size"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'RCButton',
	props: {
		r_type: {
			type: String,
			default: 'iconic',
		},
		r_round: {
			type: Boolean,
			default: false,
		},
		r_dark: {
			type: Boolean,
			default: false,
		},
		r_size: {
			type: String,
			default: 'normal',
		},
	},
}
</script>

<style lang="sass" scoped>
@import '../../styles/_sizes.sass'
@import '../../styles/_colors.sass'

.button
	background-color: transparent
	text-align: center
	height: 1.6em
	line-height: unset
	border-radius: .25em
	transition: all ease-in-out .2s
	border: .1em solid transparent
	text-transform: uppercase
	font-family: 'Ubuntu', Roboto, sans-serif
	text-shadow: 1px 1px 2px transparentize($color-text_main, .65)

	&:hover
		cursor: pointer
		box-shadow: inset 0 0 0 100px transparentize($color-text_main, .9)

	&:focus,
	&:active
		outline: none
		border: 2px solid #526ed3

	&[data-dark="false"]
		color: $color-text_main
		&:not([data-type="iconic"])
			border-color: transparentize($color-text_main, .5)
	&[data-dark="true"]
		color: $color-white
		text-shadow: 1px 1px 2px transparentize($color-white, .65)
		&:not([data-type="iconic"])
			border-color: $color-white_secondary
		&:hover
			box-shadow: inset 0 0 0 100px transparentize($color-white_secondary, .9)

	&[data-round="true"]
		border-radius: 50%

	&[data-type="iconic"]
		line-height: unset
		width: 1.6em
	&[data-type="button"]
		font-weight: 300
		padding: 0 .7em
		box-shadow: 1px 1px 4px transparentize($color-text_main, .8)

	&[data-size="small"]
		font-size: $size-iconic_small
	&[data-size="normal"]
		font-size: $size-iconic
	&[data-size="large"]
		font-size: $size-iconic_large
</style>
