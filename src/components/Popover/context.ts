import { createPopper, Placement } from "@popperjs/core";
import { reactive, watch, nextTick, readonly } from "vue";

export type PopoverState = {
  manualMode: boolean
  isOpen: boolean
  trigger: HTMLElement | null
  content: HTMLElement | null,
  placement?: Placement
}

const state = reactive<PopoverState>({
  manualMode: false,
  isOpen: false,
  trigger: null,
  content: null
})

const methods = {
  togglePopover() {
    if(state.manualMode) return
    state.isOpen = !state.isOpen
  },
  closePopover() {
    if(state.manualMode) return
    state.isOpen = false
  },
  setIsOpen(value: boolean) {
    state.isOpen = value
  },
  setContent(content: HTMLElement) {
    state.content = content
  },
  setTrigger(trigger: HTMLElement) {
    state.trigger = trigger
  },
  setKey<T extends keyof PopoverState>(key: T, value: PopoverState[T]) {
    state[key] = value
  }
}

watch(() => state.isOpen, async (value) => {
  if(!value) return
  await nextTick()
  createPopper(state.trigger as Element, state.content!, {
    placement: state.placement,
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

