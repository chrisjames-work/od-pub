<template>
  <div>
    <div id="canvas" />
    <div class="bottom">
      <textarea id="textfield" autofocus>OPEN DOOR</textarea>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
import field2 from "@/sketches/field2";

export default {
  mounted() {
    // Attach the canvas to the div
    this.canvas = new p5(field2, "canvas");
  },
};
</script>
