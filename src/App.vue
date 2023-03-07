<script setup>
import {RouterView} from 'vue-router'
import logo from '../src/assets/logo.svg';
import NavLink from "@/components/common/NavLink.vue";
</script>

<template>
  <div class="max-w-full flex bg-primary ">
    <aside class="min-h-screen w-72 text-secondary shrink-0 py-3 border-r border-gray-800">
      <div class="px-8 my-6">
        <img :src="logo" alt="" class="h-10"/>
      </div>
      <div class="my-4">
        <ul class="flex flex-col gap-y-6">
          <nav-link text="Home" to="/">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
              </svg>
            </template>
          </nav-link>
          <nav-link text="Discover" to="/Discover">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24"
                   height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"
                   stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
                <path d="M13 7l0 .01"></path>
                <path d="M17 7l0 .01"></path>
                <path d="M17 11l0 .01"></path>
                <path d="M17 15l0 .01"></path>
              </svg>
            </template>
          </nav-link>
          <nav-link text="Home" to="/Community">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-safari" width="24"
                   height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"
                   stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 16l2 -6l6 -2l-2 6l-6 2"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              </svg>
            </template>
          </nav-link>
          <nav-link text="Coming Soon" to="/Community">
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-7" width="24"
                   height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none"
                   stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 12l-2 3"></path>
                <path d="M12 7v5"></path>
              </svg>
            </template>
          </nav-link>
        </ul>
      </div>

    </aside>
    <div class=" w-full">
      <nav>

      </nav>
      <main>
        <RouterView/>
      </main>
    </div>
  </div>

</template>

<style scoped>
</style>
