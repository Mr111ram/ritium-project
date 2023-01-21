<template>
	<router-link
		:to="r_to"
		class="link"
	>
		<slot />
	</router-link>
</template>

<script>
export default {
	name: 'RRouterLink',
	props: {
		r_to: {
			type: String,
			default: '/'
		}
	}
}
</script>

<style scoped lang="sass">
.link
	transition: all ease-in-out .2s
</style>
