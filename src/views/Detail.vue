<template>
  <div class="container mt-4">
    
    <div v-if="story" class="story">
      <h3 class="mb-3">{{story.title}}</h3>
      <p class="mb-3">{{story.body}}</p>
      <h5>Author - {{story.author}}</h5>
     
      <div class="d-flex justify-content-center mt-3">
        <button class="btn btn-danger" @click="deleteStory">Delete</button>
      </div>
    </div>
    <div v-else class="loading">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getStory from '../composables/getStory'
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { db } from '@/firebase/config';
export default {
  components: { Spinner },
    props:['id'],
    setup(props){
        let route=useRoute();
        let router=useRouter();
        let {story,error,load}=getStory(route.params.id);

        load();
        let deleteStory=async()=>{
          let id=props.id;
          await db.collection('stories').doc(id).delete();
          router.push('/');
        }
        return {story,error,deleteStory}
    }
}
</script>

<style>
  @media screen and (max-width:1399.98px) {
      .story{
        margin: 50px;
      }
  }

  @media screen and (max-width:575.98px) {
      .story{
        margin: 30px;
      }
  }
  
</style>