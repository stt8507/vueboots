<template>
  <div class="background">
    <div class="container py-1">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-2 text-center">
              <div class="mb-md-5 mt-md-4 pb-1">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    v-model="loginForm.email"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    v-model="loginForm.password"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <label>
                  <div v-if="v$.loginForm.email.$error">
                    <span
                      v-if="v$.loginForm.email.required.$invalid"
                      >Email field is required</span
                    >
                    <span
                      v-else-if="v$.loginForm.email.email.$invalid"
                      >Email field has an error.</span
                    >
                  </div>
                  <div v-if="v$.loginForm.password.$error">
                    Password field is empty.
                  </div>
                </label>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">Forgot password?</a>
                </p>

                <button
                  class="btn btn-outline-light btn-lg px-5"
                  @click="login"
                >
                  Login
                </button>
              </div>
              <div>
                <p class="mb-0">
                  Don't have an account?
                  <Register src="signUp" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import Register from "./Register.vue";

export default {
  name: "Login",
  components: {
    Register,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      loginForm: {
        email: { required, email },
        password: { required },
      },
    };
  },
  methods: {
    async login() {
      
      const isFormCorrect = await this.v$.loginForm.$validate(); // 不使用this.v$.$validate(),是因為會檢測到registerForm
      if (isFormCorrect) {
        this.$router.push("/home");
      }
    },
  },
};
</script>

<style>
.background {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/about-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100%;
}
</style>