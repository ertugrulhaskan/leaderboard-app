<script setup>
import { v4 as uuidv4 } from "uuid";

const props = defineProps({
  label: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  isError: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  maxLength: {
    type: [String, Number],
  },
  upperCase: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const getID = computed(() => {
  return uuidv4();
});
</script>

<template>
  <div class="relative flex flex-col gap-2" :class="{ error: props.isError }">
    <div v-if="props.label">
      <label :for="getID" :class="{ required: props.isRequired }">
        {{ props.label }}
      </label>
    </div>
    <input
      :id="getID"
      :type="props.type"
      :name="getID"
      :value="modelValue"
      :maxlength="props.maxLength"
      class="rounded-md border border-gray-300 p-2"
      :class="{
        'border-rose-600': props.isError,
        'border-gray-300': !props.isError,
        uppercase: props.upperCase,
      }"
      @input="emit('update:modelValue', $event.target.value)"
    />
    <!-- :class="{ uppercase: props.upperCase }" -->
    <BaseInputErrorBox v-if="props.isError" :error="props.isError" />
  </div>
</template>
