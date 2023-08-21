<template>
  <div class="report">
    <div class="main">
      <h1>Report Abuse</h1>

      <p class="text-report">Report note with abusive or illegal content</p>
      <form class="form-horizontal">
        <div class="form-group">
          <label class="content control-label">Note URL</label>
          <div class="form-input">
            <input
              type="text"
              value="https://anotepad.com/"
              class="form-control"
            />
            <span></span>
          </div>
        </div>

        <div class="form-group">
          <label class="content control-label label-2">Type of Abuse</label>

          <div class="form-input">
            <div>
              <input
                type="radio"
                name="abusetype"
                value="Malware and phishing"
                style="margin-right: 2px"
              />
              <label for="abusetype_malware" style="font-weight: normal"
                >Malware and phishing</label
              >
            </div>

            <div>
              <input
                type="radio"
                name="abusetype"
                value="Terrorist content"
                style="margin-right: 2px"
              />
              <label for="abusetype_terrorist" style="font-weight: normal"
                >Terrorist content</label
              >
            </div>

            <div>
              <input
                type="radio"
                name="abusetype"
                value="Child exploitation"
                style="margin-right: 2px"
              />
              <label for="abusetype_child" style="font-weight: normal"
                >Child exploitation</label
              >
            </div>

            <div>
              <input type="radio" name="abusetype" value="Other" />
              <label for="abusetype_other" style="font-weight: normal"
                >Other</label
              >
              <input
                type="text"
                name="otherabuse"
                class="form-control"
                placeholder="Please Explain"
                style="display: none"
              />
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="form-sumit form-input">
            <input type="submit" class="btn btn-primary" value="Report Abuse" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReportAbuse",
};
</script>

<style scoped>
.report {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #333;
}

.form-group {
  display: table;
  margin-left: 100px;
  margin-bottom: 30px;
}

.form-horizontal .control-label {
  padding-top: 7px;
  margin-bottom: 0;
  float: left;
  text-align: left;
}

.label-2 {
  margin-left: -35px;
}

.content {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
.form-input {
  width: max-content;
  float: right;
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.form-input input[type="radio"]:checked {
  border-color: #39a0ee; /* Màu biên khi được chọn */
}

.form-control {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -webkit-transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s,
    -webkit-box-shadow ease-in-out 0.15s;
}

p {
  font-size: 16px;
  font-weight: bold;
  color: #337ab7;
}

h1 {
  margin-top: 20px;
  font-size: 2em;
  margin-bottom: 0.8em;
}
label {
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  text-align: left;
}
.form-control:hover {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}
.form-sumit {
  margin-left: 90px;
}

.btn-primary {
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
}

.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  border: 1px solid transparent;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  border-radius: 4px;
}
.btn:hover {
  background-color: #2e6da4;
}

.main {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .main {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .main {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .main {
    width: 1170px;
  }
}
</style>
