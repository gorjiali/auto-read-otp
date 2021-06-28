<template>
  <div>
    <div style="border:1px solid; padding: 5px; 10px; margin: 10px 0;">
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
      otpInput: ''
    }
  },
  mounted() {
    if ("OTPCredential" in window) {
      window.addEventListener("DOMContentLoaded", e => {
        const input = document.querySelector('input[autocomplete="one-time-code"]');
        if (!input) return;
        const ac = new AbortController();
        const form = input.closest("form");
        if (form) {
          form.addEventListener("submit", e => {
            ac.abort();
          });
        }
        navigator.credentials
          .get({
            otp: { transport: ["sms"] },
            signal: ac.signal
          })
          .then(otp => {
            this.otpInput = otp.code;
            if (form) form.submit();
          })
          .catch(err => {
            console.log(err);
          });
      });
    }
  }
};
</script>
