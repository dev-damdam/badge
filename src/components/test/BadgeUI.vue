<template>
  <div class="content-card-wrapper">
    <div class="content-card">
      <div class="content-card-image-wrap">
        <img
          class="content-card-image"
          src="../../assets/testBadge/imgs/education_contents_2.png"
        />
      </div>
      <Badge
        ref="badge"
        v-bind:badgeTypeStyle="badgeTypeStyleObject"
        v-bind:styleObject="badgeStyleObject"
        v-bind:idx="idx"
        @click.native.prevent="evt_selectedContent()"
      />
    </div>
  </div>
</template>
<script>
import Badge from "../badge/Badge.vue";
export default {
  name: "ContentCard",
  props: {
    idx: Number,
  },
  mounted() {},
  data() {
    return {
      badgeTypeStyleObject: {
        bTop: false, // true : top, false : bottom
        bLeft: false, // true : left, false : right
        bInside: false, // true : inside, false : outside
        bCircle: true,
        type: "icon", // number, checkbox, icon / icon 기재 시 아이콘 src 필요
        iconSrc: require("../../assets/testBadge/icons/instagram.png"),
      },
      badgeStyleObject: {
        width: "50px",
        height: "50px",
        backgroundColor: "#fff", //색상표 입력
        color: "#00ffff", //색상표 입력,
        borderRadius: "50px",
        fontSize: "2rem",
      },
    };
  },
  components: {
    Badge,
  },
  methods: {
    evt_selectedContent: function() {
      let selectedDataInfo = this.$refs.badge.req_setSelectBadgeInfo(); // 자식 컴포넌트의 함수를 호출

      this.$emit("select-badge-data", selectedDataInfo);
    },
  },
};
</script>
<style lang="scss" scoped>
.content-card-wrapper {
  width: 100%;
  padding: 24px;
  .content-card {
    width: 100%;
    padding: 4px;

    position: relative;
    top: 0px;
    left: 0px;
    border: 1px solid black;
    .content-card-image-wrap {
      width: 100%;
      height: auto;
      .content-card-image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
