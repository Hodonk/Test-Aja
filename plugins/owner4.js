let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noal = `6288990007937`
  let ppown = await conn.profilePictureUrl(noal + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noal.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `ð¥ð§ðµð¶ð ð¶ð ð ð ð¢ðð»ð²ð¿ *Zy*\n\n     ð® *Note :*\nâ¢ *Dia Baik Hati ã*\nâ¢ Owner tidak menerima save contact\nâ¢ Owner berhak blockir tanpa alasan!\nâ¢ Berbicaralah yang sopan & tidak spam\nâ¢ Owner Hanya merespon yang berkaitan dengan BOT\nâ¢ No Telp\nâ¢ Chat gajelas = Block`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285346545126@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok4 = `62877539651745@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok4.split('@')[0]}`, `Zy`, `ð Team Developer BOT`, `ð« Don't call Owner`, `Nothing`, `ð®ð© Indonesia`, `ð https://github.com/Dzox13524/`, `Just Do It!!`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + nowner, "Chat Zy", null,null, [["Selengkapnya", '.ownerahmad'], [null, null],[null,null]], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner4)$/i



export default handler

