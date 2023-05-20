<template>
  <div class="sidebar">
    <!-- Sidebar scrollbar using Vue3 Perfect Scroll package  -->
    <PerfectScrollbar
      class="scroll-area"
      :settings="settings"
      @ps-scroll-y="scrollHanle"
      ref="scrollbar"
    >
      <div class="sidebar-inner">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="active">
              <Link :href="route('dashboard')"
                ><img src="assets/img/icons/dashboard.svg" alt="img" /><span>
                  Dashboard
                </span>
              </Link>
            </li>

            <SidebarDropdownMenu
              title="Product List"
              iconImg="/assets/img/icons/product.svg"
            >
              <li>
                <a href="productlist.html">Product List</a>
              </li>
              <li>
                <a href="addproduct.html">Add Product</a>
              </li>
            </SidebarDropdownMenu>

            <li class="submenu">
              <a href="javascript:void(0);"
                ><img src="assets/img/icons/product.svg" alt="img" /><span> Product</span>
                <span class="menu-arrow"></span
              ></a>
              <ul>
                <li>
                  <a href="productlist.html">Product List</a>
                </li>
                <li>
                  <a href="addproduct.html">Add Product</a>
                </li>
                <li>
                  <a href="categorylist.html">Category List</a>
                </li>
                <li>
                  <a href="addcategory.html">Add Category</a>
                </li>
                <li>
                  <a href="subcategorylist.html">Sub Category List</a>
                </li>
                <li>
                  <a href="subaddcategory.html">Add Sub Category</a>
                </li>
                <li>
                  <a href="brandlist.html">Brand List</a>
                </li>
                <li>
                  <a href="addbrand.html">Add Brand</a>
                </li>
                <li>
                  <a href="importproduct.html">Import Products</a>
                </li>
                <li>
                  <a href="barcode.html">Print Barcode</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </PerfectScrollbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

import SidebarDropdownMenu from "@/Components/Admin/SidebarDropdownMenu.vue";
import { Link } from "@inertiajs/vue3";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const settings = ref({
  suppressScrollX: true,
});

const scrollHanle = (event) => {
  //   console.log(event);
};
</script>

<style>
.scroll-area {
  position: right;
  margin: auto;
  height: calc(100vh - 30px);
  width: 100%;
  size: 7px;
  color: #ccc;
}
</style>
