<template>
  <div class="player-controls" :class="{ visible: visible }">
    <nav>
      <ul>
        <li>Mute</li>
        <li>CC</li>
        <li>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M12.0664 18.7559C17.9492 18.7559 22.127 13.8809 22.127 12.375C22.127 10.8691 17.9199 6 12.0664 6C6.24805 6 2 10.8691 2 12.375C2 13.8809 6.21875 18.7559 12.0664 18.7559ZM12.0664 17.9355C6.83984 17.9355 2.90234 13.5059 2.90234 12.375C2.90234 11.332 6.83984 6.81445 12.0664 6.81445C17.2812 6.81445 21.2246 11.332 21.2246 12.375C21.2246 13.5059 17.2812 17.9355 12.0664 17.9355ZM12.0664 16.5996C14.3926 16.5996 16.3027 14.6777 16.3027 12.375C16.3027 10.0195 14.3926 8.15039 12.0664 8.15039C9.71094 8.15039 7.8125 10.0195 7.81836 12.375C7.83594 14.6777 9.71094 16.5996 12.0664 16.5996ZM12.0723 13.6934C11.334 13.6934 10.7305 13.1016 10.7305 12.375C10.7305 11.6426 11.334 11.0566 12.0723 11.0566C12.7988 11.0566 13.3965 11.6426 13.3965 12.375C13.3965 13.1016 12.7988 13.6934 12.0723 13.6934Z"
              fill="currentcolor"
            />
          </svg>
        </li>
        <li class="flex">Menu</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.player-controls {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(to bottom, rgba(black, 0) 60%, rgba(black, 0.15));
  font-size: 12px;
  color: white;
  z-index: 10;

  nav {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 40px;
    ul {
      width: 100%;
      list-style: none;
      height: 64px;
      padding: 0;
      display: flex;

      li {
        width: 64px;
        height: inherit;
        border-radius: 64px;
        background: red;
        display: grid;
        place-items: center;
        margin-right: 8px;
        background: rgba(0, 0, 0, 0.01);
        border: 1px solid rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(58px);
        padding: 16px;

        &.flex {
          flex: 1;
          width: auto;

          span {
            width: 100%;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
            //text-overflow: ellipsis;

            mask-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 1),
              rgba(0, 0, 0, 1) 80%,
              rgba(0, 0, 0, 0)
            );
          }
        }
      }
    }
  }
}
</style>
