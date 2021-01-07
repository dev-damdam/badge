<template>
  <div class="badge-slot-container">
    <slot name="badge">
      숫자 뱃지
    </slot>
  </div>
</template>
<script>
export default {
  name: "BadgeSlot",
};
</script>
<style lang="scss" scoped>
.badge-slot-container {
  width: 100%;
  height: 100%;
}
</style>
