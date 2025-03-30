<script setup>
const searchQuery = ref("");
const emit = defineEmits(["search"]);

const onSearch = () => {
  emit("search", searchQuery.value);
};
</script>
<template>
  <div class="relative">
    <Icon
      name="material-symbols:search"
      class="pointer-events-none absolute top-3 left-4 text-xl text-gray-300"
    />
    <input
      v-model="searchQuery"
      class="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 focus:border-blue-500 focus:ring focus:ring-blue-200"
      type="text"
      placeholder="Search..."
      @input="onSearch"
    />
  </div>
</template>
