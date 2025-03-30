<script setup>
// const storePlayers = usePlayersStore();
// const { addPlayer } = storeToRefs(storePlayers);

const form = reactive({
  name: "",
  age: "",
  points: 0,
  address: "",
});
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-4 p-4">
      <div class="flex flex-col gap-2">
        <label for="name" class="text-sm font-medium">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="rounded-md border border-gray-300 p-2"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="age" class="text-sm font-medium">Age</label>
        <input
          id="age"
          v-model="form.age"
          type="number"
          class="rounded-md border border-gray-300 p-2"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="address" class="text-sm font-medium">Address</label>
        <input
          id="address"
          v-model="form.address"
          type="text"
          class="rounded-md border border-gray-300 p-2"
          required
        />
      </div>
      <button
        type="submit"
        class="mt-4 flex cursor-pointer items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-white transition duration-200 hover:bg-indigo-600"
      >
        Add Player
      </button>
    </div>
    <div v-if="error" class="mt-2 text-red-500">
      {{ error }}
    </div>
    <div v-if="success" class="mt-2 text-green-500">
      Player created successfully!
    </div>
  </form>
</template>
