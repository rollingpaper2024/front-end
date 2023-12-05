import { db } from "@/database"
import { collection, getDocs } from "firebase/firestore"
import { Data } from "@/types";

async function getData(collectionName:string){
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const dataList: Data[] = [];
        querySnapshot.forEach((doc) => {
          dataList.push({ id: doc.id, ...doc.data() });
        });
        return dataList;
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
}

export  {getData}