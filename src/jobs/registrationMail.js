module.exports = {
  key: "RegistrationMail",
  handle({ data }) {
    const { user } = data;

    setTimeout(() => {
      console.log("lets us do some heavey work in here");
    }, 5000);
  },
};
