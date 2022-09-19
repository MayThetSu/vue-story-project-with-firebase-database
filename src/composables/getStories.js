import { ref } from "vue";
import {db} from '../firebase/config'

let getStories=()=>{
    let stories=ref([]);
    let error=ref("");
    let load=async()=>{
      try{
        let res=await db.collection('stories').orderBy('created_at','desc').get();
        stories.value=res.docs.map((doc)=>{
          return {id:doc.id,...doc.data()}
        })
      }catch(err){
        error.value=err.message;
      }
    }

    return {stories,error,load};
}

export default getStories;