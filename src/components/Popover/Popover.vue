<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { PopoverProps } from './types' 
import { onBeforeMount, provide } from 'vue';
import { context } from './context'
import { ContextKey } from './symbols';

const props = defineProps<PopoverProps>()

provide(ContextKey, context)

onBeforeMount(() => {
  context.methods.setProps(props)
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