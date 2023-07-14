<script setup>
import store from '../storage';
import { ref } from "vue"
import { useRouter } from 'vue-router';

const router = useRouter()
const favs = ref(store.state.favorites)
</script>

<template>
  <h1>Избранное</h1>
  <div class="pics-block">
      <div
        :to="fav.id"
        v-for="fav in favs" 
        v-bind:key="fav.id" 
        @click="router.push(`${fav.id}`)" 
      >
        <img :src="fav.urls.small"/>
      </div>
  </div>
</template>