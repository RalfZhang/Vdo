<template>
  <div>

    <mu-paper :zDepth="2">
      <mu-appbar title='豆瓣电影'>
        <mu-icon-button icon='menu' slot="left" />
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="正在热映" />
        <mu-tab value="tab2" @active="handleActive" title="即将上映" />
      </mu-tabs>
    </mu-paper>
    <div v-if="activeTab === 'tab1'">
      <MSPB></MSPB>
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>Tab Two</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
  </div>
</template>

<script>
  import MSC from './MSC';
  import MSP from './MSP';
  import MSPB from './MSPB';

  export default {
    data() {
      return {
        activeTab: 'tab1',
      };
    },
    components: {
      MSC,
      MSP,
      MSPB,
    },
    methods: {
      handleTabChange(val) {
        this.activeTab = val;
      },
      handleActive() {
        console.log('tab active');
      },
    },
  };

</script>

<style lang="css">
.mspd{
  text-align: center;
  padding: 8px;
}
.msp{
  width: 30%;
  min-height: 150px;
  margin: 4px;
  display: inline-block;
  
}
</style>
