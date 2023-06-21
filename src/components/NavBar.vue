<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-light mb-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">BD4VQK</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
        </ul>
      </div>

      <div class="d-flex">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              >Language</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">English</a>
              <a class="dropdown-item" href="#">中文</a>
              <a class="dropdown-item" href="#">日本語</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
