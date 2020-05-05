<template>
  <transition>
    <div v-if="dialog" class="confirm-mask" @click.self="outsideClick">
      <div class="confirm-wrapper" :class="{bounce:outside}" :style="styles">
        <div class="confirm-container" :style="styles">
          <div v-if="title" class="confirm-header">
            <slot name="header">
              <header class="toolbar" :style="{'--titleColor':titleColor}">
                <div class="toolbar-content">
                  <div class="toolbar-title">
                    <i></i>
                    {{title}}
                  </div>
                </div>
              </header>
            </slot>
          </div>

          <div class="confirm-body">
            <slot name="body">
              <span>{{message}}</span>
            </slot>
          </div>

          <hr class="divider" />

          <div class="confirm-footer">
            <slot name="footer">
              <div class="spacer" />
              <button
                class="confirm-button"
                v-for="(button,index) in buttons"
                :key="index"
                :style="{'--btnColor':button.color}"
                @click="button.function"
              >{{button.text}}</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "v-confirm",
  props: {
    dialog: Boolean,
    title: String,
    titleIcon: String,
    titleColor: String,
    message: String,
    buttons: Array,
    width: {
      type: [String, Number],
      default: undefined
    },
    maxWidth: {
      type: [String, Number],
      default: 500
    }
  },
  data: () => ({
    outside: false
  }),
  methods: {
    //ダイアログの外側クリックイベント。フラグを反転させバウンス効果CSSを有効にする
    outsideClick() {
      this.outside = true;
      setTimeout(() => {
        this.outside = false;
      }, 500);
    }
  },
  computed: {
    styles() {
      return {
        "--width": this.width + "px",
        "--maxWidth": this.maxWidth + "px"
      };
    }
  }
};
</script>

<style scoped>
.bounce {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.confirm-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm-wrapper {
  border-radius: 4px;
  margin: 24px;
  overflow: hidden;
  pointer-events: auto;
  width: 100%;
  z-index: inherit;
  --maxWidth: 0;
  max-width: var(--maxWidth);
}

.confirm-container {
  --width: 0;
  width: var(--width);
  height: auto;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.confirm-header {
  width: 100%;
  align-items: center;
  position: relative;
  display: flex;
}

.toolbar {
  height: 56px;
  max-width: 100%;
  display: block;
  flex: 1 1 auto;
  border-radius: 0;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
  --titleColor: red;
  background-color: var(--titleColor);
  color: #fff;
}

.toolbar-content {
  height: 48px;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 0;
  padding: 4px 16px;
}

.toolbar-title {
  font-size: 1.5rem;
  font-weight: 700;
  align-items: baseline;
}

.confirm-body {
  padding: 20px 24px 20px 24px;
}

.divider {
  display: block;
  flex: 1 1 0px;
  max-width: 100%;
  height: 0;
  max-height: 0;
  border: solid #ccc;
  border-width: thin 0 0 0;
  transition: inherit;
  margin: 0;
}

.confirm-footer {
  max-width: inherit;
  align-items: center;
  padding: 8px;
  display: flex;
}

.spacer {
  flex-grow: 1;
}

.confirm-button {
  float: right;
  min-width: 64px;
  height: 36px;
  font-size: 0.875rem;
  border-radius: 4px;
  --btnColor: red;
  background-color: var(--btnColor);
  border-color: var(--btnColor);
  color: #fff;
  outline: 0;
  align-items: center;
  font-weight: 500;
  border-style: none;
  overflow: visible;
  padding: 0 8px;
}

.confirm-button.confirm-button + .confirm-button {
  margin-left: 8px;
}

.confirm-enter {
  opacity: 0;
}

.confirm-leave-active {
  opacity: 0;
}
</style>