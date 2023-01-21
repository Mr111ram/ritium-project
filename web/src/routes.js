import { createRouter, createWebHistory } from 'vue-router'

import RToDo from './Ritium/features/RToDo.vue'
import RNow from './Ritium/features/RNow.vue'
import RWorkflow from './Ritium/features/RWorkflow.vue'

export const routes = [
	{
		icon: 'check-all',
		title: 'tasks',
		path: '/RToDo',
		component: RToDo,
	},
	{
		icon: 'timer',
		title: 'now',
		path: '/RNow',
		component: RNow,
	},
	{
		title: 'workflow',
		path: '/',
		component: RWorkflow,
	},
]

export const vueRouter = createRouter({
	routes,
	history: createWebHistory()
})
