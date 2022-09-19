import { db } from "@/firebase/config";
import { ref } from "vue"

let getStory=(id)=>{
    let story=ref(null);
    let error=ref(null);
    let load=async()=>{
        try{
            let doc=await db.collection('stories').doc(id).get();
            story.value={id:doc.id,...doc.data()}
        }catch(err){
            error.value=err.message;
        }
    }
    return {story,error,load}
}

export default getStory;