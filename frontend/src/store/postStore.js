import { defineStore } from 'pinia'
import axios from "axios";

export const usePostStore = defineStore('posts', {
    state: () => ({
        postData: [],
        loadingData: false,
    }),

    getters: {
        posts: state => state.postData,
        loading: state => state.loadingData,
    },

    actions: {
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts').then((res)=>{
                this.postData = res.data.data;
            }).catch((error)=>{
                alert(error.response.data.message);
            })
        },
        storePost(formData){
            this.loadingData = true
            axios.post('http://127.0.0.1:8000/api/posts',formData).then((res)=>{
                this.loadingData = false;
                console.log(res.data)
            }).catch((error)=>{
                this.loadingData = false;
                alert(error.response.data.message);
            })
        },
        updatePost(formData,id){
            this.loadingData = true
            axios.put('http://127.0.0.1:8000/api/posts/' + id,formData).then((res)=>{
                this.loadingData = false;
                console.log(res.data)
            }).catch((error)=>{
                this.loadingData = false;
                alert(error.response.data.message);
            })
        },
        deletePost(id){
            this.loadingData = true
            axios.delete('http://127.0.0.1:8000/api/posts/' + id).then((res)=>{
                this.loadingData = false;
                console.log(res.data)
            }).catch((error)=>{
                this.loadingData = false;
                alert(error.response.data.message);
            })
        }
    }
});