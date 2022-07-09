import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', ` 𝐒𝐢𝐦𝐩𝐥𝐞 𝐁𝐨𝐭 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'bit.ly/Papah-Chan', 'ʏᴏᴜᴛᴜʙᴇ ᴏᴡɴᴇʀ', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\ᴀᴋᴜ ᴄɪɴᴛᴀ ᴀɴɪᴍᴇʜʜʜ`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['menu']
handler.tags = ['general']
handler.command = /^(menu)$/i

export default handler