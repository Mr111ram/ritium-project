<script setup>
import RitiumRoot from './Ritium/Root.vue'
import RitiumAside from './Ritium/Aside.vue'
import RitiumMain from './Ritium/Main.vue'
</script>

<template>
	<RitiumRoot id="root">
		<RitiumAside id="aside" />
		<RitiumMain id="main" />
	</RitiumRoot>
</template>

<script>
export default {
	name: 'RitiumApp',
}
</script>

<style lang="sass">
@import './styles/_colors.sass'
@import './styles/reset.sass'

html
	font-family: 'Ubuntu', Roboto, sans-serif
	color: $color-text_main

#root
	display: grid
	grid-template-areas: "aside main"
	grid-template-columns: 1fr 5fr
	grid-template-rows: 100vh

#aside
	min-width: 200px
	grid-area: aside
#main
	grid-area: main
</style>
