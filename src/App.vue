<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="routeJudge">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> Navbar </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"> </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/home"> Home </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about"> About </router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/unit"> Unit </a></li>
              <li><a class="dropdown-item" href="/modal"> Modal </a></li>
              <li><a class="dropdown-item" href="/manage"> Manage </a></li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="/"> Logout </a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="topic"
          />
          <button class="btn" type="button" @click="searchTopic">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  </nav>
  <router-view />
  <!-- Footer-->
  <footer class="border-top" v-if="routeJudge">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#!">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45px"
                    height="45px"
                    fill="currentColor"
                    class="bi bi-meta"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a54.944 54.944 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3c.319 0 .625.039.924.122.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714Zm1.516 2.224c-.252-.41-.494-.787-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87l-.937-1.565ZM4.846 4.756c.725.1 1.385.634 2.34 2.001A212.13 212.13 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264.091 0 .181.006.27.018Z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45px"
                    height="45px"
                    fill="currentColor"
                    class="bi bi-box"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45px"
                    height="45px"
                    fill="currentColor"
                    class="bi bi-diamond-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435z"
                    />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
          <div class="small text-center text-muted fst-italic">
            Copyright &copy; Your Website 2021
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      route: "",
      topic: ""
    };
  },
  components: {},
  computed: {
    routeJudge() {
      return this.$route.fullPath != "/login" && this.$route.fullPath != "/";
    },
  },
  methods:{
    searchTopic(){
      const routArray = this.$router.options.routes;
      const targetRouteIndex = routArray.findIndex(e => e.name.toLowerCase() === this.topic.toLowerCase());
      if(targetRouteIndex >= 0){
        this.$router.push('/' + routArray[targetRouteIndex].name)
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top : 60px; */
}
.border-top {
  border-top: 1px solid black !important;
}
footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
svg {
  color: black;
}
</style>
