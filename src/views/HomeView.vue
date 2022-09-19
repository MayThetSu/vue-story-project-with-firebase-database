<template>
  <div class="container mt-4">
      <div class="home">
        
        <div v-if="stories.length>0" class="layout">
          <div id="stories">
            <StoryLists :stories="stories" ></StoryLists>
          </div>
          <div id="tag">
            <TagCloud :stories="stories"></TagCloud>
          </div>
        </div>
        <div v-else class="loading">
          <Spinner></Spinner>
        </div>
        <div v-if="error">{{error}}</div>
      </div>
      
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import Spinner from '../components/Spinner'
import Navbar from '../components/Navbar'
import StoryLists from '../components/StoryLists'
import getStories from '../composables/getStories'
export default {
  components: {
    TagCloud,
    Spinner,
    Navbar, StoryLists },
  setup(){
    let {stories,error,load}=getStories();
    load();
    return {stories,error}
  }
}
</script>

<style>
  @media screen and (max-width:1399.98px)
  {
    h2{
      text-transform: uppercase;
      text-align: center;
    }
    a{
      font-size: 25px;
    }
    h4{
      font-size: 20px;
    }
    p{
      font-size: 18px;
    }
    .loading{
      text-align: center;
    }
    .layout{
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 20px;
    }
  }
  @media screen and (max-width:575.98px)
  {
    h2{
      text-transform: uppercase;
      text-align: center;
      font-size: 20px;
    }

    a{
      font-size: 18px;
    }
    h4{
      font-size: 15px;
    }
    p{
      font-size: 13px;
    }
    .layout{
      display: block;
    }
    #tag{
      margin-left: 20px;
    }
  }
</style>
