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
            <span id="title">SmartNotepad</span>
          </a>
          <!-- <span id="subTitle"> - free online notepad </span> -->
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
              <router-link :to="{ name: 'feature_admin_view' }" @click.native="$scrollToTop">
                <span>Features</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'setting_view' }" @click.native="$scrollToTop">
                <span>Settings</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'create_account' }" @click.native="$scrollToTop">
                <span>Logout</span>
              </router-link>
            </li>
            <li>
              <v-dialog v-model="dialog_language" width="auto">
                <template v-slot:activator="{ props }">
                  <a class="link-language" v-bind="props"> </a>
                </template>

                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" @click="dialog_language = false">
                        <span>×</span>
                      </button>
                      <h4 class="modal-title" id="languageModalLabel">Select Your Language</h4>
                    </div>
                    <div class="modal-body" id="languageContent">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Deutsch</a>
                        </li>
                        <li>
                          <a href="#">Español</a>
                        </li>
                        <li>
                          <a href="#">Français</a>
                        </li>
                        <li>
                          <a href="#">Bahasa Indonesia</a>
                        </li>
                        <li>
                          <a href="#">Italiano</a>
                        </li>
                        <li>
                          <a href="#">Português</a>
                        </li>
                        <li>
                          <a href="#">Tiếng Việt</a>
                        </li>
                        <li>
                          <a href="#">Türkçe</a>
                        </li>
                        <li>
                          <a href="#">Русский</a>
                        </li>
                        <li>
                          <a href="#">ภาษาไทย</a>
                        </li>
                        <li>
                          <a href="#">한국어</a>
                        </li>
                        <li>
                          <a href="#">中文(简体)</a>
                        </li>
                        <li>
                          <a href="#">中文(繁體)</a>
                        </li>
                        <li>
                          <a href="#">日本語</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </v-dialog>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog_language: false,
  })
};
</script>
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

.modal-dialog {
    position: relative;
    width: auto;
    margin: 10px;
}
.theme-light .modal-dialog {
    color: #1e1e1e;
}
.modal.in .modal-dialog {
    -webkit-transform: translate(0,0);
    -ms-transform: translate(0,0);
    -o-transform: translate(0,0);
    transform: translate(0,0);
}



.modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 3px 9px rgba(0,0,0,.5);
    box-shadow: 0 3px 9px rgba(0,0,0,.5);
    outline: 0;
}


button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
button, select {
    text-transform: none;
}
button {
    overflow: visible;
}
.close {
    float: right;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    filter: alpha(opacity=20);
    opacity: .2;
}
button.close {
    padding: 0;
    cursor: pointer;
    background: 0 0;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.modal-header .close {
    margin-top: -2px;
}
.modal-header {
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
}


.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
.h4, .h5, .h6, h4, h5, h6 {
    margin-top: 10px;
    margin-bottom: 10px;
}
.h4, h4 {
    font-size: 18px;
}
    .modal-title {
    margin: 0;
    line-height: 1.42857143;
}
.modal-body {
    position: relative;
    padding: 15px;
}
#languageContent ul {
    column-count: 2;
    padding-left: 10px;
}
ol, ul {
    margin-top: 0;
    margin-bottom: 10px;
}
#languageContent li {
    line-height: 200%;
    list-style: none;
}

a {
    background-color: transparent;
}
a {
  color: #337ab7;
  text-decoration: none;
}
a {
    color: #10589b;
}
a:hover,  a:focus {
    color: #55a1e0;
}
.close:focus, .close:hover {
    color: #000;
    text-decoration: none;
    cursor: pointer;
    filter: alpha(opacity=50);
    opacity: .5;
}







@media (min-width: 768px){
  .modal-dialog {
      width: 600px;
      margin: 30px auto;
  }
  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0,0,0,.5);
    box-shadow: 0 5px 15px rgba(0,0,0,.5);
}

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
