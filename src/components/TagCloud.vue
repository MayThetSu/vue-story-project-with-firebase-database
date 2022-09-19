<template>
    <div class="tag-cloud">
        
        <h4 class="">Types</h4>
        <div  v-for='type in uniqueTypes' :key='type'>
            <router-link :to="{name:'Type',params:{type}}"> {{type}}</router-link>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    props:['stories'],
    setup(props){
        let types=ref([]);
        props.stories.forEach((story)=>{
            story.types.forEach((type)=>{
                types.value.push(type);
            })
        })

        let uniqueTypes=types.value.filter((type,index,array)=>{
            return array.indexOf(type)===index;
        })
        return {uniqueTypes}
    }
}
</script>

<style>
    .tag-cloud{
        padding: 10px;
    }
    .tag-cloud h4{
        border-bottom: 1px solid #eee;
        padding: 16px 8px;
        color: #444;
    }
    .tag-cloud div{
        display: inline-block;
        padding: 10px;
    }
    .tag-cloud a{
        color: #444;
        text-decoration: none;
    }
    .tag-cloud a.router-link-active{
        color: #ff8800;
        font-weight: bold;
    }
</style>