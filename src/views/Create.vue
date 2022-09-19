<template>
  <h3 class="text-center pt-4">Add Story Form</h3>
  <div class="container mt-3">
    <div class="card shadow mx-auto ">
        <form class="mt-4 ps-4" @submit.prevent="addStory">
            <label class="mb-2">Story Title</label>
            <input type="text" class="mb-3" v-model="title" required>

            <label class="mb-2">Types</label>
            <input type="text" class="mb-3" v-model="type" @keydown.enter.prevent="handleKeyDown">
            <div v-for="type in types" :key="type" class="pill">
                {{type}}
            
            </div>

            <label class="mb-2">Body</label>
            <textarea class="mb-2" v-model="body" required></textarea>

            <label class="mb-2">Author</label>
            <input type="text" class="mb-3" v-model="author" required>

            <button class="btn btn-primary mt-2 mb-3" >Add Story</button>
        </form>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router';
import { db, timestamp } from '@/firebase/config';


export default {
    setup(){
        let router=useRouter();
        let title=ref("");
        let type=ref("");
        let types=ref([]);
        let body=ref("");
        let author=ref("");
        
        let handleKeyDown=()=>{
            if(!types.value.includes(type.value))
            {
                types.value.push(type.value);
            }
            type.value="";
        }
        let addStory=async()=>{
            let newStory={
                            title:title.value,
                            body:body.value,
                            author:author.value,
                            types:types.value,
                            created_at:timestamp()
                        }
            let res=await db.collection('stories').add(newStory);
            router.push('/');

        }
        return {title,type,types,body,author,handleKeyDown,addStory}
    }
}
</script>

<style>
    @media screen and (max-width:1399.98px)
    {
        .card{
            width: 500px;
        }

        form{
            width: 480px;
        }

        label{
            font-size: 20px;
            display: block;
        }

        input{
            display: block;
            width: 100%;
            border: 1px solid gray;
            border-radius: 10px;
            height: 40px;
            padding: 8px;
        }

        textarea{
            width: 100%;
            display: block;
            height: 150px;
            border: 1px solid gray;
            border-radius: 10px;
            padding: 10px;
            
        }

        .pill{
            display: inline-block;
            margin:10px 10px 0 0;
            color: #444;
            background: #ddd;
            padding: 8px;
            border-radius: 20px;
            font-size: 14px;
        }
    }

    @media screen and (max-width:575.98px)
    {
        .card{
            width: 300px;
            margin-right: 20px;
        }

        form{
            width: 280px;
            
        }

        label{
            font-size: 15px;
            display: block;
        }

        input{
            display: block;
            width: 100%;
            border: 1px solid gray;
            border-radius: 8px;
            height: 30px;
            padding: 5px;
        }

        textarea{
            width: 100%;
            display: block;
            height: 100px;
            border: 1px solid gray;
            border-radius: 8px;
            padding: 7px;
            
        }

        .pill{
            display: inline-block;
            margin:10px 10px 0 0;
            color: #444;
            background: #ddd;
            padding: 8px;
            border-radius: 20px;
            font-size: 14px;
        }
    }
</style>