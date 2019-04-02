
const nodemailer = require("nodemailer");
var {google} = require('googleapis');
const {googleAuth} = require('google-auth-library');
const axios = require('axios');

async function reaction_gmail(apiTwo, google)
{
    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: "lothairenoah@gmail.com", 
             clientId: "410066864000-h1inmcjimoeu4prbdvphqpga290k779r.apps.googleusercontent.com",
             clientSecret: "BywEOa8InRDG-W7-KpgR-I-u",
             refreshToken: "1/U3tb1ZydRtbubxWt8sQp9aV16Q0aYILf0ErOGKbKvgo",
             accessToken: google.token
        }
   });
    const mailOptions = {
        from: google.email,
        to: apiTwo.complement,
        subject: "[WARNING]Node.js Email with Secure OAuth[AREA Project]",
        generateTextFromHTML: true,
        html: "<b>Tu as recu une notification sur area project</b>"
    };
    await smtpTransport.sendMail(mailOptions);
    await console.log("je send");
}

async function reaction_drive(apiTwo, google)
{
    try {
        console.log(google.token);
        const { data } = await axios.post( "https://www.googleapis.com/drive/v3/files" ,{
            name : "tesfolder",
            mimeType: 'application/vnd.google-apps.folder'
        }, {
            headers: {
                Authorization: `Bearer ${google.token}`
            }
        })
    
    } catch(err) {
         console.log(err);
    }
}

async function do_reaction(apiTwo, google){
    if (apiTwo.name == 'gmail') {
            await reaction_gmail(apiTwo, google);
    }
    if(apiTwo.name == 'googledrive') {
            await reaction_drive(apiTwo, google);
    }
}


exports.do_reaction = do_reaction;