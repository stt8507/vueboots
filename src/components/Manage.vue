<template>
<div class="container">
    <div class="mx-auto mt-5">
        <h1>Manage User</h1>
    </div>
  <!--Section: Sales Performance KPIs-->
    <section class="mb-4 mt-5">
      <div class="card">
        <div class="card-header text-center py-3">
          <h5 class="mb-0 text-center">
            <strong>User Information</strong>
          </h5>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th scope="col">Id\Attribute</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Sex</th>
                  <th scope="col">BirthDate</th>
                  <th scope="col">Operate</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index ) in userDataAll" :key="index">
                  <th scope="row">{{user.id}}</th>
                  <td>
                    <span class="text-danger">
                      <i class="fas fa-caret-down me-1"></i
                        ><span>{{user.email}}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>{{user.password}}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i><span>{{user.sex}}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i
                        ><span>{{user.birthDate}}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-danger">
                      <i class="fas fa-caret-down me-1"></i
                        ><span>
                          <button type="button" class="btn btn-primary m-1">Update</button>
                          <button type="button" class="btn btn-danger">Delete</button>
                        </span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <!--Section: Sales Performance KPIs-->
    </div>
</template>

<script>
export default {
    name: 'Manage',
    data(){
      return{
        userData:{
          id: 0,
          email:'',
          password:'',
          sex:'',
          birthDate:null,
        },
        userDataAll:[{
          id: 1,
          email:'user1@rrrr.com',
          password:'sda',
          sex:'M',
          birthDate:new Date('2022-02-02').toDateString(),
        },{
          id: 2,
          email:'user2@rrrr.com',
          password:'grthtss',
          sex:'F',
          birthDate:new Date('2022-02-01').toDateString(),
        }]
      }
    },
}
</script>

<style>

</style>