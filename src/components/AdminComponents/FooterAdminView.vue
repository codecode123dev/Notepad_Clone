<template>
  <div class="footer">
    <div style="text-align: center">
      <p style="padding: 30px 0 10px 0">
        <a
          target="_blank"
          rel="nofollow"
          href="https://apps.apple.com/app/a-notepad-take-share-notes/id1494609935"
          ><img
            alt="Download on the Apple Store"
            src="https://cdn.anotepad.com/images/badge_applestore.png"
            height="45"
        /></a>
        &nbsp;
        <a
          target="_blank"
          rel="nofollow"
          href="https://play.google.com/store/apps/details?id=com.anotepad.android"
          ><img
            alt="Get it on Google Play"
            src="https://cdn.anotepad.com/images/badge_playstore.png"
            height="45"
        /></a>
      </p>
      <p>© 2009-2023 aNotepad.com</p>
    </div>

    <p>
      <router-link :to="{ name: 'about_admin_view' }">About</router-link>
      | <router-link :to="{ name: 'privacy_admin_view' }">Privacy</router-link> |
      <router-link :to="{ name: 'feature_admin_view' }">Features</router-link> |
      <a href="https://www.gotresumebuilder.com" target="_blank"
        >Resume Builder</a
      >
      | <a href="https://www.gotfreefax.com" target="_blank">Free Fax</a> |
      <router-link :to="{ name: 'reportabuse_admin_view' }">Report Abuse</router-link>
    </p>

    <p>
      aNotepad.com is your everyday online notepad. You can take notes and share
      notes online without having to login.
      <br />
      You can use a rich text editor and download your note as PDF or Word
      document.
      <br />
      Best of all - aNotepad is a fast, clean, and easy-to-use notepad
      online.<br /><br />
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #4682b4;
  text-align: center;
  padding: 20px 0;
  margin-top: 20px;
}

.footer p {
  color: #fff;
  font-size: 14px;
  margin: 0 0 10px;
}

.footer a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  padding: 2px;
}
</style>
