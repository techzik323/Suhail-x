const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256751617788";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_06_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAxODgsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxMjksXG4gICAgICAgIDk5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MSxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODksXG4gICAgICAgIDU2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0MixcbiAgICAgICAgODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5MixcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDQxLFxuICAgICAgICA3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzksXG4gICAgICAgIDI1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMjIxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDU0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrWE1admpPaEhPQlNQWDFwazhiNHlyNmo0TVNyZURIaWdISTBuNE53Yk9nPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1Njc1MTYxNzc4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTQxOEU0MzIyQzYyOTcyMjZENjdERDI2OTAxMTkzQkJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjM1NTY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdqZWVPbXJGVEwyWFRJSjE0M3hQSHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWNlZTc5MWItNzRlNS00ZjdkLTk4M2YtOTcwMWIzNzE4OTYwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDgyLFxuICAgICAgNDMsXG4gICAgICAxOTYsXG4gICAgICAxNixcbiAgICAgIDEyOSxcbiAgICAgIDg5LFxuICAgICAgMTQwLFxuICAgICAgMTg3LFxuICAgICAgMTI4LFxuICAgICAgMTkwLFxuICAgICAgMTQsXG4gICAgICAxMjEsXG4gICAgICA2NyxcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgNzQsXG4gICAgICAxMTYsXG4gICAgICAxMDIsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc4LFxuICAgICAgMjI2LFxuICAgICAgMjUwLFxuICAgICAgMTI1LFxuICAgICAgMTU1LFxuICAgICAgMjMzLFxuICAgICAgMTA2LFxuICAgICAgMSxcbiAgICAgIDIyOSxcbiAgICAgIDExMCxcbiAgICAgIDksXG4gICAgICAxNjEsXG4gICAgICAxMDUsXG4gICAgICAxNjQsXG4gICAgICA1NCxcbiAgICAgIDQsXG4gICAgICAxMDksXG4gICAgICAzOSxcbiAgICAgIDE1NSxcbiAgICAgIDE3OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1UTE4UzkxRlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUxNjE3Nzg4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1ODg3NTYzODYxNjMwMjoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lyVHVOTUhFS1RPbmJrR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicDVuSzZVblJmMk90UlN2b29VS05OMGkvV1hwQ0dWS016aUkyVlZxaWJnND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFK3djOXhEQnZOdWZzRzAvajlSZFZ5NTBBbHNZaitObjhGTk56MDdCNHVIYzdTOWxGRGRxR3hQK25MNWhlZnpXN3V4NXB2VjJCRi9MMjAxcGcyNGhDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCNmNTcG9SN29wdGJzSTFjYjl6L0lYT2dIdEdmSVRPdnF6UWNKY015bVI5YTJmZU1QQUE2aXJqM0hSUXE2cTFua09nMVdtQm50djRhcitFbGN1Y1hCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NTE2MTc3ODg6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjM1NTYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTEl1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMSXUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5VUZONzZRSXVONjYzWE90WkxTbUhUMEZGTlZtMDJlRm9XbTNyYlp2SXBjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwNTQwMzk5NDUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "ZIK_Md",
  ownername:process.env.OWNER_NAME|| "★彡ZIK TECH UG]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
