<script setup>
import RButton from './components/Button.vue'
import RIcon from './components/Icon.vue'
import RRouterLink from './components/RRouterLink.vue'
import RWorkflow from './features/RWorkflow.vue'
</script>

<template>
	<aside class="aside">
		<header class="aside-bar">
			<h2 class="logo">
				Ritium
			</h2>
			<RButton
				r_type="iconic"
				:r_dark="true"
				r_size="normal"
				:r_round="true"
			>
				<RIcon r_icon="chevron-left" />
			</RButton>
		</header>
		<div class="aside-main">
			<nav class="navigation">
				<header class="navigation-header">
					<RRouterLink
						r_to="/"
						class="link link-workflow"
					>
						Workflow
					</RRouterLink>
				</header>
				<ul class="navigation-links">
					<li
						v-for="route of routes"
						:key="route.id"
					>
						<RRouterLink
							v-if="route.path !== '/'"
							:r_to="route.path"
							class="link link-route"
						>
							<RIcon
								v-if="route.icon"
								class="link-icon"
								:r_icon="route.icon"
							/>
							{{ route.title }}
						</RRouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</aside>
</template>

<script>
import { routes } from '../routes.js'
export default {
	name: 'RitiumAside',
	data() {
		return {
			routes: []
		}
	},
	beforeMount() {
		for (let [id, { path, title, icon }] of routes.entries()) this.routes.push({
			id, path, title, icon
		})
	}
}
</script>

<style scoped lang="sass">
@import "../styles/_colors.sass"
@import "../styles/_sizes.sass"

.aside
	color: $color-aside_text
	background-color: $color-aside_background
	&-bar
		padding: 0 .7em
		display: flex
		justify-content: space-between
		align-items: center
		height: $size-aside_header--height
		background-color: $color-aside_header-background
	&-main
		padding: .3em .7em

.navigation
	&-header
		font-size: 120%
	&-links
		list-style: none
		padding-left: .4em

.link
	text-transform: capitalize
	text-decoration: none
	color: $color-aside-link
	&:focus,
	&:active
		outline: none
		border-left-color: $color-link
		color: $color-link
	&-icon
		width: 1.2em
		text-align: center
	&-route
		padding-left: .4em
		border-left: 2px solid $color-aside-link
		&:hover
			border-left-color: $color-link

	&-workflow
		color: $color-aside-link_primary
</style>
