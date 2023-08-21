<template>
  <div class="header">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div id="logo">
        <div class="container">
          <a href="/home" title="Online Notepad">
            <img
              id="logo_img"
              src="../../assets/home_img/anotepad.svg "
              alt="aNotepad"
            />
            <span id="title"> aNotepad</span>
          </a>
          <span id="subTitle"> - free online notepad </span>
        </div>
      </div>

      <div class="container-fluid">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only"> Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav nav-pills">
            <li>
              <router-link :to="{ name: 'feature_admin_view' }">
                <span>Features</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'setting_view' }">
                <span>Settings</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'create_account' }">
                <span>Logout</span>
              </router-link>
            </li>
            <li>
              <a href="#" class="link-language"> </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.header {
  height: 40px;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

.navbar {
  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.navbar-fixed-bottom,
.navbar-fixed-top {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
}

.navbar-fixed-top {
  top: 0;
  border-width: 0 0 1px;
}
.navbar-inverse {
  background-color: #222;
  border-color: #080808;
}

.navbar {
  min-height: 0;
}
.navbar-inverse {
  border-color: transparent;
  background-image: none;
}
.navbar-inverse {
  background-color: #4682b4;
}
.header #logo {
  float: left;
  margin-left: 5%;
  position: relative;
  font-family: "Lato", sans-serif;
  font-weight: 700;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.header #logo .container {
  width: 100%;
}

a {
  background-color: transparent;
}
a {
  color: #337ab7;
  text-decoration: none;
}
.theme-light a {
  color: #10589b;
}
.header #logo a {
  font-size: 1.8em;
  display: inline-block;
}
.header #logo a {
  color: #fff;
}

.header #logo #logo_img {
  width: 40px;
  height: 40px;
}
img {
  vertical-align: middle;
}
img {
  border: 0;
}
.header #logo #title {
  display: inline-block;
  vertical-align: middle;
}
.header #logo #subTitle {
  font-size: 1.2em;
  display: inline-block;
  vertical-align: -3px;
}
.header #logo #subTitle {
  color: #fff;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.container-fluid > .navbar-collapse,
.container-fluid > .navbar-header,
.container > .navbar-collapse,
.container > .navbar-header {
  margin-right: -15px;
  margin-left: -15px;
}

button,
input,
optgroup,
select,
textarea {
  color: inherit;
  font: inherit;
  margin: 0;
}

button {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
.navbar-toggle {
  position: relative;
  float: right;
  padding: 9px 10px;
  margin-right: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
}

.navbar-inverse .navbar-toggle {
  border-color: #333;
}

.theme-light .navbar-inverse .navbar-toggle {
  border-color: #4682b4;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.navbar-toggle .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-inverse .navbar-toggle .icon-bar {
  background-color: #fff;
}

.navbar-inverse .navbar-collapse,
.navbar-inverse .navbar-form {
  border-color: #101010;
}
.theme-light .navbar-inverse .navbar-collapse,
.theme-light .navbar-inverse .navbar-form {
  border-color: #4682b4;
}

ol,
ul {
  margin-top: 0;
  margin-bottom: 10px;
}
.nav {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav {
  float: right;
}
.nav > li {
  position: relative;
  display: block;
}
.nav-pills > li {
  float: left;
}

a {
  background-color: transparent;
}

a {
  color: #337ab7;
  text-decoration: none;
}
.theme-light a {
  color: #10589b;
}
.nav > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}

.nav-pills > li > a {
  border-radius: 4px;
}

.theme-light .nav-pills > li > a {
  color: #fff;
}

.theme-light .nav-pills > li > a {
  color: #fff;
}
.header .link-language {
  background-image: url(../../assets/home_img/icon_language_light.png);
}
.link-language {
  display: inline-block;
  padding: 0 !important;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: center;
}

.nav > li > a:hover,
.nav > li > a:focus {
  background-color: #55a1e0;
  color: #10589b;
}

.navbar-inverse{
    background-color: #4682b4;
}
.header #logo a {
    color: #fff;
}
.header #logo #subTitle {
    color: #fff;
}
.header .nav-pills>li>a {
    color: #fff;
}

.nav-pills>li>a {
    border-radius: 4px;
}
.nav>li>a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
@media only screen and (min-width: 1280px) {
  .header #logo {
    margin-left: 5%;
    width: 50%;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 768px) {
  .navbar-fixed-bottom,
  .navbar-fixed-top {
    border-radius: 0;
  }
  .navbar {
    border-radius: 4px;
  }
  .container {
    width: 750px;
  }
  .navbar-header {
    float: left;
  }
  .container-fluid > .navbar-collapse,
  .container-fluid > .navbar-header,
  .container > .navbar-collapse,
  .container > .navbar-header {
    margin-right: 0;
    margin-left: 0;
  }
  .navbar-toggle {
    display: none;
  }
  .navbar-fixed-bottom,
  .navbar-fixed-top {
    border-radius: 0;
  }
}
</style>
