<script setup>
  import { ref, onMounted, watchEffect } from "vue"
  import {useRouter} from "vue-router"

  const router = useRouter()
  const pictures = ref([])
  onMounted(() => {
    fetchPics()
  })

  const fetchPics = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${'N5k9c1xKpNnyFOtWie2TufAPe70SnNObJGffGjAnWy0'}&page=1&per_page=8`)
    .then((res) => res.json())
    .then(pics => {
      pictures.value = pics
    })
  }

  
  const search = ref('')

  const fetchSearchPics = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos/?client_id=${'N5k9c1xKpNnyFOtWie2TufAPe70SnNObJGffGjAnWy0'}&page=1&per_page=8&query=${search.value}`)
    const newData = await response.json()
    console.log(newData)
    pictures.value = newData.results
  }

  watchEffect(() => {
    // console.log(newV, oldV)
    if(search.value.length !== 0) fetchSearchPics(search)
  })

</script>

<template>
  <div class="search-block">
    <input
      type="text"
      placeholder="Поиск"
      class="input-search"
      v-model="search"
    />
  </div>
  {{search}}
  <div class="pics-block">
    <!-- <div class="pics" v-for="pic in pictures" v-bind:key="pic.id"> -->
      <div
        :to="pic.id"
        v-for="pic in pictures" 
        v-bind:key="pic.id"
        @click="router.push(`${pic.id}`)"  
      >
        <img :src="pic.urls.small"/>
      </div>
    <!-- </div> -->
  </div>

</template>

<style>

  .search-block {
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/background.png') no-repeat;
    background-size: cover;
  }
  .search-block .input-search {
    width: 40%;
    height: 70px;
    background-color: #fff;
    padding: 8px 20px;
    border: none;
    font-size: 18px;
    font-weight: 300;
  }
  .input-search::after {
    content: "020";
    background: url("../assets/search.svg") no-repeat;
    width: 23px;
    height: 23px;
    display: block;
  }
  .input-search:focus {
    outline: none;
  }
  .pics-block {
    padding: 20px 150px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .pics-block div {
    width: 32%;
  }
  .pics-block div > img {
    width: 100%;
    height: 400px;
  }
</style>