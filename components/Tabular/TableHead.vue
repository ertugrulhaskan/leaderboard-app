<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <thead>
    <tr>
      <th
        v-for="col in props.columns"
        :key="JSON.stringify(col)"
        :class="
          twMerge(
            `border-b border-l border-gray-200 bg-gray-100 px-4 py-2 text-left ${col.classes} font-mono font-bold uppercase first:border-l-0`,
          )
        "
      >
        {{ col.name }}
      </th>
    </tr>
  </thead>
</template>
