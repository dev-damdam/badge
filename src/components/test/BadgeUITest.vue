<template>
  <div class="main-container">
    <div class="select-content-info-wrap">
      <div
        class="select-content-info"
        v-for="(selectContent, index) in arrSelectContentInfo"
        :key="index"
      >
        <span>{{ selectContent.name }}</span>
        <span>{{ selectContent.major }}</span>
      </div>
    </div>
    <div class="content-card-list">
      <div
        class="content-card-wrap"
        v-for="(content, index) in arrContents"
        :key="index"
      >
        <BadgeUI
          v-bind:idx="index"
          @select-badge-data="getContentSelectedState"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BadgeUI from "./BadgeUI.vue";
export default {
  name: "Main",
  components: {
    BadgeUI,
  },
  created() {
    this.setContentData();
  },
  data() {
    return {
      nTotalSelectNumber: 0,
      bSelectContent: false,
      arrContents: [],
      arrSelectContentInfo: [],
    };
  },
  methods: {
    setContentData() {
      for (let i = 0; i < 16; i++) {
        this.arrContents.push({
          idx: i,
          name: "test" + i,
          major: "내분비계",
          selectNumber: 0,
        });
      }
    },
    getContentSelectedState: function(data) {
      if (data["badgeInfo"] !== undefined) {
          this.arrSelectContentInfo.push(this.arrContents[data["idx"]]);
        } else {
          this.arrSelectContentInfo = this.arrSelectContentInfo.filter(
           (item) => item.idx != data["idx"]
          );

          console.log(this.arrSelectContentInfo);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100vh;
  .content-card-list {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    .content-card-wrap {
      width: 172px;
    }
  }
}
</style>
