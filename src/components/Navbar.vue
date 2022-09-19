<template>
  <h2 class="mt-3">Stories that give you Pleasure</h2>
    <nav class="d-flex justify-content-center justify-content-md-end">
      <router-link :to="{name:'Home'}">Home</router-link>
      <router-link :to="{name:'Create'}">Create</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
  @media screen and (max-width:1399.98px) {
    nav a{
    font-size: 18px;
    margin-right: 20px;
    text-decoration: none;
    color: rgb(76, 76, 247);
    font-weight: bold;
    }

    nav a.router-link-active{
      color: blue;
      cursor: pointer;
    }
  }

  @media screen and (max-width:575.98px) {
    nav a{
    font-size: 15px;
    
    text-decoration: none;
    color: rgb(76, 76, 247);
    font-weight: bold;
    }

    nav a.router-link-active{
      color: blue;
      cursor: pointer;
    }
  }
</style>