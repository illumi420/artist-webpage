<template>
  <div id="menu">
    <button class="btn active" title="Home">
      <router-link to="/">Home</router-link>
    </button>
    <button class="btn" title="Slider">
      <router-link to="Slider">Gallery</router-link>
    </button>
    <button class="btn" title="About">
      <a class="page-link" href="about.html">About</a>
    </button>
    <button class="btn" title="Contact">
      <router-link to="Contact">Contact Us</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  components: {}
};
</script>

<style>
.btn {
    position: relative;
    top: 20px;
    left: 25%;
    display: flex;
    overflow: hidden;
    list-style: none;
    text-align: center;
    border: none;
    outline: none;
    padding: 10px 50px;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.2em;
}


/* Style the active class, and buttons on mouse-over */

.router-link-active,
.btn:hover {
    background-color: #800000;
    color: white;
}

button.btn {
    display: inline;
    list-style: none;
}

a,
a:visited,
a:hover,
a:active {
    color: inherit;
}

a,
u {
    text-decoration: none;
}

.btn .icon {
    display: none;
}

@media screen and (max-width:600px) {
    .btn a:not(:first-child) {
        display: none;
    }
    .btn a.icon {
        float: right;
        display: block;
    }
}

@media screen and (max-width:600px) {
    .btn.responsive {
        position: relative;
    }
    .btn.responsive.icon {
        position: absolute;
        right: 0;
        top: 0;
    }
    .btn .responsive a {
        float: none;
        display: block;
        text-align: left;
    }
}

</style>
