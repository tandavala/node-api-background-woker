const { sendEmail } = require("../mailer");

module.exports = async (job) => {
  // extract data from job
  const { userEmail, subject, body } = job.data;

  if (!userEmail || !subject || !body) {
    return Promise.reject(new Error("Missing params of job"));
  }
  try {
    const mailResult = await sendEmail({
      to: userEmail,
      subject: subject,
      text: body,
    });
    return Promise.resolve({ sent: true, messageId: mailResult.messageId });
  } catch (err) {
    return Promise.reject(err);
  }
};
