<script setup>
const storePlayers = usePlayersStore();
const { searchQuery } = storeToRefs(storePlayers);
</script>
<template>
  <div class="relative">
    <Icon
      name="material-symbols:search"
      class="pointer-events-none absolute top-3 left-4 text-xl text-gray-300"
    />
    <input
      v-model="searchQuery"
      class="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-gray-900 outline-none focus:border-indigo-600"
      type="text"
      placeholder="Search..."
    />
    <button v-if="searchQuery" type="button">
      <Icon
        name="material-symbols:close-rounded"
        class="absolute top-3 right-4 cursor-pointer text-xl text-gray-900"
        @click="searchQuery = ''"
      />
    </button>
  </div>
</template>
