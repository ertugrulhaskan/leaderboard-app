<script setup>
import { twMerge } from "tailwind-merge";

const storePlayers = usePlayersStore();
const { sortingType } = storeToRefs(storePlayers);

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
});

const thClasses = (col) => {
  return twMerge(
    `border-b border-l border-gray-200 bg-gray-100 px-4 py-2 text-left ${col.classes} font-mono font-bold uppercase first:border-l-0`,
    `${col.sortingValue ? "cursor-pointer" : "cursor-default"}`,
  );
};

const clickEventHandler = (col) => {
  return col.sortingValue ? storePlayers.sortPlayers(col.sortingValue) : null;
};

const sortingHandler = (col, order) => {
  storePlayers.sortingType = order === "asc" ? "desc" : "asc";
  storePlayers.sortPlayers(col.sortingValue);
};
</script>

<template>
  <thead>
    <tr>
      <th
        v-for="col in props.columns"
        :key="JSON.stringify(col)"
        :class="thClasses(col)"
        @click="clickEventHandler(col)"
      >
        <div class="relative flex items-center justify-between gap-2">
          {{ col.name }}
          <Icon
            v-if="col.sortingValue && sortingType === 'desc'"
            name="ri:sort-alphabet-desc"
            class="inline-block h-6 w-6 text-gray-900 hover:text-orange-500"
            @click="sortingHandler(col, 'desc')"
          />
          <Icon
            v-if="col.sortingValue && sortingType === 'asc'"
            name="ri:sort-alphabet-asc"
            class="inline-block h-6 w-6 text-gray-900 hover:text-orange-500"
            @click="sortingHandler(col, 'asc')"
          />
        </div>
      </th>
    </tr>
  </thead>
</template>
