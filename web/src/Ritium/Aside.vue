<script setup>
import RCButton from '@/Ritium/components/Button.vue'
</script>

<template>
	<aside>
		<header>
			<h2 class="logo">Ritium</h2>
			<RCButton r_text="<<" r_type="iconic-small" r_white="false" />
		</header>
		<main>
			<ul>
				<li>1. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
				<li>2. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
				<li>3. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
				<li>4. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
				<li>5. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
			</ul>
		</main>
	</aside>
</template>

<script>
export default {
	name: 'RitiumAside',
}
</script>

<style lang="sass">
@import "../styles/_colors.sass"
@import "../styles/_sizes.sass"

aside
	color: $color-aside_text
	background-color: $color-aside_background
	header
		padding: 0 10px
		display: flex
		justify-content: space-between
		align-items: center
		height: $size-aside_header--height
		background-color: $color-aside_header-background
</style>
