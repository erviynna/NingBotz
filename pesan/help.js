const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

  𓆩☆𓆪 NINGBOTZ MENU
╔════════════❖•ೋ°
╟ Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
╟ Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
╟ Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
╟ Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
╟ Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
╟ Balance : $${toCommas(getBalance(sender, balance))}
╚══════❖•ೋ°
‼️Note : Anggap _<>_ *Tidak Ada*‼️
  
  _ADA BUG? KETIK ${prefix}report BUG MU_
  ${readmore}

 *MAIN MENU*
 > ${prefix}menu
 > ${prefix}owner
 > ${prefix}donasi
 > ${prefix}speed
 > ${prefix}runtime
 > ${prefix}cekprem
 > ${prefix}listprem

 *CONVERTER/TOOLS*
 > ${prefix}sticker
 > ${prefix}toimg
 > ${prefix}tovid

 *DOWNLOADER*
 > ${prefix}play
 > ${prefix}tiktok
 > ${prefix}ytmp4
 > ${prefix}ytmp3
 > ${prefix}getvideo
 > ${prefix}getmusic
 > ${prefix}instagram
 > ${prefix}facebook
  
 *RANDOM MENU*
 > ${prefix}quote
 > ${prefix}cecan
 > ${prefix}cogan
  
 *SEARCH MENU*
 > ${prefix}lirik
 > ${prefix}grupwa
 > ${prefix}ytsearch
  
 *GAME MENU*
 > ${prefix}tictactoe
 > ${prefix}delttc
 > ${prefix}tebakgambar
  
 *PAYMENT & BANK*
 > ${prefix}buylimit
 > ${prefix}buyglimit
 > ${prefix}transfer
 > ${prefix}limit
 > ${prefix}balance
  
 *GROUP MENU*
 > ${prefix}linkgrup
 > ${prefix}setppgrup
 > ${prefix}setnamegc
 > ${prefix}setdesc
 > ${prefix}group
 > ${prefix}revoke
 > ${prefix}hidetag
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 > ${prefix}join
 > ${prefix}broadcast
 > ${prefix}setppbot
 > ${prefix}exif
 > ${prefix}leave
 > ${prefix}addprem
 > ${prefix}delprem
`
}
