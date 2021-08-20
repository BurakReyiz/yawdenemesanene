const rodzen = require("aoi.js")
var fs = require('fs')
const bot = new rodzen.Bot({
    token:process.env.token,
    prefix:"$getServerVar[prefix]"
})

bot.onEmojiDelete()
bot.onEmojiCreate()
bot.onInviteCreate()
bot.onInviteDelete()
bot.onBanAdd()
bot.onBanRemove()
bot.onRoleCreate()
bot.onRoleDelete()
bot.onChannelCreate()
bot.onChannelDelete()
bot.onMessageDelete()
bot.onMessageUpdate() 
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
   bot.command({
        name: command.name,
        code: command.code,
     aliases: command.aliases
     })
               
  }
module.exports = {
name:"slowmode",
code:`
✅ <#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Yazın]
$onlyIf[$message[1]!=;**Kullanım**: {prefix}slowmode 5]
$slowmode[$channelID;$message[1]s]
$onlyPerms[managechannels;Yetkin Yok Baka!]
$onlyBotPerms[managechannels;\`Kanalları Yönet\` İznim Olmalı] 
`
}
bot.command({
    name: "reroll",
    code: `
$setServerVar[cekilis;undefined]
$editMessage[$message[1];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$messageSlice[1]\` 🎉
   Yapan Kişi: **$userTag[$authorID]**
   Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
   $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$channelID;$message[1];🎉;id];$clientID,;];,]
   $onlyIf[$isNumber[$message[1]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz mesaj ID'si. Bu örneği izleyin:
   \`\`\`
$getServervar[prefix]reroll <mesaj idsi>
   \`\`\`}{color:RED}]
$suppressErrors
   `
   })
module.exports = {
name:"invite-kanal",
code:`
İnvite Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
$setServerVar[invite;$mentionedChannels[1]]
$onlyPerms[admin;Bunun İçin \`Yönet
bot.command({
    name: "çekiliş",
    code: `
$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$messageSlice[1]\` 🎉
   Yapan Kişi: **$userTag[$authorID]**
   Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
   $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödül: \`$messageSlice[1]\` Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$channelID;$getServerVar[cekilis];🎉;id];$clientID,;];,]
   $wait[$message[1]]
   $setTimeout[$message[1];Kazanan: <@$randomText[$joinSplitText[;]]>
kanal: $channelID
emoji: 🎉
ödül: $messageSlice[1]
yapan: $userTag[$authorID]]
   $setServerVar[cekilis;$sendMessage[{title: Çekilişe Katılmak için  🎉 Emojisine Tıkla !.}{description: 🎉 Ödül: \`$messageSlice[1]\` 🎉
   Yapan Kişi: **$userTag[$authorID]**
   Süre: **$message[1]**}{timestamp}{color:RED}{reactions:🎉};yes]]
   $onlyIf[$messageSlice[1]!=;{title:Argümanlar Aranıyor}{description:Çekiliş için herhangi bir ödül koymadınız Bu Formatı Takip Edin: 
   \`\`\`
   - $getServerVar[prefix]çekiliş <süre> <ödül>.\`\`\`
   \`<> Yazmayın \`
   }{color:ORANGE}]
   $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];s;];m;];h;];d;]]!=false;{title: Yanlış Kullanım}{description:Yeni girdiğiniz saat biçimi geçersiz.}{color:RED}]
   $onlyIf[$message[2]!=;{title: Yanlış Kullanım}{description:Bir çekiliş sebebi belirtmediniz Bu örneği izleyin:
    \`\`\`
    $getServerVar[prefix]çekiliş <süre> <sebep>
    \`\`\`}{color:RED}]
   $onlyPerms[admin;{title:Yetkin Yok}{description:Senin \`YÖNETİCİ\` Yetkin Yok.}{color:RED}]
$suppressErrors`
   })
bot.timeoutCommand({
    channel:"$timeoutData[kanal]",
    code:`$editMessage[$getServerVar[cekilis];{title:Çekiliş Bitti 🎉}{description:Ödül: \`$timeoutData[ödül]\` 🎉
   Yapan Kişi: **$timeoutData[yapan]**
   Kazanan: $replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;hiçbiri, yeterli katılımcı yoktu.];false;<@$randomText[$joinSplitText[;]]>.]}{color:RANDOM}{footer: Çekiliş Sona Erdi.:$authorAvatar}]
   $channelSendMessage[$channelID;$replaceText[$replaceText[$checkCondition[$getTextSplitLength==1];true;Yeterli katılımcı yoktu.];false;Ödül: \`$timeoutData[ödül]\` Kazanan: <@$randomText[$joinSplitText[;]]>, Tebrikler!]]
$removeSplitTextElement[$findTextSplitIndex[$clientID]]
$textSplit[$replaceText[$getReactions[$timeoutData[kanal];$getServerVar[cekilis];$timeoutData[emoji];id];$clientID,;];,]
$suppressErrors`
})
bot.command({
name:"küfür-engel",
code:`
$if[$message[1]==aç]
✔️ Küfür Engel Açıldı
$setServerVar[kengel;açık]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[kengel]!=açık;Bu Zaten Açık]
$endif
$if[$message[1]==kapat]
✔️Küfür Engel Kapatıldı
$setServerVar[kengel;kapalı]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[kengel]!=kapalı;Bu Zaten Kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]!=false;Lütfen **aç** veya **kapat** yaz]
`})
bot.command({
name:"$alwaysExecute",
code:`
$title[Sus Be Terbiyesiz]
$description[<@$authorID> Bu Sunucuda Küfür Engel Açık]
$deletecommand
$onlyIf[$checkContains[$toLowercase[$message];amk;aq;orosbu;ananı;sikim;sg;siktir;pezeveng;amcık;siqerim;sikerim]==true;]
$onlyIf[$hasPerms[$authorID;admin]!=true;]
$onlyIf[$getServerVar[kengel]!=kapalı;]
`
})
bot.command({
  name:"$alwaysExecute",
  aliases:['<@!$clientID>', '<@$clientID>'],
  code:`$deleteIn[8s]
$title[Sanırım Beni Etiketledin]
$description[**Merhaba ben $userTag[$clientID].**
:kullanc: Prefixim : $getServerVar[prefix],
:kullanc: Yardım Komutum : $getServerVar[prefix]yardım,
:kullanc: İstatistik : $getServerVar[prefix]i,
:kullanc: Sahibim : <@$botOwnerID> 

**Bot Linkleri**
:lvl: [Destek Sunucusu](DESTEK SUNUCUSUNUN LİNKİ)
:lvl: [Botu Davet Et\\]($getBotInvite)]
$footer[$userTag[$clientID];$userAvatar[$clientID]]
$color[RANDOM]
$onlyIf[$checkContains[$toLowercase[$message;<@$clientID>;<@!$clientID>]]==true;]`,
  nonPrefixed: true
})
bot.readyCommand({
name:"BotHazırKomutu",
code:`
$log[Bot Başarıyla Açıldı]
$wait[1s]
$log[database hazır]
$wait[1s]
$log[database hazırlanıyor]
$log[veriler yüklendi]
$wait[1s]
$log[veriler yükleniyor]
`
})
bot.command({
name:"saas-aç",
code:`
<a:tik2:713082245543493712> **Sa-As Sistemi Açıldı Sa Yazıldığında Cevap Vereceğim** <a:tik2:713082245543493712>
$setServerVar[saas;açık]
$onlyPerms[admin;❌ Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[saas]!=açık;⚠ Bu Sistem Zaten Açık]
`
})
bot.command({
name:"dm-duyuru",
code:`
Dm Açık Olan Herkese Duyurunuz İletiliyor $customEmoji[yukleniyo]

$forEachMember[dmduyuru]
$onlyPerms[admin;Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$message!=;Bir Duyuru Mesajı Gir]
`})
bot.awaitedCommand({
name:"dmduyuru",
code:`
$dm[$authorID]
$title[Selam Bir Duyuru Var]
$description[Duyurunun Yapıldığı Sunucu: \`$serverName[$guildID]\`

Duyuru: **$message**]
$color[FFFFFF]
$footer[Mixden Duyuru Sistemi]
$suppressErrors
`
})
bot.command({
name:"saas-kapat",
code:`
<a:tik2:713082245543493712> **Sa-As Sistemi Kapatıldı Sa Dendiğinde Cevap Vermiyeceğim** <a:tik2:713082245543493712>
$setServerVar[saas;kapalı]
$onlyPerms[admin;❌ Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[saas]!=kapalı;⚠ Bu Sistem Zaten Kapalı]
`
})
bot.command({
name:"sa",
aliases: ["sea","selamun aleyküm"],
code:`
$reply[$messageID;**Aleyküm Selam Hoşgeldin** <@$authorID> $customEmoji[hosgeldiniz];yes]
$onlyIf[$message==;]
`,
nonPrefixed: true
})   

bot.command({
name:"$alwaysExecute",
code:`
$title[No No No]
$description[<@$authorID> Link Atmamalısın]
$deletecommand
$onlyIf[$checkContains[$toLowercase[$message];https;http;discord.gg]==true;]
$onlyIf[$isAdmin[$authorID]!=true;]
$onlyIf[$getServerVar[lengel]!=kapalı;]
`
})    

bot.joinCommand({
channel:"$getServerVar[kkanal]",
code:`
<@$authorID>,<@&$getServerVar[yetkili]>
$author[$userTag Hoşgeldin;$authorAvatar]
$description[<@$authorID> Sunucuya katıldı 

Şuan **$membersCount** kişiyiz

Hesabının kurulum tarihi **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$authorID;time];years;Yıl;-1];months;Ay;-1];weeks; Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1] ** önce

Kayıt olmak için <#$getServerVar[kkanal]> kanalına ismini ve yaşını yazabilirsin

Yetkililer seninle ilgilenicektir iyi günler dilerim...]
$footer[;$authorAvatar]
$thumbnail[$authorAvatar]
$color[RANDOM]
$changeNickname[$authorID;Kayıtsız]
$giveRoles[$authorID;$getServerVar[kayıtsız]]
`
})   


bot.emojiDeleteCommand({
channel:"$getServerVar[eklog]",
code:`
$author[Selam;$serverIcon]
$description[$customEmoji[$oldEmoji[name]]

Emoji linki için [tıkla]($oldEmoji[url])]
$footer[;$serverIcon]
$color[RED]
$thumbnail[$serverIcon]
$addEmoji[$oldEmoji[url];$oldEmoji[name]]
$onlyIf[$getServerVar[eklog]!=;]`
})
bot.awaitedCommand({
  name:"onay",
  code:`$author[Mixden Yardım Menüsü;$authorAvatar]
$image[https://media.discordapp.net/attachments/837255566979235900/864783974807502888/standard_1.gif]
$addField[$customEmoji[kafa_sallan_anime2] **Müzik** (\`1\`);\`müzik\`]
$addField[$customEmoji[mavisiren] **Destek** (\`1\`);\`destek\`]
$addField[$customEmoji[dikkatet] **Koruma Komutlarım** (\`2\`);\`emoji-koruma, link-engel\`]
$addField[$customEmoji[giveaway] **Eğlence Komutlarım** (\`8\`);\`howgay, 25miles, palyaço, biden, rte, trump, kaçcm, clyde\`]
$addField[$customEmoji[asker] **Premium Komutlarım** (\`0\`);\`YAKINDA!\`]
$addField[$customEmoji[kirmizi_siren] **Ayarlamalı Komutlarım** (\`9\`);\`hgbb-sistemi, mute-sistemi, ticket-sistemi, kayıt-sistemi, otorol, modlog, saas-aç, saas-kapat, tavsiye-log\`]
$addField[$customEmoji[banned] **Moderasyon Komutlarım** (\`17\`);\`ban, unban, kick, mute, unmute, banlist, herkese-rol-ver, herkesten-rol-al, herkesin-adını-değiştir, nuke, sil, snipe, prefix, hex, otocevap, dm-duyuru, Çekiliş\`]
$addField[$customEmoji[astronaut] **Genel Komutlarım** (\`5\`);\`qr, avatar, sunucu-bilgi, afk, tavsiye, istatistik\`]
$addField[**Toplam Komut** (\`$commandsCount\`);\`Moderasyon | Ayarlamalı | Koruma | Genel | Premium | Eğlence | Destek | Müzik\`]
  $color[$getServerVar[hex]] 
  $thumbnail[$authorAvatar]`
}) 
bot.awaitedCommand({
  name:"parzi",
  code:`
  $giveRoles[$authorID;$mentionedRoles[1]]
  $suppressErrors
  `
  })
bot.command({
    name: 'çal',
    aliases: ['play'],
    code: `$author[Müzik çalınmaya başlandı;$authorAvatar]
$description[Aranan kelime \`$message\`
Bulunan Şarkı : $replaceText[$get[şarkı];;$songInfo[title];-1]
Şarkı Açıklaması : $songInfo[description]
Şarkı uzunluğu : $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Second;Saniye;-1]
Şarkı Linki : [Tıkla]($songInfo[url])
Kanal : [$songInfo[publisher]]($songInfo[publisher_url])
Çalan kişi : $userTag[$authorID]]
$thumbnail[$songInfo[thumbnail]]
$color[303136]
$setServerVar[şarkı;$authorID]
$let[$playSong[$message;...;yes;yes;:x: \`$message\` adında bir müzik bulamadım.]]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$argsCheck[>1;Lütfen bir şarkı adı gir]`
});  
bot.command({
    name: 'sıralama',
    aliases: ['queue'],
    code: `$description[
Şuanda Çalan: [$songInfo[title]]($songInfo[url])
Şarkıyı Açan: <@$songInfo[userID]>
--------------------------------------
**Sıralama:**
$queue[1;15;{number} - {title}]]
$color[303136]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$onlyIf[$queue[1;10;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
$suppressErrors[Şarkı çalmazken kullanamazsın]`
}); 
bot.command({
    name: 'devam',
    aliases: ['resume'],
    code: `
$addCmdReactions[▶]
$resumeSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
}); 
bot.command({
    name: 'tekrarla',
    aliases: ['loop'],
    code: `
$addCmdReactions[🔁]
$let[tekrarla;$loopQueue]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
}); 
bot.command({
    name: 'geç',
    aliases: ['skip'],
    code: `
$addCmdReactions[⏯]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
}); 
bot.command({
    name: 'çık',
    aliases: ['leave'],
    code: `
$addCmdReactions[⏹]
$leaveVC
$onlyIf[$voiceID[$clientID]!=;Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Ses kanalından çıkamadım]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
}); 

bot.command({
    name: 'ses',
    aliases: ['sound'],
    code: `
$addCmdReactions[🔊]
$volume[$message]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyIf[$message<=100;Maximum 100 olarak ayarlanabilir]
$onlyIf[$isNumber[$message]!=false;Bir sayı girmelisin]
$argsCheck[1;Lütfen bir ses seviyesi gir]
$onlyForIDs[$getServerVar[şarkı];Bu komutu sadece şarkıyı başlatan $userTag[$getServerVar[şarkı]] kullanıcısı kullanabilir]`
});
bot.command({
  name:"otocevap",
   code:`
$if[$message[1]==aç]
$channelsendMessage[$channelid;Başarıyla \`\`$splitText[1]\`\` otocevap komudu olarak ayarlandı!Artık herhangi bir kullanıcı \`\`$splittext[1]\`\` yazınca \`\`$splittext[2]\`\` olarak karşılık vereceğim!;no]
$textSplit[$messageSlice[1];|]
$setservervar[otocevap;$getobjectproperty[kurulum] |$splitText[1]|$splitText[2]|]
$addObjectProperty[kurulum;$getServerVar[otocevap]]
$createObject[{}]
$textSplit[$messageSlice[1];|]
$setservervar[otocevapw;0]
$onlyIf[$charCount[$messageSlice[1]]<201;❌ Otocevap komut/cevap karakter limiti en fazla 200 olabilir.]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;❌ Doğru kullanım -> **otocevap aç/kapat komut|komut kullanıldığında verilecek cevap** (Komutun yanına | çizgisini Eklemeyi Unutmayın!)]
$onlyIf[$charCount[$getservervar[otocevap]]<750;❌ Otocevap sınırını doldurmuşsun.]
$elseIf[$message[1]==kapat]
$channelsendMessage[$channelid;\`\`$messageSlice[1]\`\` otocevabı başarıyla kaldırıldı!;no]
$setservervar[otocevapw;0]
$setServerVar[otocevap;$replaceText[$getservervar[otocevap];$getobjectproperty[alım];;-1]]
$addObjectProperty[alım;|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];0]]|$splitText[$sum[$findTextSplitIndex[$messageSlice[1]];1]]|]
$createObject[{}]
$onlyIf[$checkContains[$joinSplitText[];$messageSlice[1]]==true;❌ \`\`$messageslice[1]\`\` adlı bir otocevap komudu bulamadım.]
$textSplit[$getservervar[otocevap];|]
$setservervar[otocevapw;1]
$endelseIf
$endif
$setservervar[otocevapw;1]
$onlyIf[$checkContains[$message[1];aç;kapat]==true;❌ Kullanılabilir ayarlar **aç** ve **kapat**'tır.]
$onlyPerms[manageserver;❌ Bu komudu kullanabilmek için **Sunuyu Yönet** yetkisine sahip olmalısın.]`
})
bot.command({
   name:"$alwaysExecute",
   code:`
$splitText[$sum[$findTextSplitIndex[$message];1]]
$onlyIf[$findTextSplitIndex[$message]!=0;]
$textSplit[$getservervar[otocevap];|]
$onlyIf[$getservervar[otocevap]!=;]
$onlyIf[$getservervar[otocevapw]!=1;]
`,
   nonPrefixed: true
})

bot.awaitedCommand({
  name:"zuzia",
  code:`
  $takeRoles[$authorID;$mentionedRoles[1]]
 
  `
  })

bot.awaitedCommand({
  name:"annen",
  code:`
  $changeNickname[$authorID;$message]
  $suppressErrors
  `
  })
//yea boi .d 
bot.readyCommand({
  channel:"yarra",
  code:`
  $log[MERABALAR TEKRARDAN AKTİFİM -$userTag[$clientID]]
   $log[Hello madıfakı -$userTag[$clientID]]
   $joinVC[856229332468891658]
  `
  })
bot.joinCommand({
channel:"$getServerVar[hgbb]",
code:`$if[$isBot[$authorID]==false]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[hgtxt];-etiket-;<@$authorID>;-1];-isim-;$username;-1];-isimt-;$usertag;-1]
]
$image[$getServerVar[hgbbimage]]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$else
**\`$usertag\` adlı bot sunucuya alındı**
$endif
`
} )
bot.leaveCommand({
channel:"$getServerVar[hgbb]",
code:`$if[$isBot[$authorID]==false]
$description[$replaceText[$replaceText[$replaceText[$getServerVar[bbtxt];-etiket-;<@$authorID>;-1];-isim-;$username;-1];-isimt-;$usertag;-1]]
$image[$getServerVar[hgbbimage]]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
$else
>>> \`$usertag\` adlı bot sunucudan atıldı.
$endif
`
} )
bot.joinCommand({
channel:"$randomChannelID",
code:`
$channelSendMessage[$getServerVar[skanal];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucuya girdi ve \`$membersCount\` kişi olduk. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
    $onlyIf[$getServerVar[skanal]!=;]
    $onlyIf[$getServerVar[s]==açık;]
`
} )

bot.leaveCommand({
  channel: "$randomChannelID",
  code: `   $channelSendMessage[$getServerVar[skanal];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucudan çıktı ve \`$membersCount\` kişi kaldık. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
  
  
  $onlyIf[$getServerVar[skanal]!=;]
    $onlyIf[$getServerVar[s]==açık;]`
})
bot.joinCommand({
channel:"$randomChannelID",
code:`
$giveRole[$authorID;$getServerVar[otorolb]]
$channelSendMessage[$getServerVar[otorolk];{description:>>> \`$usertag\` adlı bot sunucuya girdi ve <@&$getServerVar[otorolb]> rolü verildi.}{color:$getServerVar[hex]}]
$suppressErrors
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getServerVar[otorolb]!=;]
$onlyIf[$getServerVar[otorolk]!=;]
`
} )
bot.joinCommand({
channel:"$randomChannelID",
code:`
$giveRole[$authorID;$getServerVar[otorol]]
$channelSendMessage[$getServerVar[otorolk];{description:>>> \`$usertag\` sunucuya girdi ve <@&$getServerVar[otoroll]> rolü verildi.}{color:$getServerVar[hex]}]
$suppressErrors
$onlyIf[$isBot[$authorID]!=false;]
$onlyIf[$getServerVar[otoroll]!=;]
$onlyIf[$getServerVar[otorolk]!=;]
`
} )
bot.joinCommand({
channel:"$getServerVar[otorolk]",
code:`
$channelSendMessage[$getServerVar[otorolk];{title:Zero Two Sayaç Sistemi!}{description:\`$usertag\` adlı kullanıcı sunucuya girdi ve \`$membersCount\` kişi olduk. \`$getServerVar[sayaç]\` kişi olmamıza \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.}{color:RANDOM}]
    $onlyIf[$getServerVar[otorolk]!=;]
    $onlyIf[$getServerVar[s]==açık;]
`
} )
bot.deletedCommand({
  channel:"$channelID",
  code:`
  $setServerVar[zerotwok;$channelUsed]
  $setServerVar[zerotwo;$message]
  $setServerVar[zerotwokk;$authorID] $setServerVar[zerotwos;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$hours;01s;4;-1];02s;5;-1];03s;6;-1];04s;7;-1];05s;8;-1];06s;9;-1];07s;10;-1];08s;11;-1];09s;12;-1];10s;13;-1];11s;14;-1];12s;15;-1];13s;16;-1];14s;17;-1];15s;18;-1];16s;19;-1];17s;20;-1];18s;21;-1];19s;22;-1];20s;23;-1];21s;00;-1];22s;01;-1];23s;02;-1];00s;03;-1]:$replaceText[$minutes;s;;-1]:$replaceText[$seconds;s;;-1]]
  $suppressErrors`
  })
bot.leaveCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir kullanıcı ayrıldı

> Ayrılan kullanıcı:** <@$authorID> • $userTag • $authorID**]
$footer[;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})
bot.joinCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir kullanıcı katıldı

> Katılan kullanıcı:** <@$authorID> • $userTag • $authorID**]
$footer[;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})
bot.emojiCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newEmoji[name];$newEmoji[url]]
$description[Bir emoji eklendi

> Eklenen emoji: $newEmoji[emoji]

> Emoji id'si: **$newEmoji[id]**

> Emoji linki:** [tıkla]($newEmoji[url]) **]
$footer[;$newEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$newEmoji[url]]
`
})

bot.emojiDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldEmoji[name];$oldEmoji[url]]
$description[Bir emoji silindi

> Emoji ismi: **$oldEmoji[name]**

> Emoji id'si: **$oldEmoji[id]**

> Emoji linki: ** [Tıkla]($oldEmoji[url]) **]
$footer[;$oldEmoji[url]]
$color[$getServerVar[hex]]
$thumbnail[$oldEmoji[url]]
`
})
bot.inviteCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$inviteUserID];$userAvatar[$inviteUserID]]
$description[Bir davet oluşturuldu

> Oluşturan kişi: <@$inviteUserID>

> Davet kodu: **$inviteCode • $inviteURL **]
$footer[;$userAvatar[$inviteUserID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$inviteUserID]]
`
})

bot.inviteDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$inviteUserID];$userAvatar[$inviteUserID]]
$description[Bir davet silindi

> Davet sahibi: <@$inviteUserID>

> Davet kodu: **$inviteCode**]
$footer[;$userAvatar[$inviteUserID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$inviteUserID]]
`
})
bot.banAddCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Bir kişi banlandı

> Banlanan kişi: **$userTag[$authorID] • $authorID**

> Banlanma sebebi: **$getBanReason[$authorID]**]
$footer[;$userAvatar[$authorID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$authorID]]
`
})

bot.banRemoveCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag[$authorID];$userAvatar[$authorID]]
$description[Bir kişinin banı açıldı

> Banı kaldırılan kişi: **$userTag[$authorID] • $authorID**]
$footer[;$userAvatar[$authorID]]
$color[$getServerVar[hex]]
$thumbnail[$userAvatar[$authorID]]
`
})
bot.roleCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newRole[name];$serverIcon]
$description[Bir rol oluşturuldu

> Oluşturulan rol: <@&$newRole[id]> • $newRole[name]

> Rol etiketlenebilirmi: **$replaceText[$replaceText[$newRole[mentionable];true;Evet;-1];false;Hayır;-1]**

> Rol rengi: **$newRole[color]**

> Rol izinleri: **$newRole[permissions]**]
$footer[;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})

bot.roleDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldRole[name];$serverIcon]
$description[Bir rol silindi

> Silinen rol: **$oldRole[name]**

> Rol rengi: **$oldRole[color]**

> Rol izinleri: **$oldRole[permissions]**]
$footer[;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})
bot.channelCreateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$newChannel[name];$serverIcon]
$description[Bir kanal oluşturuldu

> Oluşturulan kanal: <#$newChannel[id]> • $newChannel[name]
]
$footer[;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})

bot.channelDeleteCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$oldChannel[name];$serverIcon]
$description[Bir kanal silindi

> Silinen kanal: **$oldChannel[name]**]
$footer[;$serverIcon]
$color[$getServerVar[hex]]
$thumbnail[$serverIcon]
`
})
bot.updateCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir mesaj düzenlendi

> Düzenlenen mesaj: **$oldmessage**

> Yeni mesaj: **$message**

> Mesaj sahibi: <@$authorID>]
$footer[;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})


bot.deletedCommand({
channel:"$getServerVar[modlog]",
code:`
$author[$userTag;$authorAvatar]
$description[Bir mesaj silindi

> Silinen mesaj: **$message**

> Mesaj sahibi: <@$authorID>]
$footer[;$authorAvatar]
$color[$getServerVar[hex]]
$thumbnail[$authorAvatar]
`
})

bot.command({
  name:"ping",
  code:`
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `
})

bot.status({
    text: ``,
    type: "PLAYING",
    status: "dnd",
    time: 12
})

bot.variables({
  prefix:"md!",
  hgbb:"",
  bbtxt:"-isimt- Tekrar görüşmek üzere bb. ^^",
  hgtxt:"-isimt- Hoş geldin umarım iyi vakit geçirsin. ^^",
  hgbbimage:"",
  şarkı:"",
  hex:"RANDOM",
  mrol:"boş",
  myetkili:"",
  ticket:"0",
  ticketk:"",
  ticketk2:"",
  zerotwok:"",
  zerotwo:"",
  zerotwokk:"",
  zerotwos:"",
  kengel:"kapalı",
  modlog:"",
  skanal:"",
  sayaç:"0",
  s:"kapalı",
  otorolk:"",
  bakım:"no",
  otorolb:"",
  otorol:"",
  eklog:"",
  erol:"",
  krol:"",
  kayıtsız:"",
  yetkili:"",
  kkanal:"",
  cekilis:"undefined",
  otocevap:"",
  otocevapw:"0",
  klog:"",
  lengel:"kapalı",
  afks: "", 
  afk: "hayır", 
  afkss:"", 
  afkmm:"0", 
  afkc: "0", 
  afkkk:"0", 
  afkaa:"Kimse Etiketlememiş",
  saas:"kapalı",
  tlog:""
  })
bot.variables ({
premium:"no",
presayı:"0",
})
