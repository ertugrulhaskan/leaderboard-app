import { defineStore } from "pinia";
import { useModalBoxStore } from "#imports";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    players: [],
    loading: false,
    error: null,
    searchQuery: "",
    sortingType: "asc",
    player: null,
  }),
  getters: {
    filteredPlayers: (state) => {
      // We don't need to debounce the search query here
      return state.players.filter((player) =>
        player.name.toLowerCase().includes(state.searchQuery.toLowerCase()),
      );
    },
  },
  actions: {
    async fetchPlayers() {
      this.loading = true;
      try {
        const { data, error } = await useFetch("/api/players", {
          lazy: true,
          server: true,
          dedupe: "defer",
        });
        if (error.value) {
          this.error = error.value;
          console.error("Error fetching players:", error.value);
          return;
        }
        this.players = data.value || [];
      } catch (error) {
        console.error("Error fetching players:", error);
        this.error = error;
      } finally {
        this.loading = false;
        this.sortPlayers("name");
      }
    },
    sortPlayers(by = "score") {
      this.players.sort((a, b) => {
        if (typeof a[by] === "string") {
          return this.sortingType === "asc"
            ? a[by].localeCompare(b[by])
            : b[by].localeCompare(a[by]);
        } else {
          return this.sortingType === "asc" ? a[by] - b[by] : b[by] - a[by];
        }
      });
    },
    deletePlayer(id) {
      this.players = this.players.filter((player) => player.id !== id);
      this.sortPlayers();
    },
    incrementScore(id) {
      const player = this.players.find((player) => player.id === id);
      if (player) {
        player.score++;
      }
      this.sortingType = "desc";
      this.sortPlayers();
    },
    decrementScore(id) {
      const player = this.players.find((player) => player.id === id);
      if (player && player.score > 0) {
        player.score--;
      }
      this.sortingType = "desc";
      this.sortPlayers();
    },
    addPlayer(player) {
      const storeModalBoxStore = useModalBoxStore();

      this.players.push(player);
      this.sortingType = "desc";
      this.sortPlayers();
      storeModalBoxStore.closeModal();
    },
  },
});
