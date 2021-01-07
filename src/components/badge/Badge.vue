<template>
  <div class="badge-wrapper" :class="strBadgePositionClassName">
    <badge-slots>
      <div
        slot="badge"
        :class="strBadgeTypeClassName"
        :style="this.styleObject"
      >
        <!--number-->
        <div 
          v-if="this.badgeTypeStyle['type'] === 'number'">
          <span v-if="badgeInfo !== undefined">
            {{ badgeInfo["select_number"] }}
          </span>
        </div>

        <!--checkbox-->
        <div
          v-if="this.badgeTypeStyle['type'] === 'checkbox'"
          class="badge-custom-checkbox"
        >
          <div class="checkbox-wrap">
            <input type="checkbox" :id="checkboxID" />
            <label :for="checkboxID" v-if="badgeInfo !== undefined"></label>
          </div>
        </div>

        <!--icon-->
        <div
          class="badge-icon-wrap"
          v-if="this.badgeTypeStyle['type'] === 'icon'"
        >
          <img
            :src="this.badgeTypeStyle['iconSrc']"
            v-if="badgeInfo !== undefined"
          />
        </div>
      </div>
    </badge-slots>
  </div>
</template>
<script>
import BadgeSlots from "./BadgeSlots.vue";
import BadgeSelectInfo from "./badge-select-info/badge-select-info.js";
export default {
  name: "Badge",
  components: {
    BadgeSlots,
  },
  props: ["badgeTypeStyle", "styleObject", "idx"],
  created() {
    this.setBadgePosition();
    this.setBadgeStyle();
  },
  data() {
    return {
      strBadgePositionClassName: "",
      strBadgeTypeClassName: "",
      checkboxID: "custom-checkbox-" + this.idx,

      strBadgeStyle: "",

      badgeInfo: undefined,
    };
  },
  methods: {
    setBadgePosition: function() {
      //뱃지 위치 스타일 지정
      this.strBadgePositionClassName = "badge-position";
      if (this.badgeTypeStyle["bTop"]) {
        this.strBadgePositionClassName += "-top";
      } else {
        this.strBadgePositionClassName += "-bottom";
      }
      if (this.badgeTypeStyle["bLeft"]) {
        this.strBadgePositionClassName += "-left";
      } else {
        this.strBadgePositionClassName += "-right";
      }
      if (this.badgeTypeStyle["bInside"]) {
        this.strBadgePositionClassName += "-inside";
      } else {
        this.strBadgePositionClassName += "-outside";
      }
    },

    setBadgeStyle: function() {
      //뱃지 유형별로 스타일 지정
      this.strBadgeTypeClassName =
        "select-badge-" + this.badgeTypeStyle["type"];

      if (this.badgeTypeStyle["bCircle"]) {
        this.strBadgeTypeClassName += " badge-boarder-radius";
      }
    },

    req_setSelectBadgeInfo: function() {
      //선택된 뱃지 정보 저장 및 삭제
      this.badgeInfo = BadgeSelectInfo.getSeletedInfo(this.idx);
      if (this.badgeInfo === undefined) {
        BadgeSelectInfo.addSelectObject(this.idx, 0, false);
        this.badgeInfo = BadgeSelectInfo.getSeletedInfo(this.idx);
      }

      if (this.badgeInfo["select_state"]) {
        BadgeSelectInfo.unSelectItem(this.idx);
        this.badgeInfo = BadgeSelectInfo.getSeletedInfo(this.idx);
      } else {
        BadgeSelectInfo.selectItem(this.idx);
        this.badgeInfo = BadgeSelectInfo.getSeletedInfo(this.idx);
      }

      let info = {
        idx: this.idx,
        badgeInfo: this.badgeInfo,
      };

      console.log(info);

      return info;
    },
  },
};
</script>
<style lang="scss" scoped>
//top
.badge-position-top-left-inside {
  top: 10px;
  left: 10px;
}
.badge-position-top-left-outside {
  top: -10px;
  left: -10px;
}
.badge-position-top-right-inside {
  top: 10px;
  right: 10px;
}
.badge-position-top-right-outside {
  top: -10px;
  right: -10px;
}

//bottom
.badge-position-bottom-left-inside {
  bottom: 10px;
  left: 10px;
}
.badge-position-bottom-left-outside {
  bottom: -10px;
  left: -10px;
}
.badge-position-bottom-right-inside {
  bottom: 10px;
  right: 10px;
}
.badge-position-bottom-right-outside {
  bottom: -10px;
  right: -10px;
}

.badge-wrapper {
  position: absolute;

  width: 50px;
  height: 50px;

  .select-badge-icon {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: white;
    color: black;
    border: 1px solid #bcbcbc;
    border-radius: 2px;
    box-sizing: border-box;

    .badge-icon-wrap {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .select-badge-number {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: white;
    color: black;
    border: 1px solid #bcbcbc;
    border-radius: 2px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  .select-contebadgent-checkbox {
    width: 100%;
    height: 100%;
    border: 1px solid #bcbcbc;
    border-radius: 2px;
    box-sizing: border-box;
    .badge-custom-checkbox {
      width: 100%;
      height: 100%;
      .checkbox-wrap {
        width: 100%;
        height: 100%;
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: transparent;
        input[type="checkbox"] + label:before {
          content: "\2714";
          width: 100%;
          height: 100%;

          font-size: 1.2rem;

          display: flex;
          justify-content: center;
          align-items: center;

          //checkbox hide
          -webkit-appearance: none;
          -moz-appearance: none;
          -o-appearance: none;
          appearance: none;
        }

        input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          -o-appearance: none;
          appearance: none;
          display: none;
        }
      }
    }
  }

  //border-radius
  .badge-boarder-radius {
    border-radius: 50%;
  }
}
</style>
