<script setup lang="ts">
import Button from './components/Button/Button.vue';
import Popover from './components/Popover/Popover.vue';
import Notify from './components/Notify/Notify.vue'
import PopoverTrigger from './components/Popover/PopoverTrigger.vue';
import PopoverContent from './components/Popover/PopoverContent.vue';
</script>

<template>
  <Popover :placement="'bottom'">
    <PopoverTrigger>
      <Button>Hello</Button>
    </PopoverTrigger>
    <PopoverContent>
      <Notify>
        <span>Hello</span>
      </Notify>
    </PopoverContent>
  </Popover>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
