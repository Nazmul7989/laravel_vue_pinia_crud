<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-8">
        <div class="card p-4">
          <h3 class="card-title text-center">Post List</h3>
          <table class="table table-bordered">
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="post in posts" :key="post.id">
              <td>{{ post.id }}</td>
              <td>{{ post.name }}</td>
              <td>{{ post.description }}</td>
              <td style="width: 150px;">
                <button @click.prevent="editPostData(post)"
                        class="btn btn-sm btn-warning">Edit
                </button>
                <button onclick="confirm('Do you want to delete?') || event.stopImmediatePropagation()"
                        @click.prevent="deletePostData(post.id)"
                        class="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-4">
        <div class="card shadow p-4">
          <h3 class="card-title">{{ edit ? 'Edit' : 'Create' }} Post</h3>
          <form>
            <div class="form-group mb-3">
              <label for="name">Post Name</label>
              <input type="text" v-model="formData.name" class="form-control"
                     id="name"
                     placeholder="Post name">
            </div>
            <div class="form-group mb-3">
              <label for="description">Post Description</label>
              <textarea class="form-control" v-model="formData.description"
                        id="description"
                        placeholder="Post description"></textarea>
            </div>
            <div class="form-group">
              <button v-if="edit" type="button" @click.prevent="updatePostData"
                      class="btn btn-sm
                      btn-success">{{ loading ? 'Updating...' : 'Update'}}
              </button>
              <button v-else type="button" @click.prevent="addPostData"
                      class="btn btn-sm
                      btn-success">{{ loading ? 'Saving...' : 'Save'}}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "pinia";
import {usePostStore} from "@/store/postStore";

export default {
  name: 'Post',
  data(){
    return{
      formData: {
        name: '',
        description: '',
      },
      postId: '',
      edit: false,
    }
  },
  computed: {
    ...mapGetters(usePostStore,['posts']),
    ...mapGetters(usePostStore,['loading']),

  },
  mounted() {
    this.getPosts();
  },
  methods: {
    ...mapActions(usePostStore,['getPosts']),
    ...mapActions(usePostStore,['storePost']),
    ...mapActions(usePostStore,['updatePost']),
    ...mapActions(usePostStore,['deletePost']),

    addPostData(){
      this.storePost(this.formData);
      this.clearForm();
    },
    editPostData(post){
      this.edit = true;
      this.postId = post.id;
      this.formData.name = post.name;
      this.formData.description = post.description;
    },

    updatePostData(){
      this.updatePost(this.formData,this.postId);
      this.clearForm();
    },

    deletePostData(id){
      this.deletePost(id)
    },
    clearForm(){
      this.formData.name = '';
      this.formData.description = '';
      this.postId = '';
      this.edit = false;

    }

  }

}
</script>

<style scoped></style>
