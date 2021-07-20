<template>
  <div class="sound" @click="showText = true">
    <div class="video" ref="video" />
    <vue-blotter
      v-if="showText"
      style="position: relative"
      family="Noto IKEA"
      fill="white"
      text-style="normal"
      :size="299"
      material-type="RollingDistortMaterial"
      :paddingLeft="100"
      :paddingRight="100"
      text="DJ Relay"
      :uniforms="{
        uSpeed: 0.05,
      }"
    >
      <h1 slot-scope="{ blotterScope }" @click="init(blotterScope)"></h1>
    </vue-blotter>
  </div>
</template>

<script>
import VueBlotter from "vue-blotter";
import analyzeSound from "@/funcs/analyzeSound";

console.log(VueBlotter, "lols");

export default {
  components: {
    VueBlotter,
  },
  data() {
    return {
      src: require("@/assets/audio/test2.mp3"),
      video: require("@/assets/video/vulfpeck.mp4"),
      frequence: 100,
      scope: null,
      showText: false,
    };
  },
  methods: {
    update() {
      this.scope.material.uniforms.uNoiseDistortVolatility.value =
        this.frequence / 450;

      console.log(this.frequence);
      //this.scope.material.uniforms.uVolatility.uSpeed = this.frequence / 450;
    },
    init(scope) {
      this.scope = scope;
      this.setupWebAudio();
      this.draw();
    },
    setupWebAudio(el, src) {
      var video = document.createElement("video");
      video.src = this.video;
      video.controls = "true";
      this.$refs.video.appendChild(video);

      var audioContext = new AudioContext();
      this.analyser = audioContext.createAnalyser();
      var source = audioContext.createMediaElementSource(video);
      source.connect(this.analyser);
      this.analyser.connect(audioContext.destination);
      video.play();
    },
    draw() {
      this.raf = requestAnimationFrame(this.draw);

      var freqByteData = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteFrequencyData(freqByteData);
      this.frequence = freqByteData[0];
      this.update();
      //console.log(freqByteData);
    },
    stop() {
      clearAnimationFrame(this.raf);
    },
  },
};
</script>

<style lang="scss">
.sound {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;

  .video,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
