<script setup>
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const storePlayers = usePlayersStore();
const { players } = storeToRefs(storePlayers);

const validationSchema = toTypedSchema(
  zod.object({
    name: zod
      .string({
        required_error: "Name is required",
      })
      .min(3, "Name must be at least 3 characters long")
      .refine((value) => !/[^a-zA-Z\s]/.test(value), {
        message: "Name must only contain letters and spaces",
      })
      .refine(
        (value) => {
          const iseUserExist = players.value.filter(
            (player) => player.name.toLowerCase() === value.toLowerCase(),
          );
          return iseUserExist.length === 0;
        },
        {
          message: "Name already exists",
        },
      ),
    age: zod
      .string({
        required_error: "Age is required",
      })
      .min(1, "Age must be at least 1 character long")
      .max(3, "Age must be at most 3 characters long")
      .transform((value) => parseInt(value, 10))
      .refine((value) => !isNaN(value), {
        message: "Age must be a number",
      })
      .refine((value) => value > 0, {
        message: "Age must be a positive number",
      })
      .refine((value) => value < 120, {
        message: "Age must be less than 120",
      }),
    address: zod
      .string({
        required_error: "Address is required",
      })
      .min(5, "Address must be at least 5 characters long"),
  }),
);

const { handleSubmit, errors } = useForm({
  validationSchema,
});

const { value: name } = useField("name");
const { value: age } = useField("age");
const { value: address } = useField("address");

const onSubmit = handleSubmit((values) => {
  // Simulate an API call
  storePlayers.addPlayer({
    ...values,
    id: Date.now(),
    score: 0,
  });
});
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div class="flex flex-col gap-4 p-4">
      <BaseInput
        v-model="name"
        label="Full Name"
        type="text"
        :is-required="true"
        :is-error="errors.name"
      />
      <BaseInput
        v-model="age"
        label="Age"
        type="text"
        :is-required="true"
        :is-error="errors.age"
      />
      <BaseInput
        v-model="address"
        label="Address"
        type="text"
        :is-required="true"
        :is-error="errors.address"
      />
      <button
        :disabled="Object.keys(errors).length > 0"
        type="submit"
        class="flex cursor-pointer items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-white transition duration-200 hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-300"
      >
        Add Player
      </button>
    </div>
  </form>
</template>
