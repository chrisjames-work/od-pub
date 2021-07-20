<template>
  <div class="columns">
    <div class="col">
      <h1 v-for="n in 30" :key="n">Let's eat</h1>
    </div>
    <div class="col">
      <h1 v-for="n in 30" :key="n">Let's eat</h1>
    </div>
    <div class="col">
      <h1 v-for="n in 30" :key="n">Let's eat</h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.columns {
  width: 150vw;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  .col {
    //width: 50vw;
    flex: 1;
  }

  h1 {
    margin: 0;
    display: inline-block;
  }
}
</style>
