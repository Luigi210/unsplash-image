<script setup>
import {ref, onMounted, reactive} from "vue"
import like from "../assets/like_white.svg"
import download from "../assets/download.svg"
import {useRoute} from "vue-router"

const query = reactive({})
// const isLoading = ref(true)
const route = useRoute()
const id = ref(route.params.id)

console.log(id.value)
onMounted( async () => {
  if (id.value){
    console.log("mounted", id.value, query.value)
    const res = await fetch(`https://api.unsplash.com/photos/${id.value}/?client_id=${'N5k9c1xKpNnyFOtWie2TufAPe70SnNObJGffGjAnWy0'}`)
    const resp = await res.json();
    query.value = resp;
    // isLoading.value = false;
    console.log(resp)
  }
})

// console.log(query.value)
</script>

<template>
  <div class="background-blur"
    :style="{
      'background': `url(${query.value?.urls.full}) no-repeat`,
    }"
  >
    <div class="avatar-like-download">
      <div class="avatar">
        <img :src="query.value?.user.profile_image.small"/>
        <div class="profile">
          <h2>{{ query.value?.user.name }}</h2>
          <span>{{ query.value?.user.username }}</span>
        </div>
      </div>
      <div class="like-download">
        <button class="like">
          <img :src="like"/>
        </button>
        <button class="download">
          <img :src="download"/>
          <span>Download</span>
        </button>
      </div>
    </div>
    <div class="image">
      <img
        :src="query.value?.urls?.regular"
      />
    </div>
  </div>
  <h1>Photo {{ $route.params.id }}</h1>
</template>

<style>
  .background-blur{
    /* width: 100%; */
    height: 500px;
    padding: 20px 150px;
    background-size: cover;
    backdrop-filter: blur(10px);
    opacity: 0.45;
  }
  .avatar-like-download {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
  .avatar, .like-download {
    display: flex;
  }
  .avatar {
    gap: 10px;
  }
  .avatar img {
    width: 55px;
    height: 55px;
    border-radius: 8px;
  }
  .profile {
    text-align: left;
  }
  .profile h2 {
    font-size: 30px;
    font-weight: 400;
    color: #F2F2F2;
    margin: 0;
  }
  .profile span {
    font-size: 18px;
    font-weight: 400;
    color: #F2F2F2;
  }
  .like-download{
    gap: 15px;
  }
  .like-download .like {
    background-color: #fff;
    border-radius: 8px;
    width: 49px;
    height: 49px;
    outline: none;
    box-shadow: none;
    border: none;
  }
  .like-download .download {
    background-color: #FFF200;
    display: flex;
    width: 206px;
    height: 49px;
    gap: 5px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
  .download span {
    color: #000;
    font-weight: 400;
    font-size: 20px;
  }
  .image {
    width: 100%;
    height: 744px;
  }
  .image img {
    height: 100%;
  }
</style>