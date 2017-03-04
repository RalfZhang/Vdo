<template>
	<div>
		<mu-paper :zDepth="2">
			<mu-appbar title='豆瓣电影'>
				<mu-icon-button icon='menu' slot="left" />
				<mu-icon-button icon='search' @click="gotoSearch()" slot='right' />
			</mu-appbar>
			<mu-tabs :value="activeTab()" @change="handleTabChange">
				<mu-tab value="in_theaters" @active="handleActive" title="正在热映" />
				<mu-tab value="coming_soon" @active="handleActive" title="即将上映" />
			</mu-tabs>
		</mu-paper>
		<div v-if="activeTab() === 'in_theaters'">
			<Card type='in_theaters'></Card>
		</div>
		<div v-if="activeTab() === 'coming_soon'">
			<Card type='coming_soon'></Card>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import Card from './Card';
	import * as type from './../../store/movies/type';

	export default {
	  data() {
	    return {
	    };
	  },
	  components: {
	    Card,
	  },
	  methods: {
	    handleTabChange(val) {
	      this.$store.dispatch(type.FETCH_MOVIES_TAB, val);
	      // this.activeTab = val;
	    },
	    handleActive(val) {
	      console.log(`---------tab active-------------${val}`);
	    },
	    gotoSearch() {
	      this.$router.push({ name: 'MovieSearch' });
	    },
	    ...mapState({
	      activeTab: state => state.movie.tab,
	    }),
	  },
	};

</script>

<style lang="css">
</style>
