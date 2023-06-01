<template>
  <div ref="trigger" @click.stop="handleTriggerClick" class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, onMounted } from 'vue'
import { ContextKey } from './symbols';

const context = inject(ContextKey)!

const trigger = ref(); 

const handleTriggerClick = () => {
  context.methods.togglePopover()
}

onMounted(() => {
  context.methods.setTrigger(trigger.value)
})
</script>