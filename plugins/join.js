import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮BOT Gak Bisa Join Sana Sini Sembarangan (≧∇≦)/`
let thumbs = `https://telegra.ph/file/579113e790fe526d676cf.jpg`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
const message = {
            document: { url: thumbs },
            jpegThumbnail: await (await fetch(thumbs)).buffer(), fileName: global.wm, mimetype: td, fileLength: '9999999', pageCount: '999',
            caption: info,
            footer: wm + '\nSupport FuadBoTz',
            templateButtons: [
                {
                    urlButton: {
                        displayText: 'Group Official',
                        url: 'https://chat.whatsapp.com/EAR7T7H59vOJz8KcwMP179',
                    }
                },
                {
                    urlButton: {
                        displayText: 'Creator Bot',
                        url: 'https://wa.me/6283837709331',
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'MENU',
                        id: '.menu'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'SPEED',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'SEWA BOT',
                        id: '.sewa'
                    }
                },
            ]
        }
       // conn.sendMessage(m.chat, message, m)
conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'Awokawok Minta Owner Masukin!', 'status@broadcast')
}
handler.help = ['join']
handler.tags = ['info']
handler.command = /^(join)$/i

export default handler