<template>
  <div class="d-flex justify-content-between p-5">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Launch demo modal
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
            <h5 class="modal-title" id="exampleModalLabel">{{ dlgTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {{ dlgBody }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>我的第一个 Bootstrap 页面</h1>
      <p>这是一个响应式页面，重置浏览器大小查看效果!</p>
    </div>
  </div>
  <div class="container fs-2 mb-3">
    <i class="bi bi-alarm">123</i>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-alarm"
      viewBox="0 0 16 16"
    >
      <path
        d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
      />
      <path
        d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      fill="currentColor"
      class="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </div>

  <!-- 轮播 -->
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- 指示符 -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
      ></button>
    </div>

    <!-- 轮播图片 -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://static.runoob.com/images/mix/img_fjords_wide.jpg"
          class="d-block"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://static.runoob.com/images/mix/img_nature_wide.jpg"
          class="d-block"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="https://static.runoob.com/images/mix/img_mountains_wide.jpg"
          class="d-block"
          style="width: 100%"
        />
      </div>
    </div>

    <!-- 左右切换按钮 -->
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#demo"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
    </button>
  </div>

  <div class="container mt-3">
    <h2>不可点击的分页链接</h2>
    <p>.disabled 类可以设置分页链接不可点击:</p>
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </div>

  <div class="container">
    <button class="btn btn-primary" disabled>
      <span class="spinner-border spinner-border-sm"></span>
      Loading..
    </button>
  </div>

  <div class="container mt-3">
    <h2>图片卡片</h2>
    <p>图片在头部 (card-img-top):</p>
    <div class="card" style="width: 400px">
      <img
        class="card-img-top"
        src="https://static.runoob.com/images/mix/img_avatar.png"
        alt="Card image"
        style="width: 100%"
      />
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">
          Some example text some example text. John Doe is an architect and
          engineer
        </p>
        <a href="#" class="btn btn-primary">See Profile</a>
      </div>
    </div>
    <br />
  </div>

  <div class="container mt-3">
    <h2>简单的折叠</h2>
    <a href="#demo" class="btn btn-primary" data-bs-toggle="collapse"
      >简单的折叠</a
    >
    <div id="demo" class="collapse show">
      这里是一些测试的内容。。。这里是一些测试的内容。。。这里是一些测试的内容。。。这里是一些测试的内容。。。这里是一些测试的内容。。。这里是一些测试的内容。。。
    </div>
  </div>

  <div class="container">
    123
  </div>
  <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  使用链接的 href 属性
</a>
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  按钮中使用 data-bs-target
</button>
 
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">侧边栏</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white active">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  components: {},
  data() {
    return {
      dlgTitle: "My Title",
      dlgBody: "My Body",
    };
  },
  mounted() {
    
  },
};
</script>