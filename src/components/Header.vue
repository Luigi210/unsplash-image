<template>
  <div class="main-header">
    <div class="header">
      <a href="/">
        <img :src="logo" class="logo"/>
      </a>
      <a href="/favs" class="favs">
        <img :src="like"/>
        <span>Избранное</span>
      </a>
    </div>
  </div>
</template>

<script setup>
  import logo from "../assets/logo.svg"
  import like from "../assets/like.svg"
</script>

<style lang="css">
  .main-header {
    width: 100%;
  }
  .header {
    /* width: 100%; */
    height: 100px;
    background: #000;
    padding: 20px 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .logo {
    width: 185px;
    height: 72px;
  }
  a {
    text-decoration: none;
  }
  .favs {
    display: flex;
    gap: 15px;
  }
  .favs span {
    color: #fff;
    font-weight: 400;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;  
  }

</style>