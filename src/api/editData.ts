import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/database";
import { Data } from "@/types";

async function editData (collectionName:string, docId:string, newData:Data){
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, newData);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
}

export  {editData}