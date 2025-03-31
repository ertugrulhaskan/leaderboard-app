<script setup>
const props = defineProps({
  error: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div v-if="props.error" class="font-mono text-xs font-bold text-rose-600">
    {{ props.error }}
  </div>
</template>
