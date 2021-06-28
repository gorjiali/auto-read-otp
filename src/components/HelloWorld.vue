<template>
  <div>
    <div style="padding: 5px; 10px; margin: 10px 0;">
      <form method="post">
        Enter OTP here:
        <input type="text" autocomplete="one-time-code" inputmode="numeric" name="one-time-code" />
        <input type="submit" ref="otpInputRef" v-model="otpInput" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otpInput: ""
    };
  },
  mounted() {
    if ("OTPCredential" in window) {
      navigator.credentials
        .get({ otp: { transport: ["sms"] }, signal: ac.signal })
        .then(otp => {
          this.otpInput = otp.code;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
