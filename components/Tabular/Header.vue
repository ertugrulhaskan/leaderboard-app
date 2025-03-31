<script setup>
import { TabularNewPlayer } from "#components";

const storeModalBox = useModalBoxStore();
</script>

<template>
  <div class="flex flex-row gap-4 border-b border-gray-200 p-4">
    <TabularSearchBox class="flex-1" />
    <button
      type="button"
      class="flex h-10 w-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-indigo-500 text-white transition duration-200 hover:bg-indigo-700 md:h-auto md:w-auto md:px-4 md:py-2"
      @click="
        storeModalBox.openModal({
          title: 'New Player',
          view: TabularNewPlayer,
        })
      "
    >
      <Icon name="material-symbols:person-add-rounded" class="text-2xl" />
      <span class="hidden md:inline-block">New Player</span>
    </button>
  </div>
</template>
