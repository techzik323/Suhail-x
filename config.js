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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_08_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDg1LFxuICAgICAgICA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODksXG4gICAgICAgIDE4NixcbiAgICAgICAgODQsXG4gICAgICAgIDI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAzLFxuICAgICAgICAxNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICA2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk3LFxuICAgICAgICAzMixcbiAgICAgICAgMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgxLFxuICAgICAgICA5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkViZWZHS1Vkd0NHQzVaRGxIa3lxMmt1S0huTFJiTk1RZWkxWnlBQzMycGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpqQlJ5d2JtUlZleldLVlVibHd3NlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDk4MTcyYmItZDRiMC00MmQ5LThhMTctMzhmYjQ0MzkxNGU3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMjQwLFxuICAgICAgOTUsXG4gICAgICAxMyxcbiAgICAgIDExLFxuICAgICAgNSxcbiAgICAgIDYwLFxuICAgICAgNzAsXG4gICAgICA0NCxcbiAgICAgIDIyMixcbiAgICAgIDQsXG4gICAgICAxNjAsXG4gICAgICAyMTksXG4gICAgICAxMTYsXG4gICAgICAxOTgsXG4gICAgICAyNDUsXG4gICAgICA2NixcbiAgICAgIDMyLFxuICAgICAgNjcsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MyxcbiAgICAgIDIzMCxcbiAgICAgIDQ1LFxuICAgICAgMzUsXG4gICAgICAxNjAsXG4gICAgICAxNjEsXG4gICAgICAxMDQsXG4gICAgICAxNzYsXG4gICAgICA4MCxcbiAgICAgIDEwMCxcbiAgICAgIDc3LFxuICAgICAgMjE4LFxuICAgICAgNjMsXG4gICAgICAxMTYsXG4gICAgICAxMzgsXG4gICAgICAxMjEsXG4gICAgICAxODMsXG4gICAgICAxMDgsXG4gICAgICA5NSxcbiAgICAgIDE1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMOFpWVEs0WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzUxNjE3Nzg4Ojc1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTg4NzU2Mzg2MTYzMDI6NzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTN2dGVzRkVOdjYvN2dHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3NmZ3a2xXcWRvZ2NpRXZPUlhsVVY1cG8wWkRSVzNyT2orUkYydjV6RjFRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm05Q3h3cCtwMG4zMmpCbm9XdkJwNlRweGcrODUyUHVyMVlUMi9RN05aS0JoV3RDMzVoR3k1K0RyMXZtWVFERmZUNUwzUW5VVVZPd0N4cmFaYWVHQUN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZHN3NSV3JkRkpUWDRHS1dsUWdrTGs0ZG9IbUJDaGp0SmdpNzVlc3lSeWFwWjJ2MmROR01QenovbTY5NEZ6dGtFSEhBZjlpYmZPNUEyM0sraDlyV2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc1MTYxNzc4ODo3NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTQ5NzI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFl3XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEWXcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoRGNOMldiV0w0dVZmWHZxSENGRU55Y05DbW9FQnh5U2g5VW9EK2IrdnNvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1Njc0NTUxNzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxNDc2NjU5MjRcIn0iCn0="  // PUT your SESSION_ID 


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
