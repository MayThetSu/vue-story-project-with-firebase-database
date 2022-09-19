<template>
    <router-link :to="{name:'Detail',params:{id:story.id}}">{{story.title}}</router-link>
    <h6 class="mb-3 mt-3">{{cutStoryBody}}</h6>
    <p>Author - {{story.author}}</p>
    <div v-for="type in story.types" :key="type" class="pill">
       <router-link :to="{name:'Type',params:{type}}"> {{type}}</router-link>
    </div>
    <hr>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
    props:['story'],
    setup(props){
        let cutStoryBody=computed(()=>{
            return props.story.body.substring(0,100)+'...';
        })
        return {cutStoryBody};
    }
}
</script>

<style>
    .pill{
            display: inline-block;
            margin:10px 10px 0 0;
            color: #444;
            background: #ddd;
            padding: 8px;
            border-radius: 20px;
            font-size: 14px;
    }

    div a{
        font-size: 20px;
        text-decoration: none;
    }
</style>