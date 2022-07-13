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
	return `*──── 「 ${setting.botName} 」 ────*
	
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
  ╔═❖•「 MENU BOT 」⊱ೋ 
  ╠ ➪⏣ ${prefix}menu
  ╠ ➪⏣ ${prefix}owner
  ╠ ➪⏣ ${prefix}donasi
  ╠ ➪⏣ ${prefix}speed
  ╠ ➪⏣ ${prefix}ping
  ╠ ➪⏣ ${prefix}runtime
  ╠ ➪⏣ ${prefix}rulesbot
  ╠ ➪⏣ ${prefix}infobot
  ╠ ➪⏣ ${prefix}groupbot
  ╚═══════════════❖•

  ╔═❖•「 PREMIUM 」⊱ೋ 
  ╠ ➪⏣ ${prefix}daftarprem
  ╠ ➪⏣ ${prefix}cekprem
  ╠ ➪⏣ ${prefix}listprem
  ╚═══════════════❖•

  ╔═❖•「 CONVERT 」⊱ೋ 
  ╠ ➪⏣ ${prefix}stiker <ReplyGambar>
  ╠ ➪⏣ ${prefix}stikergif <ReplyGambar>
  ╠ ➪⏣ ${prefix}toimg <ReplyStiker>
  ╠ ➪⏣ ${prefix}tovid <ReplyStiker>
  ╠ ➪⏣ ${prefix}shortlink <Link>
  ╠ ➪⏣ ${prefix}tts
  ╚═══════════════❖•
  
  ╔═❖•「 DOWNLOADER 」⊱ೋ
  ╠ ➪⏣ ${prefix}play <Querry>
  ╠ ➪⏣ ${prefix}youtube <LinkYt>
  ╠ ➪⏣ ${prefix}ytmp4 <LinkYt>
  ╠ ➪⏣ ${prefix}ytmp3 <LinkYt>
  ╠ ➪⏣ ${prefix}ytmp3vn <LinkYt>
  ╠ ➪⏣ ${prefix}tiktok <LinkTt>
  ╠ ➪⏣ ${prefix}tiktoknowm <LinkTt>
  ╠ ➪⏣ ${prefix}tiktokaudio <LinkTt>
  ╠ ➪⏣ ${prefix}igv <Instagram Video>
  ╠ ➪⏣ ${prefix}igf <Instagram Image>
  ╠ ➪⏣ ${prefix}facebook <LinkFb>
  ╠ ➪⏣ ${prefix}mediafire <LinkMediaFire>
  ╚═══════════════❖•
  
  ╔═❖•「 RANDOM MENU 」⊱ೋ
  ╠ ➪⏣ ${prefix}simi
  ╠ ➪⏣ ${prefix}quotes
  ╠ ➪⏣ ${prefix}gombalan
  ╠ ➪⏣ ${prefix}katabucin
  ╠ ➪⏣ ${prefix}katagalau
  ╠ ➪⏣ ${prefix}faktaunik
  ╠ ➪⏣ ${prefix}cerpen
  ╠ ➪⏣ ${prefix}darkjokes
  ╠ ➪⏣ ${prefix}meme
  ╚═══════════════❖•

  ╔═❖•「 RANDOM IMAGE 」⊱ೋ 
  ╠ ➪⏣ ${prefix}cecan
  ╠ ➪⏣ ${prefix}cogan
  ╠ ➪⏣ ${prefix}bts
  ╠ ➪⏣ ${prefix}exo
  ╠ ➪⏣ ${prefix}ikon
  ╠ ➪⏣ ${prefix}blackpink
  ╠ ➪⏣ ${prefix}aespa
  ╠ ➪⏣ ${prefix}nct 
  ╠ ➪⏣ ${prefix}treasure
  ╠ ➪⏣ ${prefix}enhypen
  ╠ ➪⏣ ${prefix}naruto
  ╠ ➪⏣ ${prefix}loli
  ╠ ➪⏣ ${prefix}waifu
  ╠ ➪⏣ ${prefix}husbu
  ╠ ➪⏣ ${prefix}yaoi
  ╚═══════════════❖•
  
  ╔═❖•「 NSFW 」⊱ೋ
  ╠ ➪⏣ ${prefix}asupan
  ╠ ➪⏣ ${prefix}xnxx <link>
  ╠ ➪⏣ ${prefix}ahegao
  ╠ ➪⏣ ${prefix}blowjob
  ╠ ➪⏣ ${prefix}hentai
  ╠ ➪⏣ ${prefix}masturbation
  ╠ ➪⏣ ${prefix}pussy
  ╚═══════════════❖•
  
  ╔═❖•「 MENU MAKER 」⊱ೋ
  ╠ ➪⏣ ${prefix}glitch <Text> <Text>
  ╠ ➪⏣ ${prefix}flaming <Text>
  ╠ ➪⏣ ${prefix}shadow <Text>
  ╠ ➪⏣ ${prefix}wolftext <Text>
  ╠ ➪⏣ ${prefix}cup <Text>
  ╠ ➪⏣ ${prefix}cup2 <Text>
  ╠ ➪⏣ ${prefix}romantic <Text>
  ╠ ➪⏣ ${prefix}writetext <Text>
  ╠ ➪⏣ ${prefix}lovetext <Text>
  ╠ ➪⏣ ${prefix}lovetext2 <Text>
  ╠ ➪⏣ ${prefix}undergrass <Text>
  ╠ ➪⏣ ${prefix}coffecup <Text>
  ╠ ➪⏣ ${prefix}woodheart <Text>
  ╠ ➪⏣ ${prefix}tahta <Text>
  ╠ ➪⏣ ${prefix}waifumaker <Text>
  ╠ ➪⏣ ${prefix}lolimaker <Text>
  ╠ ➪⏣ ${prefix}kanekimaker <Text>
  ╠ ➪⏣ ${prefix}guramaker <Text>
  ╠ ➪⏣ ${prefix}leaves <Text>
  ╠ ➪⏣ ${prefix}pornhub <Text>
  ╠ ➪⏣ ${prefix}3d <Text>
  ╠ ➪⏣ ${prefix}christmas <Text>
  ╠ ➪⏣ ${prefix}logowolf <Text>
  ╠ ➪⏣ ${prefix}logowolf2 <Text>
  ╚═══════════════❖•
  
  ╔═❖•「 SEARCH 」⊱ೋ
  ╠ ➪⏣ ${prefix}kbbi <Kata>
  ╠ ➪⏣ ${prefix}covid19
  ╠ ➪⏣ ${prefix}wiki <Query>
  ╠ ➪⏣ ${prefix}say <Text>
  ╠ ➪⏣ ${prefix}qr <Text>
  ╠ ➪⏣ ${prefix}readmore <Text>|<Text>
  ╠ ➪⏣ ${prefix}hitungmundur 12 10 2022
  ╠ ➪⏣ ${prefix}translate <from> <to>
  ╠ ➪⏣ ${prefix}lirik <Judul>
  ╠ ➪⏣ ${prefix}grupwa <Pencarian>
  ╠ ➪⏣ ${prefix}ytsearch <Pencarian>
  ╠ ➪⏣ ${prefix}getvideo
  ╠ ➪⏣ ${prefix}getmusic
  ╠ ➪⏣ ${prefix}pinterest <Querry>
  ╠ ➪⏣ ${prefix}getpp
  ╠ ➪⏣ ${prefix}ppcp
  ╚═══════════════❖•
  
  ╔═❖•「 VOICE CHANGER 」⊱ೋ
  ╠ ➪⏣ ${prefix}halah
  ╠ ➪⏣ ${prefix}hilih
  ╠ ➪⏣ ${prefix}heleh
  ╠ ➪⏣ ${prefix}huluh
  ╠ ➪⏣ ${prefix}holoh
  ╚═══════════════❖•
  
  ╔═❖•「 MENU GAME 」⊱ೋ
  ╠ ➪⏣ ${prefix}tictactoe @tag
  ╠ ➪⏣ ${prefix}delttc
  ╠ ➪⏣ ${prefix}suit
  ╠ ➪⏣ ${prefix}slot
  ╠ ➪⏣ ${prefix}caklontong
  ╠ ➪⏣ ${prefix}siapaaku
  ╠ ➪⏣ ${prefix}asahotak
  ╠ ➪⏣ ${prefix}tebakgambar
  ╠ ➪⏣ ${prefix}tebakkimia
  ╠ ➪⏣ ${prefix}tekateki
  ╠ ➪⏣ ${prefix}susunkata
  ╠ ➪⏣ ${prefix}tebakkata
  ╚═══════════════❖•

  ╔═❖•「 FUN MENU 」⊱ೋ 
  ╠ ➪⏣ ${prefix}apakah <Query>
  ╠ ➪⏣ ${prefix}kapankah <Query>
  ╠ ➪⏣ ${prefix}gimana <Query>
  ╠ ➪⏣ ${prefix}bisakah <Query>
  ╠ ➪⏣ ${prefix}rate <Query>
  ╠ ➪⏣ ${prefix}gantengcek <Nama>
  ╠ ➪⏣ ${prefix}cantikcek <Nama>
  ╠ ➪⏣ ${prefix}sangecek <Nama>
  ╠ ➪⏣ ${prefix}gaycek <Nama>
  ╠ ➪⏣ ${prefix}lesbicek <Nama>
  ╠ ➪⏣ ${prefix}cekme
  ╠ ➪⏣ ${prefix}dadu
  ╠ ➪⏣ ${prefix}truth
  ╠ ➪⏣ ${prefix}dare
  ╚═══════════════❖•
  
  ╔═❖•「 PAYMENT 」⊱ೋ
  ╠ ➪⏣ ${prefix}buylimit <Jumlah>
  ╠ ➪⏣ ${prefix}buyglimit <Jumlah>
  ╠ ➪⏣ ${prefix}transfer @tag <jumlah>
  ╠ ➪⏣ ${prefix}limit
  ╠ ➪⏣ ${prefix}balance
  ╠ ➪⏣ ${prefix}topbalance
  ╚═══════════════❖•

  ╔═❖•「 GROUP MENU 」⊱ೋ
  ╠ ➪⏣ ${prefix}linkgrup
  ╠ ➪⏣ ${prefix}setppgrup
  ╠ ➪⏣ ${prefix}setnamegc
  ╠ ➪⏣ ${prefix}setdesc
  ╠ ➪⏣ ${prefix}group <Open/Close>
  ╠ ➪⏣ ${prefix}revoke
  ╠ ➪⏣ ${prefix}hidetag <Text>
  ╠ ➪⏣ ${prefix}tagall <Text>
  ╠ ➪⏣ ${prefix}kick <@tag>
  ╠ ➪⏣ ${prefix}add <@tag>
  ╠ ➪⏣ ${prefix}promote <@tag>
  ╠ ➪⏣ ${prefix}demote <@tag>
  ╠ ➪⏣ ${prefix}delete <replychatbot>
  ╚═══════════════❖•
  
  ╔═❖•「 OWNER MENU 」⊱ೋ
  ╠ ➪⏣ > evalcode
  ╠ ➪⏣ x evalcode-2
  ╠ ➪⏣ $ executor
  ╠ ➪⏣ ${prefix}sendvirtex
  ╠ ➪⏣ ${prefix}setppbot
  ╠ ➪⏣ ${prefix}exif
  ╠ ➪⏣ ${prefix}textchat
  ╠ ➪⏣ ${prefix}leave
  ╠ ➪⏣ ${prefix}addprem
  ╠ ➪⏣ ${prefix}delprem
  ╠ ➪⏣ ${prefix}broadcast
  ╠ ➪⏣ ${prefix}masuk
  ╚═══════════════❖•
  
  
  *THANKS TO* 

  - Allah SWT
  - Baileys-Md (Adiwa Jshing)
  - @irfann._x (Iyan)
  - @arsrfi.jpg (Arasya)
  - @M Hadi Firmansya (Hadi Api)
  - @melcanz_ (Amel)
  - @hardianto.xyz (Anto)`
}