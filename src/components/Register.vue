<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="text-white-50 fw-bold"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Sign Up
  </button>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                v-model="registerForm.email"
                id="email"
                name="email"
                class="form-control"
                :class="{
                  'is-invalid': submitted && v$.registerForm.email.$error,
                }"
              />
              <div
                v-if="submitted && v$.registerForm.email.$error"
                class="invalid-feedback"
              >
                <span v-if="v$.registerForm.email.required.$invalid"
                  >Email is required</span
                >
                <span v-if="v$.registerForm.email.email.$invalid"
                  >Email is invalid</span
                >
              </div>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                v-model="registerForm.password"
                id="password"
                name="password"
                class="form-control"
                :class="{
                  'is-invalid': submitted && v$.registerForm.password.$error,
                }"
              />
              <div
                v-if="submitted && v$.registerForm.password.$error"
                class="invalid-feedback"
              >
                <span v-if="v$.registerForm.password.required.$invalid"
                  >Password is required</span
                >
                <span v-if="v$.registerForm.password.minLength.$invalid"
                  >Password must be at least 6 characters</span
                >
                <span v-if="v$.registerForm.password.maxLength.$invalid"
                  >Password must be at maximum 10 characters</span
                >
              </div>
            </div>
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                v-model="registerForm.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                class="form-control"
                :class="{
                  'is-invalid':
                    submitted && v$.registerForm.confirmPassword.$error,
                }"
              />
              <div
                v-if="submitted && v$.registerForm.confirmPassword.$error"
                class="invalid-feedback"
              >
                <span v-if="v$.registerForm.confirmPassword.required.$invalid"
                  >Confirm Password is required</span
                >
                <span
                  v-else-if="
                    v$.registerForm.confirmPassword.sameAsPassword.$invalid
                  "
                  >Passwords must match</span
                >
              </div>
            </div>
            <div class="form-group">
              Sex<br />
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="male"> Male </label>
                <input
                  type="radio"
                  value="M"
                  v-model="registerForm.sex"
                  id="male"
                  name="sex"
                  class="form-check-input"
                />
              </div>
              <div class="form-check form-check-inline">
                <label class="form-check-label" for="female"> Female </label>
                <input
                  type="radio"
                  value="F"
                  v-model="registerForm.sex"
                  id="female"
                  name="sex"
                  class="form-check-input"
                />
              </div>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text">生日：</span>
              <input
                type="date"
                v-model="registerForm.birthDate"
                class="form-control"
                :class="{
                  'is-invalid':
                    submitted && v$.registerForm.birthDate.$error,
                }"
              />
              <div
                v-if="submitted && v$.registerForm.birthDate.$error"
                class="invalid-feedback"
              >
                <span v-if="v$.registerForm.birthDate.minValue.$invalid"
                  >birthDate less than Now</span
                >
              </div>
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <!-- 因為未實作後端,這裡先建立data-bs-dismiss="modal" -->
          <button type="button" class="btn btn-primary" @click="checkForm" data-bs-dismiss="modal"> 
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  maxLength,
  minLength,
  sameAs,
} from "@vuelidate/validators";
export default {
  name: "Register",
  props: {
    src: String,
  },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      title: "",
      registerForm: {
        email: "",
        password: "",
        sex: "",
        birthDate: null,
        confirmPassword: "",
      },
      submitted: false,
    };
  },
  mounted() {
    if (this.src === "signUp") {
      return (this.title = "註冊會員");
    } else if (this.src === "updateMember") {
      return (this.title = "修改會員狀態");
    }
  },
  validations() {
    return {
      registerForm: {
        email: { required, email },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(10),
        },
        sex: { required },
        birthDate: { required,
          minValue(val){
            return new Date() > new Date(val)
          }
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.registerForm.password),
        },
      },
    };
  },
  methods: {
    async checkForm() {
      this.submitted = true;
      const isFormCorrect = await this.v$.registerForm.$validate();
      
      if (isFormCorrect) {
        //this.$router.push("/");
      }
      
    },
  },
};
</script>

<style>
.modal-header {
  color: black;
}
.modal-body {
  color: black;
}
.modal-footer {
  color: black;
}
</style>