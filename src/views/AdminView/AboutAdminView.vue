<template>
  <div class="about">
    <br style="clear: both" />
    <div class="displayContent">
      <h1>About aNotepad</h1>
      <p>
        aNotepad was launched in 2009 with the goal to provide users with a
        simple and easy-to-use web notepad to take, save, and share notes
        online.
      </p>

      <p>
        We are very excited and encouraged to see hundreds of ideas and
        suggestions from our users over the years. We are working hard on your
        feedback and adding more useful features.
      </p>

      <p>
        If you have any ideas, suggestions, and thoughts on improving aNotepad,
        please reach out to us through the
        <a href="#" onclick="showClassicWidget(); return false;"
          ><b>Feedback Forum</b></a
        >
        or <a href="support@anotepad.com"><b>support@anotepad.com</b></a
        >.
      </p>

      <p>We are eager to hear from you!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  font-weight: normal;
  margin-top: 2%;
  margin-top: 2%;
  min-height: 350px;
}

.displayContent {
  width: 1200px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 5px #333 inset;
  padding: 3% 5%;
  outline: none;
  justify-items: center;
  justify-self: center;
  font-size: 14px;
  margin-right: auto;
  margin-left: auto;
}

h1 {
  font-size: 2em;
  margin-bottom: 0.8em;
}

p {
  margin: 0 0 10px;
}

a {
  text-decoration: none;
  color: #10589b;
}

a:hover {
  color: #337ab7;
}
.displayContent {
    background: #fff;
    color: #333;
}

@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .containerMain {
    min-height: 385px;
  }
}
@media (min-width: 768px) {
  .displayContent {
    width: 1100px;
  }
}
</style>
