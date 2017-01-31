<template>
	<table v-if="items.length">
		<tr>
			<th v-for="(value,key) in items[0]">{{key}}</th>
		</tr>
		<tr v-for="item in items">
			<td v-for="(value,key) in item">{{value}}</td>
		</tr>
	</table>
</template>
<script>
	export default {
		props:{
			items:{
				type:Array,
				default:[]
			}
		}
	}
</script>
