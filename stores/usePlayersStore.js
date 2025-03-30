import { defineStore } from "pinia";

export const usePlayersStore = defineStore("players", {
  state: () => ({
    players: [],
    loading: false,
    error: null,
    searchQuery: "",
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
      }
    },
    reorderPlayersScores() {
      this.filteredPlayers.sort((a, b) => b.score - a.score);
    },
    deletePlayer(id) {
      this.players = this.players.filter((player) => player.id !== id);
      this.reorderPlayersScores();
    },
    incrementScore(id) {
      const player = this.players.find((player) => player.id === id);
      if (player) {
        player.score++;
      }
      this.reorderPlayersScores();
    },
    decrementScore(id) {
      const player = this.players.find((player) => player.id === id);
      if (player && player.score > 0) {
        player.score--;
      }
      this.reorderPlayersScores();
    },
  },
});
