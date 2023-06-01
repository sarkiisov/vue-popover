import { createPopper } from "@popperjs/core";
import { reactive, watch, nextTick, readonly } from "vue";
import { PopoverProps } from "./types";

const state = reactive<{
  isOpen: boolean
  trigger: HTMLElement | null
  content: HTMLElement | null,
  props: PopoverProps
}>({
  isOpen: false,
  trigger: null,
  content: null,
  props: {
    placement: 'right'
  }
})

const methods = {
  togglePopover() {
    state.isOpen = !state.isOpen
  },
  closePopover() {
    state.isOpen = false
  },
  setContent(content: HTMLElement) {
    state.content = content
  },
  setTrigger(trigger: HTMLElement) {
    state.trigger = trigger
  },
  setProps(props: PopoverProps) {
    state.props = {
      ...state.props,
      ...props
    }
  }
}

watch(() => state.isOpen, async (value) => {
  if(!value) return
  await nextTick()
  createPopper(state.trigger as Element, state.content!, {
    placement: state.props.placement,
    modifiers: [
      { name: 'flip' },
      { name: 'computeStyles', options: { gpuAcceleration: false } },
    ],
  });
})

export const context = {
  state: readonly(state),
  methods
}

