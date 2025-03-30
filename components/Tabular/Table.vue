<script setup>
const storePlayers = usePlayersStore();
const { loading, error } = storeToRefs(storePlayers);

await storePlayers.fetchPlayers();
</script>

<template>
  <table class="w-full border-collapse font-sans">
    <TabularTableHead
      :columns="[
        {
          name: 'Rank',
          classes: 'w-10',
        },
        {
          name: 'Player',
          classes: 'text-left',
        },
        {
          name: 'Points',
          classes: 'w-20 text-left',
        },
        {
          name: 'Actions',
          classes: 'w-20 text-center',
        },
      ]"
    />
    <tbody v-if="loading">
      <tr>
        <td colspan="4" class="p-4 text-center font-bold">Loading...</td>
      </tr>
    </tbody>
    <tbody v-else-if="error">
      <tr>
        <td colspan="4" class="p-4 text-center text-red-500">
          Players could not be loaded.
        </td>
      </tr>
    </tbody>
    <tbody v-else>
      <TabularTableRow />
    </tbody>
  </table>
</template>
