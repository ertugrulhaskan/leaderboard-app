<script setup>
const storePlayers = usePlayersStore();
const { player } = storeToRefs(storePlayers);
</script>
<template>
  <div
    class="absolute top-28 -right-0.5 z-10 w-4/12 rounded-2xl rounded-tr-none border border-gray-200 bg-gray-50 p-4 text-center shadow-lg transition-all duration-300 ease-in-out"
    :class="{
      'translate-x-0 opacity-100': player,
      'translate-x-full opacity-0': !player,
    }"
    @click="player = null"
  >
    <div class="relative">
      <h2 class="mb-4 font-mono font-bold">
        {{ player?.name }} ({{ player?.age }})
      </h2>
      <div>
        <div
          class="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-mono text-xl font-bold text-white"
        >
          {{ player?.score }}
        </div>
      </div>
      <p class="mt-4 border-t border-gray-200 pt-4">{{ player?.address }}</p>
      <button class="absolute -top-8 -right-8" @click="player = null">
        <span class="sr-only">Close</span>
        <Icon
          name="material-symbols:cancel"
          class="absolute top-2 right-2 cursor-pointer text-3xl text-indigo-400 hover:text-indigo-600"
        />
      </button>
    </div>
  </div>
</template>
