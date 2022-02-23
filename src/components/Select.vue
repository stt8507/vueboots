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
  </div>
</template>

<script>
import * as bootstrap from "bootstrap";
export default {
  name: "select",
  components: {},
  data() {
    return { myoption: "" };
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
};
</script>