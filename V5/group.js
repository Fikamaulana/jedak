/*

Kalu Error Bilang Ke Wa Di Bawah
Base Ori TukulBot
Script Bot Ori TukulBot
No Enc? Buy Bang Di Pembuat Sc Nya Nih Nomor Wa Nya
wa.me/085279774918
Note❗Selain Di Atas Clone

*/
const {
	MessageType
} = require("@adiwajshing/baileys");
const fs = require("fs-extra")
const { color, bgcolor } = require('../V2/color')
const { getGroupAdmins, getBuffer } = require('../V2/functions')

module.exports = welcome = async (TukulBot, anu) => {
	    const welkom = JSON.parse(fs.readFileSync('./V3/welcome.json'))
	    const isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    groupMet = await TukulBot.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                groupAdmins = getGroupAdmins(groupMembers)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await TukulBot.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await TukulBot.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
             }
            if (anu.action == 'add' && mem.includes(TukulBot.user.jid)) {
            TukulBot.sendMessage(anu.jid, 'wehh!! aing di manaaaa anjg, udh bayar belommm di yang sewaaa hayooo, jadiin admin kontol, Ketik .menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(TukulBot.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await TukulBot.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
               groupName = mdata.subject
                let v = TukulBot.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `ʜᴀʟʟᴏ ᴋᴀᴋ *@${mem.split('@')[0]}*
◧ ɪɴᴛʀᴏ ᴅᴜʟᴜ
*□* ɴᴀᴍᴀ :
*□* ᴜᴍᴜʀ :
*□* ʜᴏʙʙʏ :
*□* ɢᴇɴᴅᴇʀ :
*□* ᴀꜱᴀʟ ᴋᴏᴛᴀ :
⌬━━━━━━━━━━━⌬`
              buff = await getBuffer(pic)
               TukulBot.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${groupName}*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(TukulBot.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await TukulBot.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = TukulBot.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                groupName = mdata.subject
                out = `ꜱᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ ᴋᴀᴡᴀɴ @${num.split('@')[0]}`
               buff = await getBuffer(pic)
               TukulBot.sendMessage(mdata.id, { contentText: `${out}`, footerText: `ᴛᴇʟᴀʜ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴ ɢʀᴏᴜᴘ *${groupName}*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'pink'))
		}
	}
