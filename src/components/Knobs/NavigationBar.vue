<template>
  <div class="navigation-bar">
    <div class="column left">
      <slot name="left" />
    </div>
    <div class="column center">
      <type display="h3">{{ title }}</type>
    </div>
    <div class="column right">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation-bar {
  height: 44px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //place-items: center;
  padding-left: 16px;
  padding-right: 16px;

  .column {
    display: flex;
    align-items: center;
    flex: 1;
    color: green;

    &.center {
      justify-content: center;
      color: darkred;
      white-space: nowrap;
    }
    &.right {
      justify-content: flex-end;
    }
  }
}
</style>
