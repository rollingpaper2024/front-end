import { collection, addDoc } from "firebase/firestore";
import { Data } from "@/types";
import { db } from "@/database";


async function postData(collectionName:string,data: Data){
    try{
        const response =await addDoc(collection(db,collectionName),data)
        console.log("response: " + response)

    }catch(err){
        console.log("err",err)
    }
}

export {postData}