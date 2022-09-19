<template>
  <div v-if="error">{{error}}</div>
  <div v-if="stories" class="layout mt-4">
    <div>
      <StoryLists :stories="filteredStories"></StoryLists>
    </div>
    <div id="tag" >
      <TagCloud :stories="stories"></TagCloud>
    </div>
  </div>
</template>

<script>
import TagCloud from '../components/TagCloud'
import { computed } from '@vue/runtime-core';
import StoryLists from '../components/StoryLists'
import getStories from '../composables/getStories'
export default {
  components: {
    TagCloud, StoryLists },
    props:['type'],
    setup(props){
        let {stories,error,load}=getStories();
        load();
        let filteredStories=computed(()=>{
            return stories.value.filter(story=>{
                return story.types.includes(props.type);
            })
        })
        return {stories,error,filteredStories}
    }
}
</script>

<style>

</style>