let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn, command, args, usedPrefix, DevMode }) => {

  let name = m.sender

  let noah = `6285954708804`
  let ppown = await conn.profilePictureUrl(noah + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
  let nowner = `${noah.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `ð¥ð§ðµð¶ð ð¶ð ð ð ð¢ðð»ð²ð¿ *Xy*\n\n     ð® *Note :*\nâ¢ *Owner yg Baik Hati!!*\nâ¢ Owner tidak menerima save contact!\nâ¢ Owner berhak blockir tanpa alasan\nâ¢ Berbicaralah yang sopan & tidak spam\nâ¢ Owner Hanya merespon yang berkaitan dengan BOT\nâ¢ No Telp\nâ¢ Chat gajelas = Block`
  let fkonn = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '6285954708804@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${await conn.getName(name)}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  let sok3 = `6285954708804@s.whatsapp.net`
  try {

  const sentMsg = await conn.sendContactArray(m.chat, [

    [`${sok3.split('@')[0]}`, `Xy`, `ð Team Developer BOT`, `ð« Don't call Xy`, `alvinrinegar@gmail.com`, `ð®ð© Indonesia`, `ð https://github.com/FuadXy`, `Just Try!!`],
  ], fkonn) 

  await conn.sendHydrated(m.chat, teksnomor, wm, ppown, "https://wa.me/" + noah, "Chat Xy", null,null, [["Selengkapnya", '.owneralvin'], [null, null],[null,null]], sentMsg, {mentions: [m.sender]})

  } catch {

  const sentMsg = await conn.sendContact(m.chat, `${owner[0]}`, `${await conn.getName(owner[0]+'@s.whatsapp.net')}`, m) 

  await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} itu nomor team developerku, jangan di apa-apain ya kakð`, sentMsg, {mentions: [m.sender]})

  }
}

handler.command = /^(owner3)$/i



export default handler

