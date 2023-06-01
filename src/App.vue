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
