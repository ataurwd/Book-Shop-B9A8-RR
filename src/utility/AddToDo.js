import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const getStoreList = () => {
//     const storedList = localStorage.getItem('storedReadList');
//     if(storedList){
//         return JSON.parse(storedList);
//     }
//     else{
//         return [];
//     }
// }

const getStoreList = () => {
    return JSON.parse(localStorage.getItem('storedReadList')) || [];
}

// const addToStoredReadList = (id) => {

const addToStoredReadList = (id) => {
    const storedList = getStoreList();
    if(storedList.includes(id)){
        toast.error("This book is already exist", {
            position: "top-right"
          });          
          return;
    }
    else{
        storedList.push(id);
        localStorage.setItem('storedReadList', JSON.stringify(storedList));
        toast.success("This book is Added", {
            position: "top-right"
          });   
    }
}

export {addToStoredReadList, getStoreList}