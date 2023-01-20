<template>
	<main>
		<header>
			<button>click</button>
			<button>click</button>
			<button>click</button>
			<button>click</button>
			<button>click</button>
		</header>
		<section>
			<h1>Main app view</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem asperiores
				amet iure reiciendis obcaecati sed?
			</p>
		</section>
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
</style>
