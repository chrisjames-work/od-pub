<template>
  <div class="home">Home</div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    this.$router.replace({
      name: "Room",
      params: {
        id: 1,
      },
    });
  },
};
</script>
