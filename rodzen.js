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
name:"yavaş-mod",
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
name:"$alwaysExecute",
code:`
$onlyIf[$getServerVar[level;$authorID]<=$getServerVar[lvlup;$authorID];{execute:levelup}]
$setServerVar[level;$sum[$getServerVar[level;$authorID];$random[15;30]];$authorID]
$onlyIf[$getServerVar[levelsistem]!=kapalı;]
`
}) 

bot.awaitedCommand({
name:"levelup",
code:`
$author[$userTag;$authorAvatar]
$description[$customEmoji[cekilis] Tebrikler, Seviye Atladın Yeni Seviyen **$getServerVar[analvl;$authorID] !**]
$color[RANDOM]
$thumbnail[$authorAvatar] 

$setServerVar[analvl;$sum[$getServerVar[analvl;$authorID];1];$authorID]
$setServerVar[lvlup;$math[$getServerVar[lvlup;$authorID]*2];$authorID]
`
}) 
bot.command({
name:"level-sistemi",
code:`
$if[$message[1]==aç]
$customEmoji[yesiltik] Level Sistemi Açıldı
$setServerVar[levelsistem;açık]
$onlyPerms[admin;$customEmoji[dikkatet] Bunun İçin \`Yönetici\` İznin Olmalı]
$endif
$if[$message[1]==kapat]
$customEmoji[yesiltik] Level sistemi Kapatıldı
$setServerVar[levelsistem;kapalı]
$onlyPerms[admin;$customEmoji[dikkatet] Bunun İçin \`Yönetici\` İznin Olmalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]!=false;Lütfen **aç** veya **kapat** yaz]
`})    

bot.command({
name:"rank",
aliases:"level",
code:`
$author[$userTag[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
$description[$customEmoji[zil2] **$userTag[$mentioned[1;yes]]** Adlı Kullanıcının Seviyesi **$getServerVar[analvl;$authorID]**]
$color[RANDOM]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
`
})
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
bot.leaveCommand({
channel:"$getServerVar[invite]",
code:`
$title[Mixden İnvite Sistemi]
$description[ **\`$username\` Sunucumuzdan Ayrıldı
Onu Davet Eden: \`$username[$userInfo[inviter]]\`
Kalan Toplam Daveti: \`$userInfo[real;$userInfo[inviter]]\` 
Şuanda \`$membersCount\` Kişiyiz!**]
$footer[Mixden İnvite Sistemi;$serverIcon]
$thumbnail[$authorAvatar]
$suppressErrors[$username Sunucudan Çıktı Kullanıcıyı Kimin Davet Ettiğini Bulamadım]
$suppressErrors`
})
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
bot.joinCommand({
channel:"$getServerVar[invite]",
code:`
$title[Mixden İnvite Sistemi]
$description[**\`$username\` Sunucumuza Katıldı
Onu Davet Eden: \`$username[$userInfo[inviter]]\`
Toplam Davet Sayısı: \`$userInfo[real;$userInfo[inviter]]\` 
Şuanda \`$membersCount\` Kişiyiz!**]
$footer[Mixden İnvite Sistemi;$serverIcon]
$thumbnail[$authorAvatar]
$suppressErrors
`
})  
bot.command({
  name:"kişilik",
  bkz:["Kahraman yada kötü bir adam olmanın ilk adımı"],
  code:`
  $reactionCollector[$splitText[1];$authorID;1m;🦸‍♂️,🦹‍♂️;kahraman,kötü;yes]
  $textSplit[$sendMessage[{title:$username[$clientID] Kişilik Seçme}{thumbnail:$userAvatar[$clientID]}{description:
Hem iyi hemde kötü olmak zor bir iştir.
Hem katil yada hem iyilik yapan bir adam / kadın olamazsın.
Tek bir safta yer alabilirsin.
Sen nereyi tercih edeceksin ?
Kötü bir adam olup kahramanları yokedip bu sefil dünyayı mı yönetmek istersin
Yada böyle kötüleri haklayıp adalet dağıtan bir kahraman mı ?
Seçimini asla değiştiremezsin $username
🦸‍♂️= Kahraman
🦹‍= Kötü Adam}
{color:BLUE};yes]]
   
  $onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;]
  $onlyIf[$guildID!=;]
  `
})
bot.awaitedCommand({
  name:"kahraman",
  code:`
  $channelSendMessage[$channelID;Kötüleri haklamakta bol şans dostum...{delete:5s}]
  $wait[1s]
  $botTyping
  $channelSendMessage[$channelID;Demek kahraman olmayı seçtin...{delete:6s}]
  $clearReactions[$channelID;$message[1];all]
  $setGlobalUserVar[kişilik;kahraman;$authorID]  
  $suppressErrors
  $deleteMessage[$channelID;$message[1]]
  $sendDM[$authorID;{color:GREEN}{author:Rozet Kazanıldı.:$authorAvatar}
  {description:Kazanılan Rozet - :man_superhero:
  
  *Rozet Açıklaması = **Sende bir kahraman olabilirsin...***}]
$setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]kahraman/;$authorID]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;Çakal 1 kişilik alabilirsin]
  `
}) 
bot.awaitedCommand({
  name:"kötü",
  code:`
$channelSendMessage[$channelID;Dünyayı ele geçirmede bol şans.{delete:5s}]
  $wait[1s]
  $botTyping
  $channelSendMessage[$channelID;Kahramanları yokedip...{delete:6s}]
  $clearReactions[$channelID;$message[1];all]
  $suppressErrors
  $setGlobalUserVar[kişilik;kötü;$authorID]  
    $deleteMessage[$channelID;$message[1]]
 $sendDM[$authorID;{color:RED}{author:Rozet Kazanıldı.:$authorAvatar}
  {description:Kazanılan Rozet - :man_supervillain:
  
  *Rozet Açıklaması = **Dünya sahtekar ve buna ayak uydurman gerekiyor***}]
  $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]kötü/;$authorID]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==yok;Çakal 1 kişilik alabilirsin]
  `
})
bot.command({
  name:"market",
  bkz:["Marketten güzel şeyler alabilirsin"],
  aliases:["shop"],
  code:`
  $reactionCollector[$splitText[1];$authorID;2m;1️⃣,2️⃣,3️⃣;one,two,three;yes]
  $textSplit[$sendMessage[{author:Mixden - Market:$authorAvatar}
  {color:GREEN}
  {image:https://cdn.discordapp.com/attachments/858277684185661501/858938697452748820/duke.gif}
  {description:DUKE : Ne Almak İstersiniz};yes]`  
})
bot.awaitedCommand({
  name:"one",
  code:`
  $editMessage[$message[1];{author:Mixden - Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  $customEmoji[kilit] Padlock: Bunu Alarak Bankanı Süresiz Olarak Koruyabilirsin : Fiyatı \`5000\` | Kod: **1**
  $customEmoji[roket_gif]Banka Kapasitesi: Bunun alarak banka kapasitenizi yükseltebilirsiniz: Fiyatı \`5000\` | Kod: **2**
  🔪 Bıçak: Kendini sokaktaki hırsızlardan korumak için alman gereklidir. : Fiyatı: \`50\` | Kod: **3**
  
  $customEmoji[KarMaskesi]Kar Maskesi: Yüzünü gizlemek için lazım olabilir. : Fiyatı: \`50\` | Kod: **4**
  $customEmoji[wumpus_klavye] Bilgisayar: İşlerini yapmakta yardımcı olabilir. : Fiyatı: \`10000\` | Kod: **5**
  💰 Çuval: Belki içine birşey koyarsın zamanında. : Fiyatı: \`15\` | Kod: **6**
  $customEmoji[bronzyzk]Gümüş Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`3000\` | Kod: **7**
  $customEmoji[goldyzk]Altın Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`8000\` | Kod: **8**
  :ring: Elmas Yüzük: Birine evlilik teklifi etmek istersin ? : Fiyatı: \`15000\` | Kod: **9**
 
 $customEmoji[asker]Koruma: Sokaktaki kötü hırsızlardan korumak için alabilirsin belki : Fiyatı: \`10000\` (24 Saatliktir) | Kod: **10**
 $customEmoji[halats]Halat: Kahramanların işine yarayabilir : Fiyatı: \`50\` | Kod: **11**
  }{footer:Sayfa 1/3 | Satın Almak İçin $getServerVar[prefix]satınal <item kodu>:$authorAvatar}]
`})
bot.awaitedCommand({
  name:"two",
  code:`
  $editMessage[$message[1];{author:Mixden - Avatar Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  Avatar 1: <:avatar1:860093837014597632> | Fiyat: **2500** | Kod: **a1**
  Avatar 1: <:avatar2:860093885493149706> | Fiyat: **2500** | Kod: **a2**
  Avatar 1: <:avatar3:860093925645221898> | Fiyat: **2500** | Kod: **a3**
  Avatar 1: <:avatar4:860093961062318111> | Fiyat: **2500** | Kod: **a4**
  Avatar 1: <:avatar5:860093988894670868> | Fiyat: **2500** | Kod: **a5**
  }
{footer:Sayfa 2/3 | Satın Almak İçin $getServerVar[prefix]Satınal <item kodu>:$authorAvatar}]
`})
bot.awaitedCommand({
  name:"three",
  code:`
  $editMessage[$message[1];{author:Mixden Boost - Market:$authorAvatar}  {color:GREEN}
  {description:DUKE : Ne Almak İstersiniz
  **3 Saatlik 2x Kazanç** : 10 Mücevher 💎 | Kod: **m1**
  **1 Haftalık Koruma** : 5 Mücevher 💎 | Kod: **m2**
  
  }
{footer:Sayfa 3/3 | Satın Almak İçin $getServerVar[prefix]satınal <item kodu>:$authorAvatar}]
`})
//MARKET SİSTEMİ

//PROFİL SİSTEMİ
bot.command({
  name:"profil",
  bkz:["Profilinize Bakabilirsiniz"],
  code:`
  $reactionCollector[$splitText[1];$authorID;2m;1️⃣,2️⃣,3️⃣,4️⃣;bir,iki,üç,dört;yes]
  $textSplit[$sendMessage[{footer:Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Profili:$userAvatar[$mentioned[1]]}
  {description:$if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]==]
    *Maalesef rozetin hiç yok.İlk rozetini mkişilik yazarak alabilirsin !*
    $endif
    $if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]!=]
    **Sahip Olunan Rozetler =** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rozetler;$mentioned[1;yes]];/; ];kahraman;:man_superhero:];kötü;:man_supervillain:];evilhero;:persevere:];ilk;:smiling_imp:];one;:slight_smile:];two;:confused:];old;☠️];developer;<:mdeveloper:859177958912163860>];hacker;🎩];sosyal;👥];bug;<:mbug:859788254794350622>];star;⭐]
    $endif
    **Senin Hakkında Bilgiler (IC)**
    $if[$getGlobalUserVar[durum;$mentioned[1;yes]]==kötü] \`Lakap: Kötü Kahraman\` $endif
    *İsmin:* **$replaceText[$getGlobalUserVar[isim;$mentioned[1;yes]];yok;Belirtilmemiş]**
    *Yaşın:* **$replaceText[$getGlobalUserVar[yaş;$mentioned[1;yes]];yok;Belirtilmemiş]**
    *Cinsiyet:* **$replaceText[$replaceText[$replaceText[$getGlobalUserVar[cinsiyet;$mentioned[1;yes]];yok;Belirtilmemiş];erkek;Erkek :man:];kadın;Kadın :woman:]**
    
    *Aranma:* $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[aranma;$mentioned[1;yes]];yok;<:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];biraz;<:Doluyildiz:878899053943996426><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];orta;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];çok;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426>];fazla;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426>]
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[birlik;$mentioned[1;yes]]==yok];true;];false;*Birliğin:* **$getGlobalUserVar[birlik;$mentioned[1;yes]]**]
    *Seviye Bilgi:* **$getGlobalUserVar[seviye;$mentioned[1;yes]] |  $getGlobalUserVar[spuan;$mentioned[1;yes]]/$getGlobalUserVar[skpuan;$mentioned[1;yes]]** 
    *Paran:* **$truncate[$getGlobalUserVar[coin;$mentioned[1;yes]]]** | *Bankadaki Paran:* **$truncate[$getGlobalUserVar[bcoin;$mentioned[1;yes]]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]**
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[evlilik;$mentioned[1;yes]]==];true;];false;*Evlilik: $replaceText[$replaceText[$replaceText[$splitText[1];-1-;<:meyuzuk:860824583330332752>];-2-;<:mayuzuk:860824915551453215>];-3-;<:mgyuzuk:860824533405401108>] $userTag[$splitText[2]]*]
    *Mücevherin:* **$getGlobalUserVar[gem;$mentioned[1;yes]]** 💎
    *Kahraman Puanın:* **$getGlobalUserVar[kpuan;$mentioned[1;yes]]**
    \`Kötülük Puanın: $getGlobalUserVar[kapuan;$mentioned[1;yes]]\`
    *Hackerlik Bilgisi:* **$getGlobalUserVar[hackerlik;$mentioned[1;yes]]**
    
  }
  ;yes]
  $textSplit[$getGlobalUserVar[evlilik;$mentioned[1;yes]];/]
`  
})
bot.awaitedCommand({
  name:"bir",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 1/4 | Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin IC Bilgileri:$userAvatar[$mentioned[1]]}
{description:$if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]==]
  *Maalesef rozetin hiç yok.İlk rozetini $getServerVar[prefix]Kişilik yazarak alabilirsin !*
  $endif
  $if[$getGlobalUserVar[rozetler;$mentioned[1;yes]]!=]
  **Sahip Olunan Rozetler =** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[rozetler;$mentioned[1;yes]];/; ];kahraman;<:mkahraman:857623416071913482>];kötü;<:mkotu:857623904733626398>];evilhero;:persevere:];ilk;:smiling_imp:];one;:slight_smile:];two;:confused:];old;☠️];developer;<:mdeveloper:859177958912163860>];hacker;🎩];sosyal;👥];bug;<:mbug:859788254794350622>];star;⭐]
  $endif
  **Senin Hakkında Bilgiler (IC)**
  
  *İsmin:* **$replaceText[$getGlobalUserVar[isim;$mentioned[1;yes]];yok;Belirtilmemiş]**
  *Yaşın:* **$replaceText[$getGlobalUserVar[yaş;$mentioned[1;yes]];yok;Belirtilmemiş]**
  *Cinsiyet:* **$replaceText[$replaceText[$replaceText[$getGlobalUserVar[cinsiyet;$mentioned[1;yes]];yok;Belirtilmemiş];erkek;Erkek :man:];kadın;Kadın :woman:]**
  
  *Aranma:* $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[aranma;$mentioned[1;yes]];yok;<:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];biraz;<:Doluyildiz:878899053943996426><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];orta;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Bosyildiz:878895639038136341><:Bosyildiz:878895639038136341>];çok;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Bosyildiz:878895639038136341>];fazla;<:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426><:Doluyildiz:878899053943996426>]
    $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[birlik;$mentioned[1;yes]]==yok];true;];false;*Birliğin:* **$getGlobalUserVar[birlik;$mentioned[1;yes]]**]
  *Seviye Bilgi:* **$getGlobalUserVar[seviye;$mentioned[1;yes]] |  $getGlobalUserVar[spuan;$mentioned[1;yes]]/$getGlobalUserVar[skpuan;$mentioned[1;yes]]** 
  *Paran:* **$truncate[$getGlobalUserVar[coin;$mentioned[1;yes]]]** | *Bankadaki Paran:* **$truncate[$getGlobalUserVar[bcoin;$mentioned[1;yes]]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]**
  $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[evlilik;$mentioned[1;yes]]==];true;];false;*Evlilik: $replaceText[$replaceText[$replaceText[$splitText[1];-1-;<:meyuzuk:860824583330332752>];-2-;<:mayuzuk:860824915551453215>];-3-;<:mgyuzuk:860824533405401108>] $userTag[$splitText[2]]*]
  *Kahraman Puanın:* **$getGlobalUserVar[kpuan;$mentioned[1;yes]]**
  \`Kötülük Puanın: $getGlobalUserVar[kapuan;$mentioned[1;yes]]\`
  *Hackerlik Bilgisi:* **$getGlobalUserVar[hackerlik;$mentioned[1;yes]]**}
]
$textSplit[$getGlobalUserVar[evlilik;$mentioned[1;yes]];/]
`})
bot.awaitedCommand({
  name:"iki",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 2/4 | Sorgulayan $username:$authorAvatar}{thumbnail:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin OOC Bilgileri:$userAvatar[$mentioned[1]]}
  {description:    **Senin Hakkında Bilgiler (OOC)**
  
    *Discord İsmin:* **$username[$mentioned[1;yes]]**
    *Discord Etiketin:* **#$discriminator[$mentioned[1;yes]]**
    *Discord Kimliğin (ID):* **$mentioned[1;yes]**
]
`})
bot.awaitedCommand({
  name:"üç",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 3/4 | Sorgulayan $username:$authorAvatar}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Envanteri:$userAvatar[$mentioned[1]]}
  {description:
    $if[$getGlobalUserVar[bıçak;$mentioned[1;yes]]$getGlobalUserVar[pc;$mentioned[1;yes]]$getGlobalUserVar[maske;$mentioned[1;yes]]$getGlobalUserVar[padlock;$mentioned[1;yes]]==yokyokyokyok]
*Kişinin envanteri boş*
$endif  
$replaceText[$replaceText[$getGlobalUserVar[padlock;$mentioned[1;yes]];yok;];var;🔒 Padlock]
$replaceText[$replaceText[$getGlobalUserVar[pc;$mentioned[1;yes]];yok;];var;💻 Bilgisayar]
$replaceText[$replaceText[$getGlobalUserVar[halat;$mentioned[1;yes]];yok;];var;<:mhalat:862023703676321822> Halat]
$replaceText[$replaceText[$getGlobalUserVar[maske;$mentioned[1;yes]];yok;];var;<:mkarmaskesi:860079981392035851> Kar Maskesi]
$replaceText[$replaceText[$replaceText[$getGlobalUserVar[eldiven;$mentioned[1;yes]];yok;];giydi;🧤 Eldiven];var;🧤 Eldiven]
$replaceText[$replaceText[$getGlobalUserVar[çuval;$mentioned[1;yes]];yok;];var;💰 Çuval]
$replaceText[$replaceText[$getGlobalUserVar[bıçak;$mentioned[1;yes]];yok;];var;🔪 Bıçak]
$replaceText[$replaceText[$getGlobalUserVar[silah;$mentioned[1;yes]];yok;];var;<:msilah:860076464169680897> Desert Eagle]
$replaceText[$replaceText[$getGlobalUserVar[taramalı;$mentioned[1;yes]];yok;];var;<:mak47:860190567610449951> AK-47]
$replaceText[$replaceText[$getGlobalUserVar[1;$mentioned[1;yes]];yok;];var;<:meyuzuk:860824583330332752> Elmas Yüzük]
$replaceText[$replaceText[$getGlobalUserVar[2;$mentioned[1;yes]];yok;];var;<:mayuzuk:860824915551453215> Altın Yüzük]
$replaceText[$replaceText[$getGlobalUserVar[3;$mentioned[1;yes]];yok;];var;<:mgyuzuk:860824533405401108> Gümüş Yüzük]
  }
]
`})
bot.awaitedCommand({
  name:"dört",
  code:`
  $editMessage[$message[1];
  {footer:Sayfa 4/4 | Sorgulayan $username:$authorAvatar}
  {image:$getGlobalUserVar[avatar;$mentioned[1;yes]]}
  {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$mentioned[1;yes]];kahraman;GREEN];kötü;#bd0303];yok;BLACK]}
  {author:$username[$mentioned[1;yes]] Kişisinin Avatarı (boş ise eklememiştir):$userAvatar[$mentioned[1]]}
]
`})
bot.command({
  name:"soygun",
  bkz:["Etiketlediğin kişiyi soyabilirsin. Eğer kişi aktif ise üstündeki parayı eğer değilse bankasındaki parayı soyacaksın"],
  code:`
  $if[$status[$mentioned[1]]==offline]
    $if[$getGlobalUserVar[kişilik;$authorID]==kahraman]
    $sendDM[$author;Arada Kahraman olduğunu unutma ?]
    $endif
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[bcoin;$authorID];$get[random2]];$authorID]
    $wait[1ms]
    $setGlobalUserVar[bcoin;$sub[$getGlobalUserVar[bcoin;$mentioned[1]];$get[random2]];$mentioned[1]]
    $wait[1ms]
    $sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden \`$get[random2]\` Miktarı çalındı.;no]
    $deletecommand
    $suppressErrors
    $let[random2;$truncate[$divide[$random[1;$getGlobalUserVar[bcoin;$mentioned[1]]];3]]]
    $onlyIf[$checkCondition[$getGlobalUserVar[bcoin;$mentioned[1]]<1]!=true;Bu kişi fakir onunla uğraşma boşver.]  
    $onlyIf[$getGlobalUserVar[padlock;$mentioned[1]]!=var;Kişinin Banka Sisteminde PadLock bulunmaktadır.]
    
    $endif
  
    $if[$status[$mentioned[1]]!=offline]
    $if[$getGlobalUserVar[koruma;$mentioned[1]]==var]
$if[$getGlobalUserVar[coin;$authorID]>10]
$setGlobalUserVar[coin;0;$authorID]
$wait[1ms]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1]];$get[apara]];$mentioned[1]]
$endif
$if[$getGlobalUserVar[coin;$authorID]>10]
$editMessage[$get[mesaj];$userTag[$mentioned[1]]: Tamam gidelim]
$wait[2s]
$editMessage[$get[mesaj];Arkandan bir <:mgardiyan:861319500585369640> koruma gelip senin cüzdanındaki paraları aldı]
$wait[2s]
$endif
$wait[1s]
$if[$getGlobalUserVar[coin;$authorID]<10]
$editMessage[$get[mesaj];$userTag[$mentioned[1]]: Tamam bırakalım fakiri bidaha çalmaz enayi]
$wait[2s]
$editMessage[$get[mesaj];Gardiyan: Efendim bu fakir]
$wait[2s]
$editMessage[$get[mesaj];Arkandan bir <:mgardiyan:861319500585369640> koruma gelip cüzdanını inceledi]
$endif
$wait[2s]
$editMessage[$get[mesaj];$userTag[$mentioned[1]] sana dönüp gülmeye başladı]
$wait[2s]
$editMessage[$get[mesaj];Yüzüstü yere düştün]
$wait[2s]
$editMessage[$get[mesaj];Tam yaklaşırken birden arkandan silahla vuruldun]
$wait[2s]
$let[mesaj;$sendMessage[$userTag[$mentioned[1]] Kişisinin arka cebindeki cüzdana göz koydun.;yes]]
$if[$getGlobalUserVar[coin;$authorID]>10]
$let[apara;$truncate[$divide[$get[para];3]]]
$let[para;$getGlobalUserVar[coin;$authorID]]
$endif
$endif
$if[$getGlobalUserVar[koruma;$mentioned[1]]==yok]
  $if[$getGlobalUserVar[savun;$mentioned[1]]==yok]
  $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[random]];$authorID]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$mentioned[1]];$get[random]];$mentioned[1]]
  $editMessage[$get[mesaj];Kişinin savunmak için eşyası olmadığı için \`$get[random]\` çalınmıştır]
  $wait[1s]
  $let[mesaj;$sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden para çalınıyor.;yes]]
  $endif
  $if[$getGlobalUserVar[savun;$mentioned[1]]==var]
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$get[random]];$authorID]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$mentioned[1]];$get[random]];$mentioned[1]]
  $editMessage[$get[mesaj];Kişi savunmadığı için \`$get[random]\` çalınmıştır]
  $wait[1s]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 1 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 2 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 3 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 4 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $if[$getGlobalUserVar[savun2;$mentioned[1]]==yok]
  $editMessage[$get[mesaj];Çalınmasından kurtulmak için 5 saniye için kişi savun yazmalıdır]
  $wait[1s]
  $onlyIf[$getGlobalUserVar[savun2;$mentioned[1]]!=var;]
  $endif
  $awaitMessages[$mentioned[1];6s;savun;savun;]
  $let[mesaj;$sendMessage[\`$userTag[$mentioned[1]]\`Kişisinden para çalınıyor.;yes]]
  $setGlobalUserVar[hırsız;$authorID;$mentioned[1]]
  $endif
  $suppressErrors
  $let[random;$truncate[$divide[$random[1;$getGlobalUserVar[coin;$mentioned[1]]];3]]]
  $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$mentioned[1]]<1]!=true;Adam fakir usta soyma bi zahmet]  
  $endif
    $endif
  $deletecommand
$globalCooldown[2h;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[2h;globalUser;soygun;$authorID];s;];hour;Saat];minute;Dakika];econd;Saniye];and;]** sonra deneyebilirsiniz]
    $onlyIf[$isBot[$mentioned[1]]!=true;Bot'u niye soymaya çalışırsın ki ?]
  $onlyIf[$mentioned[1]!=$authorID;Deneme bence]
    $onlyIf[$mentioned[1]!=;Kimi soyacaksan onu etiketlemelisin]
    $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
  `
})
bot.awaitedCommand({
  name: "savun",
  code: `
  $setGlobalUserVar[savun2;yok;$authorID]
  $setGlobalUserVar[hırsız;;$authorID]
  $wait[10s]
  $sendMessage[Paranı başarıyla savundun $username.
  Seni soyan kişi para cezası olarak -2500 parasından eksildi;no]
  $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$getGlobalUserVar[hırsız;$authorID]]
  $setGlobalUserVar[savun2;var;$authorID]
`
})
bot.command({
  name: "satınal",
  code: `
$setGlobalUserVar[koruma;var;$authorID]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];10000];$authorID]
$sendMessage[\`24 Saatlik\` Korumanız başladı.
Bittiğinde bu kanala bildirim gelecektir.;no]
$setTimeout[24h;kid: $authorID
mesaj: <@$authorID> korumanız bitti. Tekrar almak için \`msatınal 10\` yazabilirsiniz.
kanal: $channelID]
$onlyIf[$checkCondition[9999>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinde \`10000\` Para yok]
$onlyIf[$getGlobalUserVar[koruma;$authorID]!=var;Zaten korunma almışsınız !]
$onlyIf[$message==10;]`
});
bot.timeoutCommand({
code: `
$setGlobalUserVar[koruma;yok;$timeoutData[kid]]
$channelSendMessage[$timeoutData[kanal];<@$timeoutData[kid]>
{color:RED}{author:Koruma gitti:$authorAvatar}
{description:$timeoutData[mesaj]}
{footer:Koruma Bitti !:$authorAvatar};no]
  `
});
bot.command({
  name:"evlilik",
  aliases:["evlen"],
  bkz:["Başkasıyla aşk yaşayabilirsin"],
  code:`
<@$mentioned[1]> sana <@$authorID>'den evlenme teklifi geldi. $replaceText[$replaceText[$replaceText[-$message[2]-;-1-;$customEmoji[meyuzuk;856156367891070976]];-2-;$customEmoji[mayuzuk;856156367891070976]];-3-;$customEmoji[mgyuzuk;856156367891070976]]
1 dakika içinde cevap vermelisin.
*kabul* , *reddet*
$attachment[$replaceText[https://api.cool-img-api.ml/ship?user=$authorAvatar&user2=$userAvatar[$mentioned[1]];webp;png]]
$awaitMessages[$mentioned[1];1m;kabul,reddet;kabul,reddet;*Maalesef evlilik teklifin reddedili <@$authorID> :(*.]
$onlyIf[$getGlobalUserVar[$message[2];$authorID]!=yok;Bu yüzük sende yok !]
$onlyIf[$checkCondition[$message[2]==1]$checkCondition[$message[2]==2]$checkCondition[$message[2]==3]!=falsefalsefalse;Yüzük Numarası 1,2 yada 3 olmalıdır.]
$onlyIf[$message[2]!=;Yüzük Numarasını gir]
$setGlobalUserVar[evlilik;$message[2]/$authorID;$mentioned[1]]
$onlyIf[$mentioned[1]!=$authorID;Kendine evlilik teklifi edemezsin]
$onlyIf[$isBot[$mentioned[1]]!=true;Bota evlilik teklifi edemezsin]
$onlyIf[$mentioned[1]!=;Birini etiketlermisin ?]
$onlyIf[$getGlobalUserVar[evlilik;$authorID]==;Başkasıyla evlisin !]
$onlyIf[$getGlobalUserVar[evlilik;$mentioned[1]]==;Kişi başkasıyla evlisin !]
`
})
bot.awaitedCommand({
    name: "kabul",
    code: `
$setGlobalUserVar[$get[yüzük];yok;$splitText[2]]
$wait[500ms]
$setGlobalUserVar[evlilik;-$get[yüzük]-/$splitText[2];$authorID]
$setGlobalUserVar[evlilik;-$get[yüzük]-/$authorID;$splitText[2]]
Evliliğiniz hayırlı olsun...
$attachment[$replaceText[https://api.cool-img-api.ml/ship?user=$authorAvatar&user2=$userAvatar[$splitText[2]];webp;png]]
$wait[500ms]
$let[yüzük;$splitText[1]]
$textSplit[$getGlobalUserVar[evlilik;$authorID];/]
    `
})
bot.awaitedCommand({
    name: "reddet",
    code: `
$setGlobalUserVar[$get[yüzük];yok;$splitText[2]]
$wait[500ms]
Üzgünüm <@$splitText[2]> reddedildin... 💔
$textSplit[$getGlobalUserVar[evlilik;$authorID];/]
    `
})
bot.command({
  name:"boşan",
  bkz:["Sevmediğin kişiyle evlendiysen boşanabilirsin"],
  code:`
  $setGlobalUserVar[evlilik;;$authorID]
  $wait[500ms]
  $setGlobalUserVar[evlilik;;$splitText[2]]
Bu evlilik buraya kadarmış...
$userTag[$splitText[2]] Kişisinden boşandın.
$textSplit[$getGlobalUserVar[evlilik;$authorID];/]
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
$addField[$customEmoji[mavisiren] **Destek** (\`1\`);\`destek\`] 
$addField[$customEmoji[kafa_sallan_anime2] **Müzik Komutları** (\`8\`);\`müzik, play, sıralama, resume, loop, skip, leave, sound\`]
$addField[$customEmoji[dikkatet] **Koruma Komutlarım** (\`3\`);\`emoji-koruma, link-engel, küfür-engel\`]
$addField[$customEmoji[paracklarr] **Ekonomi Komutlarım** (\`24\`);\`ekonomi-yardım, economy\`]
$addField[$customEmoji[giveaway] **Eğlence Komutlarım** (\`12\`);\`howgay, 25miles, palyaço, biden, rte, trump, kaçcm, clyde, rip, wasted, hearts, tigger\`]
$addField[$customEmoji[asker] **Premium Komutlarım** (\`0\`);\`YAKINDA!\`]
$addField[$customEmoji[kirmizi_siren] **Ayarlamalı Komutlarım** (\`12\`);\`hgbb-sistemi, mute-sistemi, ticket-sistemi, kayıt-sistemi, otorol, modlog, saas-aç, saas-kapat, tavsiye-log, invite-sistemi, level-sistemi\`]
$addField[$customEmoji[banned] **Moderasyon Komutlarım** (\`17\`);\`ban, unban, kick, mute, unmute, banlist, herkese-rol-ver, herkesten-rol-al, herkesin-adını-değiştir, nuke, sil, snipe, prefix, hex, otocevap, dm-duyuru, çekiliş\`]
$addField[$customEmoji[astronaut] **Genel Komutlarım** (\`6\`);\`qr, avatar, rank, sunucu-bilgi, afk, tavsiye, istatistik\`]
$addField[**Toplam Komut** (\`$commandsCount\`);\`Moderasyon | Ayarlamalı | Koruma | Genel | Premium | Eğlence | Ekonomi | Destek | Müzik\`]
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
   $log[Günaydın -$userTag[$clientID]]
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
  bbtxt:"-isimt- Tekrar görüşmek üzere bb.",
  hgtxt:"-isimt- Hoş geldin umarım iyi vakit geçirsin.",
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
  levelsistem:"kapalı",
  analvl:"0",
  sayaç:"0",
  s:"kapalı",
  otorolk:"",
  bakım:"no",
  otorolb:"",
  otorol:"",
  eklog:"",
  erol:"",
  krol:"",
 KrediKartı:"",
  para:"0",
  banka:"0",
  rozet1:"false",
  rozet2:"false",
  su:"",
  simit:"",
  ayran:"",
  pbirim:"$",
  kayıtsız:"",
  level:"0",
  yetkili:"",
  kkanal:"",
  cekilis:"undefined",
  otocevap:"",
  otocevapw:"0",
  invite:"",
  klog:"",
  lengel:"kapalı",
  lvlup:"100",
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
bot.variables({
  kişilik:"yok",
  rozetler:"",
  isim:"yok",
  yaş:"yok",
  cinsiyet:"yok",
  instagram:"yok",
  github:"yok",
  youtube:"yok",
  website:"yok",
  spotify:"yok",
  coin:0,
  bcoin:0,
  bsınır:1000,
  bankasınır2:500,
  bücret:1000,
  padlock:"yok",
  seviye: 1,
  skpuan:1000,
  spuan:0,
  kpuan:0,
  kapuan:0,
  avatar:"",
  premium:"yok",
  isimd:1,
  sunucu:0,
  durum:"",
  silah:"yok",
  eldiven:"yok",
  maske:"yok",
  hacker:"yok",
  hackerlik:"Yok",
  hesap:"yok",
  hesapb:"",
  lmesaj:"var",
  savun:"yok",
  bıçak:"yok",
  ip:0,
  savun2:"yok",
  hırsız:"",
  bug:0,
  cooldown:"",
  a1:"yok",
  a2:"yok",
  a3:"yok",
  a4:"yok",
  a5:"yok",
  pc:"yok",
  taramalı:"yok",
  çuval:"yok",
  telafi:"",
  kurallar:0,
  kural:"yok",
  aranma:"yok",
  şans:"",
  seçim:"yok",
  evlilik:"",
  1:"yok",
  2:"yok",
  3:"yok",
  birlik:"yok",
  birliky:"",
  birlikm:"",
  birlikü:"",
  birliküye:"25",
  birliksınır:"100000",
  birlikpara:"0",
  birlikler:"",
  istek:"",
  bkurallar:"yok",
  koruma:"yok",
  gem:0,
  halat:"yok",
  karate:"",
  boks:"",
  s1:0,
  s2:0,
  s3:0,
  s4:0
})
