<template>
  <div ref="content" class="wrapper">
    <Transition name="bounce">
      <template v-if="context.state.isOpen">
        <slot></slot>
      </template>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { ContextKey } from './symbols';

const context = inject(ContextKey)!

const content = ref()

onClickOutside(content, (e) => {
  const trigger = context.state.trigger!
  if(e.target === trigger || trigger.contains(e.target as Node)) return
  context.methods.closePopover()
})

onMounted(() => {
  context.methods.setContent(content.value)
})
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}
.bounce-leave-active {
  animation: bounce-in 0.3s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>