const nodemailer = require('nodemailer')
const {google} = require ("googleapis")
const {OAuth2} = google.auth
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground"


const {

MAILING_SERVICE_CLIENT_SECRET ,
MAILING_SERVICE_REFRESH_TOKEN ,
SENDER_EMAIL_ADDRESS,
MAILING_SERVICE_CLIENT_ID,
} = process.env

const oauth2Client = new OAuth2(
    MAILING_SERVICE_CLIENT_ID,
    MAILING_SERVICE_CLIENT_SECRET ,
    MAILING_SERVICE_REFRESH_TOKEN ,
    OAUTH_PLAYGROUND

)

// send mail

const sendEmail = (to , url) => {
    oauth2Client.setCredentials({
        refresh_token: MAILING_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({

        service:"gmail",
        auth: {
            type: "OAuth2",
            user:SENDER_EMAIL_ADDRESS,
            clientId: MAILING_SERVICE_CLIENT_ID,
            clientSecret: MAILING_SERVICE_CLIENT_SECRET,
            refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
            accessToken:accessToken
        }

        
    })

    const mailOptions = {

        from: SENDER_EMAIL_ADDRESS,
        to:to,
        subject: "Full Auth",
        html:`
        <p>Click here to activate your account</p>
         <a href=${url}>activate</a>
        `
    }

    smtpTransport.sendMail(mailOptions,(err,infor)=>{

        if(err) return err
        return infor
    })

}

module.exports = sendEmail