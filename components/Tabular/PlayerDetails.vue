<script setup>
const props = defineProps({
  player: {
    type: Object,
  },
});
const emit = defineEmits(["close"]);
</script>
<template>
  <div
    class="absolute top-0 right-0 z-10 w-6/12 rounded-tr-none border border-gray-200 bg-gray-50 p-4 text-center shadow-lg transition-all duration-300 ease-in-out"
    :class="{
      'translate-x-0 opacity-100': props.player,
      'translate-x-full opacity-0': !props.player,
    }"
  >
    <div class="relative">
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
      <button
        class="absolute -top-8 -right-8 cursor-pointer"
        type="button"
        @click="emit('close')"
      >
        <span class="sr-only">Close</span>
        <Icon
          name="material-symbols:cancel"
          class="absolute top-2 right-2 text-3xl text-indigo-400 hover:text-indigo-600"
        />
      </button>
    </div>
  </div>
</template>
