const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";

const auth = new OAuth2(
  "1091172013441-m5thb08gdjnd0d2ffm81hpgequ81ck13.apps.googleusercontent.com",
  "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",
  "1//04ADYrsFVzX4WCgYIARAAGAQSNwF-L9Ir-FJQ8SNmUl43qxsZFgAQ_OLeBuGY-ltF42Y-vz54313FO7VrtlE2Ut5DxpZPROyEezk",
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token:
      "1//04ADYrsFVzX4WCgYIARAAGAQSNwF-L9Ir-FJQ8SNmUl43qxsZFgAQ_OLeBuGY-ltF42Y-vz54313FO7VrtlE2Ut5DxpZPROyEezk",
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "k58.1912210562@ftu.edu.vn",
      clientId:
        "1091172013441-m5thb08gdjnd0d2ffm81hpgequ81ck13.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04ADYrsFVzX4WCgYIARAAGAQSNwF-L9Ir-FJQ8SNmUl43qxsZFgAQ_OLeBuGY-ltF42Y-vz54313FO7VrtlE2Ut5DxpZPROyEezk",
      accessToken,
    },
  });
  const mailOptions = {
    from: "k58.1912210562@ftu.edu.vn",
    to: email,
    subject: "Facebook email verification",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action requise : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a href=${url} style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">Confirm your account</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
exports.sendResetCode = (email, name, code) => {
  auth.setCredentials({
    refresh_token:
      "1//04ADYrsFVzX4WCgYIARAAGAQSNwF-L9Ir-FJQ8SNmUl43qxsZFgAQ_OLeBuGY-ltF42Y-vz54313FO7VrtlE2Ut5DxpZPROyEezk",
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "k58.1912210562@ftu.edu.vn",
      clientId:
        "1091172013441-m5thb08gdjnd0d2ffm81hpgequ81ck13.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04ADYrsFVzX4WCgYIARAAGAQSNwF-L9Ir-FJQ8SNmUl43qxsZFgAQ_OLeBuGY-ltF42Y-vz54313FO7VrtlE2Ut5DxpZPROyEezk",
      accessToken,
    },
  });
  const mailOptions = {
    from: "k58.1912210562@ftu.edu.vn",
    to: email,
    subject: "Reset facebook password",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#3b5998"><img src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1645134414/logo_cs1si5.png" alt="" style="width:30px"><span>Action requise : Activate your facebook account</span></div><div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto"><span>Hello ${name}</span><div style="padding:20px 0"><span style="padding:1.5rem 0">You recently created an account on Facebook. To complete your registration, please confirm your account.</span></div><a  style="width:200px;padding:10px 15px;background:#4c649b;color:#fff;text-decoration:none;font-weight:600">${code}</a><br><div style="padding-top:20px"><span style="margin:1.5rem 0;color:#898f9c">Facebook allows you to stay in touch with all your friends, once refistered on facebook,you can share photos,organize events and much more.</span></div></div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
