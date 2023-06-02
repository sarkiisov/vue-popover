<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { PopoverProps } from './types' 
import { onBeforeMount, toRefs, watch, provide } from 'vue';
import { context } from './context'
import { ContextKey } from './symbols';

const props = withDefaults(defineProps<PopoverProps>(), {
  isOpen: null,
  placement: 'auto'
})
const { isOpen, placement } = toRefs(props)

provide(ContextKey, context)

onBeforeMount(() => {
  context.methods.setKey('manualMode', isOpen.value !== null)
  context.methods.setKey('placement', placement.value)
})

watch(isOpen, (value) => {
  context.methods.setIsOpen(value!)
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