<template>
	<div>
		<mu-paper :zDepth="2">
			<mu-appbar title='豆瓣电影'>
				<mu-icon-button icon='menu' slot="left" />
				<mu-icon-button icon='search' @click="gotoSearch()" slot='right' />
			</mu-appbar>
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="tab1" @active="handleActive" title="正在热映" />
				<mu-tab value="tab2" @active="handleActive" title="即将上映" />
			</mu-tabs>
		</mu-paper>
		<div v-if="activeTab === 'tab1'">
			<Card type='in_theaters'></Card>
		</div>
		<div v-if="activeTab === 'tab2'">
			<Card type='coming_soon'></Card>
		</div>
	</div>
</template>

<script>
	import Card from './Card';

	export default {
	  data() {
	    return {
	      activeTab: 'tab1',
	    };
	  },
	  components: {
	    Card,
	  },
	  methods: {
	    handleTabChange(val) {
	      this.activeTab = val;
	    },
	    handleActive(val) {
	      console.log(`---------tab active-------------${val}`);
	    },
	    gotoSearch() {
	      this.$router.push({ name: 'MovieSearch' });
	    },
	  },
	};

</script>

<style lang="css">
</style>
