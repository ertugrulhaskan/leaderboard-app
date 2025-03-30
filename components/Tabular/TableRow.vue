<script setup>
const storePlayers = usePlayersStore();
const { player: playerDetails, filteredPlayers } = storeToRefs(storePlayers);

const playerDetailsHandler = (event, player) => {
  const rowClicked =
    event.target.parentElement.tagName === "TD" ||
    event.target.parentElement.tagName === "TR";
  if (rowClicked) {
    playerDetails.value = player;
  } else {
    playerDetails.value = null;
  }
};
</script>

<template>
  <tr v-if="filteredPlayers.length === 0">
    <td colspan="4" class="p-4 text-center font-bold">No players found.</td>
  </tr>
  <tr
    v-for="(player, index) in filteredPlayers"
    :key="player.id"
    class="group cursor-pointer border-b border-gray-200 last:border-none even:bg-gray-50 hover:bg-amber-50"
    @click="playerDetailsHandler($event, player)"
  >
    <td class="border-gray-200 text-center">
      <div class="relative px-4 py-2">
        <span class="text-sm">{{ index + 1 }}</span>
        <button
          type="button"
          class="absolute top-1.5 -left-0.5 hidden cursor-pointer items-center justify-center rounded-full group-hover:flex hover:text-red-600"
          @click="storePlayers.deletePlayer(player.id)"
        >
          <Icon name="material-symbols:delete-forever" class="text-3xl" />
        </button>
      </div>
    </td>
    <td class="border-l border-gray-200 text-left text-sm">
      <div class="relative px-4 py-2">
        {{ player.name }}
        <TabularPlayerDetails
          v-show="playerDetails?.id === player.id"
          :player="playerDetails"
          @close="playerDetails = null"
        />
      </div>
    </td>
    <td class="border-l border-gray-200 px-4 py-2 text-right text-sm">
      {{ player.score }}
    </td>
    <td class="border-l border-gray-200 px-4 py-2 text-center">
      <div class="flex justify-end">
        <button
          type="button"
          class="flex cursor-pointer items-center rounded bg-emerald-600 text-white hover:bg-emerald-800"
          @click="storePlayers.incrementScore(player.id)"
        >
          <Icon name="material-symbols:add" class="text-xl" />
        </button>
        <button
          type="button"
          class="ml-2 flex cursor-pointer items-center rounded bg-rose-600 text-white hover:bg-rose-800"
          @click="storePlayers.decrementScore(player.id)"
        >
          <Icon name="material-symbols:remove" class="text-xl" />
        </button>
      </div>
    </td>
  </tr>
</template>
