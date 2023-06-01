<template>
  <button :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const { disabled = false } = defineProps<{
  disabled?: boolean
}>()
</script>