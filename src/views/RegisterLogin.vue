<template>
  <div class="main-RL">
    <p>
      To access your notes from anywhere and never lose them, just create an
      account (it will take less than a minute). If you already have an account,
      you can log in below.
    </p>
    <div>
      <h2>Create an Account</h2>
      <form class="from-Create">
        <div class="Username-from">
          <label for="reg-username" class="control-label">Email</label>
          <input
            type="text"
            id="reg-username"
            class="Create-input"
            placeholder="Enter Email"
            v-model="regUsername"
            required
          />
        </div>

        <div class="Password-from">
          <label for="reg-password" class="control-label">Password</label>
          <input
            type="password"
            id="reg-password"
            class="Create-input"
            placeholder="New Password"
            v-model="regPassword"
            required
          />
        </div>
        <div class="button-from">
          <button type="submit" class="create-button b1">
            Create an Account
          </button>
        </div>
      </form>
    </div>

    <div>
      <h2>Login</h2>
      <form class="from-Create">
        <div class="Username-from">
          <label for="login-username" class="control-label">Email</label>
          <input
            type="text"
            id="login-username"
            class="Create-input"
            placeholder="Enter Email"
            v-model="loginUsername"
            required
          />
        </div>

        <div class="Password-from">
          <label for="login-password" class="control-label">Password</label>
          <input
            type="password"
            id="login-password"
            class="Create-input"
            placeholder="Enter Password"
            v-model="loginPassword"
            required
          />
        </div>

        <div
          id="rc-anchor-container"
          class="rc-anchor rc-anchor-normal rc-anchor-light"
        >
          <input
            type="checkbox"
            class="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox"
            role="checkbox"
            aria-checked="false"
            id="recaptcha-anchor"
            tabindex="0"
            dir="ltr"
            aria-labelledby="recaptcha-anchor-label"
          />
          <div class="recaptcha-checkbox-border" role="presentation"></div>
          <div class="recaptcha-checkbox-spinner" role="presentation">
            <div class="recaptcha-checkbox-spinner-overlay"></div>
          </div>
          <div class="recaptcha-checkbox-checkmark" role="presentation"></div>

          <label
            class="rc-anchor-center-item rc-anchor-checkbox-label"
            aria-hidden="true"
            role="presentation"
            id="recaptcha-anchor-label"
          >
            <span></span>Tôi không phải là người máy
          </label>
          <div class="rc-anchor-normal-footer">
            <div
              class="rc-anchor-logo-portrait"
              aria-hidden="true"
              role="presentation"
            >
              <div class="rc-anchor-logo-img rc-anchor-logo-img-portrait"></div>
              <div class="rc-anchor-logo-text">reCAPTCHA</div>
            </div>
            <div class="rc-anchor-pt">
              <a
                href="https://www.google.com/intl/vi/policies/privacy/"
                target="_blank"
                >Bảo mật</a
              >
              <span aria-hidden="true" role="presentation"> - </span>
              <a
                href="https://www.google.com/intl/vi/policies/terms/"
                target="_blank"
                >Điều khoản</a
              >
            </div>
          </div>
        </div>

        <div class="checkbox">
          <label>
            <input
              type="checkbox"
              name="remember"
              checked="checked"
              class="checkbox-from"
            />
            Remember me
          </label>
        </div>
        <div class="button-from">
          <button type="submit" class="create-button b2">Login</button>
          <a href="" class="forgot"> Forgot password?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.main-RL {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
}

form {
  display: block;
  margin-top: 0em;
}

.from-Create .control-label {
  padding-top: 7px;
  margin-bottom: 0;
  float: left;
  text-align: left;
  font-weight: bold;
}

p {
  padding-top: 30px;
  text-align: center;
}

h2 {
  position: relative;
  left: 150px;
}

.from-Create {
  margin-left: 250px;
}

.button-from {
  padding-top: 15px;
}

.create-button {
  background: #337ab7;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 150px;
  height: 32px;
  font-size: 14px;
  padding: 6px 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  left: 90px;
}

.create-button:hover {
  background-color: #3275fc;
}
.b2 {
  width: 80px;
}
.forgot {
  margin-left: 100px;
  text-decoration: none;
}

label {
  text-align: left;
}

.Username-from {
  padding-bottom: 15px;
}

.Create-input {
  display: inline;
  margin-right: 10px;
  width: 500px;
  height: 25px;
}

.Username-from input {
  position: relative;
  left: 50px;
}

.Password-from input {
  position: relative;
  left: 22px;
}

.checkbox {
  margin-top: 20px;
  margin-left: 85px;
}
.checkbox-from {
  width: 15px;
  height: 15px;
  border: 2px solid #3498db;
  background: #337ab7;
}

.checkbox-from input {
  background-color: blue; /* Hoặc bất kỳ màu nào bạn muốn */
}

form input {
  width: 800px;
  padding: 4px;
  height: 20px;
  font-size: 1em;
  font-family: inherit;
  resize: none;
  border: 1px solid gray;
  border-radius: 4px;
}

form input:focus {
  border-color: #66afe9;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(102, 175, 233, 0.6);
}

/* reCAPTCHA  */
#rc-anchor-container {
  background: #f9f9f9;
  border: 1px solid #d3d3d3;
  padding: 10px;
  height: 56px;
  width: 280px;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-left: 8px;
  border-radius: 5px;
}

/* Styles for the checkbox holder */
.rc-anchor-checkbox-holder {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

/* Styles for the checkbox */
.recaptcha-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #999;
  background-color: #fff;
  position: relative;
  cursor: pointer;
}

.recaptcha-checkbox:hover {
  border-color: #555;
}

/* Styles for the checkmark icon */
.recaptcha-checkbox-checkmark {
  width: 9px;
  height: 15px;
  border: solid #0f9d58;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
}

.rc-anchor-checkbox-label {
  width: 152px;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: #333;
  font-weight: 400;
  line-height: 17px;
}

.rc-anchor-normal-footer {
  font-size: 12px;
  color: #777;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.rc-anchor-pt a {
  text-decoration: none;
  color: #777;
  font-size: 7px;
  display: inline;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.rc-anchor-pt a:hover {
  color: #0f9d58;
}
.rc-anchor-logo-img {
  background-image: url("https://www.gstatic.com/recaptcha/api2/logo_48.png");
  width: 32px;
  height: 32px;
  background-size: 32px;
  margin: 0 13px 0 13px;
  display: inline-block;
  vertical-align: middle;
}

.rc-anchor-checkbox-holder {
  display: flex;
  align-items: center;
}

.rc-anchor-checkbox-label {
  margin-left: 10px;
}
</style>