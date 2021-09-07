export default {
   methods: {
      useWebOtpApi() {
        if ("OTPCredential" in window) {
            const input = document.querySelector('input[autocomplete="one-time-code"]');
            if (!input) return;
            const ac = new AbortController();
            const form = input.closest("form");
            if (form) {
              form.addEventListener("submit", e => {
                ac.abort();
                alert('ac abort')
              });
            }
            navigator.credentials
              .get({ otp: { transport: ["sms"] }, signal: ac.signal })
              .then(otp => {
               this.onAutoReadOtp(otp.code);
              })
              .catch(() => {});
        }
      }
    },
}
