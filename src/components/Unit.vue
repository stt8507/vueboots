<template>
  <div class="container m-5">
    <select
      v-model="myoption"
      class="form-select"
      aria-label="Default select example"
      @change="selectOption($event)"
    >
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <p class="m-5"><strong> 你選了: </strong> {{ myoption }}</p>
  </div>
  <div class="container">
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="top"
      data-bs-content="Top popover"
    >
      Popover on top
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="right"
      data-bs-content="Right popover"
    >
      Popover on right
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="bottom"
      data-bs-content="Bottom popover"
    >
      Popover on bottom
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-container="body"
      data-bs-toggle="popover"
      data-bs-placement="left"
      data-bs-content="Left popover"
    >
      Popover on left
    </button>
  </div>
  <div class="container">
    <span
      class="d-inline-block"
      tabindex="0"
      data-bs-toggle="popover"
      data-bs-trigger="hover focus"
      data-bs-content="Disabled popover"
    >
      <button class="btn btn-primary" type="button" disabled>
        Disabled button
      </button>
    </span>
  </div>
  <div class="container">
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Tooltip on top"
    >
      Tooltip on top
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="right"
      title="Tooltip on right"
    >
      Tooltip on right
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      title="Tooltip on bottom"
    >
      Tooltip on bottom
    </button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-toggle="tooltip"
      data-bs-placement="left"
      title="Tooltip on left"
    >
      Tooltip on left
    </button>
  </div>
  <div class="container">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    <!--Section: Reply-->
    <section>
      <div
        class="
          shadow-4
          bg-white
          rounded-5
          mb-5
          overflow-hidden
          px-4
          py-3
          d-lg-flex
          justify-content-between
          align-items-center
          text-center text-lg-start
        "
      >
        <div class="mb-2 mb-lg-0">
          <h5 class="mb-2 fw-bold">Welcome to MDB Snippets</h5>
          <p class="text-muted mb-0">
            Best source of Bootstrap code examples, templates &amp; plugins
          </p>
        </div>

        <form
          class="d-flex"
          method="GET"
          style="min-width: 300px"
          action="/snippets"
        >
          <input
            type="search"
            name="search"
            class="form-control rounded"
            placeholder="Search snippet"
            aria-label="Search"
            aria-describedby="search-addon"
            value=""
          />

          <input type="top" name="top" value="all" style="display: none" />

          <button
            class="btn btn-link btn-rounded px-3 text-reset ms-2"
            role="button"
            type="submit"
          >
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    </section>
    <!--Section: Reply-->
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";

export default {
  name: "unit",
  components: {},
  data() {
    return {
      myoption: "",
    };
  },
  methods: {
    selectOption(e) {
      var val = e.target.value;
      var txt = e.target.options[e.target.options.selectedIndex].text;
      console.log("v: ", val);
      console.log("txt: ", txt);
    },
  },
  mounted() {
    var popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
    var tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });
  },
  created() {
    // 使用 Mock

    var Mock = require("mockjs");
    var data = Mock.mock({
      // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [
        {
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          "id|+1": 1,

          name: "@name", //隨機名稱

          nickName: "@last", //隨機暱稱

          phone: /^1[34578]\d{9}$/, //隨機電話號碼

          "age|11-99": 1, //年齡

          address: "@county(true)", //隨機地址

          email: "@email", //隨機郵箱

          isMale: "@boolean", //隨機性別

          createTime: "@datetime", //建立時間
        },
      ],
    });
    // 输出结果
    console.log(JSON.stringify(data, null, 4));
  },
};
</script>