<template>
  <li>
    <router-link :to="to" exact-active-class="text-white border-r-4 border-accent"
                 class="flex items-center px-8 py-1  text-sm font-medium">
      <!--// icon slot-->
      <span :class="{'text-accent': isActive}">
            <slot name="icon"></slot>
      </span>

      <span class="ml-2">{{ text }}</span>
    </router-link>
  </li>
</template>

<script setup>
import {computed} from "vue";
import {useRouter} from "vue-router";

const props = defineProps({
  to: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: true
  }
});

const router = useRouter();


const isActive = computed(() => {
  return router.currentRoute.value.path === props.to;
})

</script>

<style scoped>

</style>