<template>
  <div class="storylists">
    <div v-for="story in stories" :key="story.id">
        <SingleStory :story="story"></SingleStory>
    </div>
  </div>
</template>

<script>
import SingleStory from './SingleStory'
export default {
  components: { SingleStory },
    props:['stories']
}
</script>

<style>
    @media screen and (max-width:1399.98px) {
      .storylists{
        margin: 50px;
      }
    }

    @media screen and (max-width:575.98px) {
      .storylists{
        margin: 30px;
      }
    }
</style>