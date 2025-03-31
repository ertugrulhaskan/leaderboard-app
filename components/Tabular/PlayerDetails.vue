<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps({
  player: {
    type: Object,
  },
});
const emit = defineEmits(["close"]);
</script>
<template>
  <div
    :class="
      twMerge([
        'absolute top-2 right-2 z-10 hidden min-w-3xs rounded-tr-none border border-gray-200 bg-gray-50 p-4 text-center shadow-lg transition-all duration-300 ease-in-out md:w-6/12',
        props.player ? 'block' : 'hidden',
      ])
    "
  >
    <button
      class="absolute -top-4 -right-4 cursor-pointer"
      type="button"
      @click="emit('close')"
    >
      <span class="sr-only">Close</span>
      <Icon
        name="material-symbols:cancel"
        class="text-3xl text-indigo-400 hover:text-indigo-600"
      />
    </button>
    <h2 class="mb-4 font-mono font-bold">
      {{ props.player?.name }} ({{ props.player?.age }})
    </h2>
    <div>
      <div
        class="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-mono text-sm font-bold text-white"
      >
        {{ props.player?.score }}
      </div>
    </div>
    <p class="mt-4 border-t border-gray-200 pt-4">
      {{ props.player?.address }}
    </p>
  </div>
</template>
