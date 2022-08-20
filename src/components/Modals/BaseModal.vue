<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Header
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              Body
            </slot>
          </div>

          <div class="modal-footer">
            <button class="modal-default-button white-btn" style="margin-right: auto" @click="close">Отменить</button>
            <slot name="footer" @click="close">
              <button class="modal-default-button" @click="close">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class BaseModal extends Vue {
  public close () {
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: table;
  transition: opacity 0.3s ease;

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;

    .modal-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
      transition: all 0.3s ease;

      .modal-header {
        padding: 32px;
        border-bottom: 1px dashed #E2E8F0;
      }

      .modal-body {
        padding: 32px;
      }

      .modal-footer {
        padding: 0 32px 32px;
        display: flex;
        flex-direction: row;

        .modal-default-button {
          width: max-content;
        }
      }
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
