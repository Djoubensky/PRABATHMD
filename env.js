const envv2 = require('./config-v2')
var GITHUB_TOKEN;
var BOT_NUMBER;
var SESSION_ID;

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const username = fs.readFileSync('github_username.txt', 'utf8').trim()
if(process.env.GITHUB_AUTH_TOKEN){
GITHUB_TOKEN = process.env.GITHUB_AUTH_TOKEN
}else{
GITHUB_TOKEN = envv2.GITHUB_AUTH_TOKEN
}
if(process.env.BOT_NUMBER){
BOT_NUMBER = process.env.BOT_NUMBER
}else{
BOT_NUMBER = envv2.BOT_NUMBER
}
if(process.env.SESSION_ID){
SESSION_ID = process.env.SESSION_ID
}else{
SESSION_ID = envv2.SESSION_ID
}




module.exports = {
    SESSION_ID: SESSION_ID,    PRABATH-MD~mH4khCrB#liNZ5ElpP7i_YxBmBjWw1QUTwJn788CsD57j_OxtOzc
    BOT_NUMBER:  BOT_NUMBER,2250504765006
    GITHUB_USERNAME: 𖤓⃞⃝💚༒𝖅𝖊𝖝𝐌𝐑_𝐓𝐄𝐑𝐑𝐄𝐔𝐑𝐒༒𖤓⃞🗿
    GITHUB_AUTH_TOKEN: GITHUB_TOKEN,
};
