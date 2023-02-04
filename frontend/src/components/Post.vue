<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-8">
        <div class="card p-4">
          <table class="table table-bordered">
            <h3 class="card-title text-center">Post List</h3>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>01</td>
              <td>Post One</td>
              <td>Post Description</td>
              <td style="width: 150px;">
                <button class="btn btn-sm btn-warning">Edit</button>
                <button class="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-4">
        <div class="card shadow p-4">
          <h3 class="card-title">Create Post</h3>
          <form>
            <div class="form-group mb-3">
              <label for="name">Post Name</label>
              <input type="text" class="form-control" id="name"
                     placeholder="Post name">
            </div>
            <div class="form-group mb-3">
              <label for="description">Post Description</label>
              <textarea class="form-control" id="description"
                        placeholder="Post description"></textarea>
            </div>
            <div class="form-group">
              <button type="button" class="btn btn-sm btn-success">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

}
</script>

<style scoped></style>
