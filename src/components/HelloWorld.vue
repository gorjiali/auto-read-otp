<template>
  <div>
    <div style="border:1px solid; padding: 5px; 10px; margin: 10px 0;">
      <form method="post">
        Enter OTP here:
        <input type="text" autocomplete="one-time-code" inputmode="numeric" v-model="otpInput" name="one-time-code" />
        <input type="submit" ref="otpInputRef" />
      </form>
    </div>
  </div>
</template>

<script>
import autoReadOtp from "@/mixins/autoReadOtp";

export default {
  mixins: [autoReadOtp],
  data() {
    return {
      otpInput: ""
    };
  },

  methods: {
    onAutoReadOtp(otpCode) {
      this.otpInput = otpCode;
    }
  },
  
  mounted() {
    this.useWebOtpApi();
  }
};
</script>
