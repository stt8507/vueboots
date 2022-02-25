<template>
  <div class="container">
    <div class="mx-auto mt-5">
      <h1>Manage User</h1>
    </div>

    <!--Section: User Information-->
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
                <tr v-for="user in userDataAll" :key="user.id">
                  <th scope="row">{{ user.id }}</th>
                  <td>
                    <span class="text-danger">
                      <i class="fas fa-caret-down me-1"></i
                      ><span>{{ user.email }}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i
                      ><span>{{ user.password }}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i
                      ><span>{{ user.sex }}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-success">
                      <i class="fas fa-caret-up me-1"></i
                      ><span>{{ user.birthDate }}</span>
                    </span>
                  </td>
                  <td>
                    <span class="text-danger">
                      <i class="fas fa-caret-down me-1"></i
                      ><span>
                        <register src="updateMember" :id="user.id"/>
                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
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
import Register from "./Register.vue";
export default {
  name: "Manage",
  components: {
    Register,
  },
  data() {
    return {
      userData: {
        id: 0,
        email: "",
        password: "",
        sex: "",
        birthDate: null,
      },
      userDataAll: [
        {
          id: 1,
          email: "user1@rrrr.com",
          password: "sda",
          sex: "M",
          birthDate: new Date("2022-02-02").toDateString(),
        },
        {
          id: 2,
          email: "user2@rrrr.com",
          password: "grthtss",
          sex: "F",
          birthDate: new Date("2022-02-01").toDateString(),
        },
      ],
    };
  },
  created() {
    
    var Mock = require("mockjs");
    var data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "id|+1": 3,

          password: /^1[34578]\d{9}$/, //隨機電話號碼

          email: "@email", //隨機郵箱

          sex: /F|M/, //隨機性別

          birthDate: "@datetime", //建立時間
        },
      ],
    });
    this.userDataAll = this.userDataAll.concat(data.list);
  },
};
</script>

<style>
</style>