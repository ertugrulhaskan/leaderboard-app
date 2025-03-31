<script setup>
const storePlayers = usePlayersStore();
const { loading, error } = storeToRefs(storePlayers);

await storePlayers.fetchPlayers();
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full border-collapse font-sans">
      <TabularTableHead
        :columns="[
          {
            name: 'Rank',
            classes: 'w-10',
            sortingValue: null,
          },
          {
            name: 'Player',
            classes: 'text-left min-w-60',
            sortingValue: 'name',
          },
          {
            name: 'Scores',
            classes: 'w-20 text-left',
            sortingValue: 'score',
          },
          {
            name: 'Actions',
            classes: 'w-20 text-center',
            sortingValue: null,
          },
        ]"
      />
      <tbody v-if="loading">
        <tr>
          <td colspan="4" class="min-w- p-4 text-center font-bold">
            Loading...
          </td>
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
  </div>
</template>
