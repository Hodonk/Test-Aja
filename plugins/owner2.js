let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noal = `6283837709331`
  let ppown = await conn.profilePictureUrl(noal + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noal.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `🔥𝗧𝗵𝗶𝘀 𝗶𝘀 𝗠𝘆 𝗢𝘄𝗻𝗲𝗿 *Fuad*ヅ\n\n     📮 *Note :*\n• *Dia Baik Hati ヅ*\n• Owner tidak menerima save contact\n• Owner berhak blockir tanpa alasan!\n• Berbicaralah yang sopan & tidak spam\n• Owner Hanya merespon yang berkaitan dengan BOT\n• No Telp\n• Chat gajelas = Block`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6283837709331@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok4 = `6283837709331@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok4.split('@')[0]}`, `Fuad`, `🎗 Team Developer BOT`, `🚫 Don't call Owner`, `Nothing`, `🇮🇩 Indonesia`, `🚀 https://github.com/FuadZy`, `Just Do It!!`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + nowner, "Chat Fuad", null,null, [["Selengkapnya", '.ownerahmad'], [null, null],[null,null]], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kak😖`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner2)$/i



export default handler

