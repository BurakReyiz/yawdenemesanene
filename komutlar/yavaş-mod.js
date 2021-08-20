module.exports = {
name:"yavaş-mod",
code:`
✅ <#$channelID> Adlı Kanalda Yavaş Mod \`$message[1]\` Olarak Ayarlandı
$onlyIf[$isNumber[$message[1]]!=false;Bir Sayı Yazın]
$onlyIf[$message[1]!=;**Kullanım**: {prefix}slowmode 5]
$slowmode[$channelID;$message[1]s]
$onlyPerms[managechannels;Yetkin Yok Baka!]
$onlyBotPerms[managechannels;\`Kanalları Yönet\` İznim Olmalı] 
$onlyIf[$getVar[bakım]==no;⚠️ Üzgünüm Bakımdayım.]
`
}