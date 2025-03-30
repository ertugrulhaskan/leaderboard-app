<script setup>
import { OnClickOutside } from "@vueuse/components";

const storeModalBox = useModalBoxStore();
const { isModalVisible, title, view } = storeToRefs(storeModalBox);
</script>
<template>
  <ClientOnly>
    <Teleport to="#teleports">
      <div
        v-if="isModalVisible"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/40 backdrop-blur-xs transition-all duration-300 ease-in-out"
      >
        <OnClickOutside @trigger="isModalVisible = false">
          <div
            class="flex max-w-2xl min-w-md flex-col overflow-hidden rounded-2xl bg-white shadow-2xs"
          >
            <div
              class="relative flex w-auto flex-row items-center justify-between gap-2 border-b border-gray-200 bg-gray-50 px-4 py-2"
            >
              <h2 class="font-mono text-2xl font-bold uppercase">
                {{ title }}
              </h2>
              <button
                class="flex cursor-pointer flex-col items-center justify-center"
                type="button"
                @click="isModalVisible = false"
              >
                <span class="sr-only">Close</span>
                <Icon
                  name="material-symbols:cancel"
                  class="text-3xl text-indigo-400 hover:text-indigo-600"
                />
              </button>
            </div>
            <div class="px-4 py-2">
              <component :is="view" />
            </div>
          </div>
        </OnClickOutside>
      </div>
    </Teleport>
  </ClientOnly>
</template>
