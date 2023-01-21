<script setup>
import RButton from './components/Button.vue'
import RIcon from './components/Icon.vue'
</script>

<template>
	<main>
		<header class="bar">
			<div class="bar_left">
				<h2>header bar</h2>
			</div>
			<div class="bar_right">
				<RButton r_type="iconic">
					<RIcon r_icon="check" />
				</RButton>
				<RButton r_type="iconic">
					<RIcon r_icon="plus" />
				</RButton>
				<RButton r_type="iconic">
					<RIcon r_icon="star" />
				</RButton>
				<RButton r_type="iconic">
					<RIcon r_icon="apps" />
				</RButton>
			</div>
		</header>
		<router-view />
	</main>
</template>

<script>
export default {
	name: 'RitiumMain',
}
</script>

<style lang="sass" scoped>
@import "../styles/_colors.sass"
@import "../styles/_sizes.sass"

main
	background-color: $color-main_background
	color: $color-main_text
	header
		height: $size-main_header--height
		background-color: $color-header_background
	section
		padding: .3em .7em

.bar
	display: flex
	align-items: center
	justify-content: space-between
	padding: 0 .7em
	&-left
		background-color: darkkhaki
	&-right
		background-color: dodgerblue
</style>
