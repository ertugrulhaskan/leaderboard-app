<script setup>
const { data: players, status } = useFetch("/api/players");
</script>

<template>
  <table class="w-full border-collapse font-sans">
    <thead>
      <tr>
        <th
          class="w-10 border-b border-gray-200 bg-gray-100 px-4 py-2 text-left"
        >
          Rank
        </th>
        <th
          class="border-b border-l border-gray-200 bg-gray-100 px-4 py-2 text-left"
        >
          Player
        </th>
        <th
          class="w-20 border-b border-l border-gray-200 bg-gray-100 px-4 py-2 text-left"
        >
          Points
        </th>
      </tr>
    </thead>
    <tbody v-if="status === 'pending'">
      Loading...
    </tbody>
    <tbody v-else-if="status === 'error'">
      <tr>
        <td colspan="3" class="text-center text-red-500">
          Players could not be loaded.
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <tr
        v-for="(player, index) in players"
        :key="player.id"
        class="cursor-pointer border-b border-gray-300 last:border-none even:bg-gray-100 hover:bg-amber-50"
      >
        <td class="border-gray-200 px-4 py-2 text-right">{{ index + 1 }}</td>
        <td class="border-l border-gray-200 px-4 py-2 text-left">
          {{ player.name }}
        </td>
        <td class="border-l border-gray-200 px-4 py-2 text-right">
          {{ player.score }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
