import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/sound102.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, {},{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.youtube.com/@hagozox",
    mediaType: 2,
    description: "https://www.youtube.com/@hagozox", 
    title: 'ᴋʜᴏɪʏʀᴜʟ ʙᴏᴛᴢ-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['sound102']
handler.help = ['sound102']

export default handler