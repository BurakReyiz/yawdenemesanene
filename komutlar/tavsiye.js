module.exports = {
name:"tavsiye",
code:`
$channelSendMessage[$getServerVar[tlog];{author:$userTag:$authorAvatar}{description:Tavsiyeyi veren: **$userTag**

Tavsiye: **$message**}{footer::$authorAvatar}{color:RANDOM}{thumbnail:$authorAvatar}]
$channelSendMessage[$channelID;<#$getServerVar[tlog]> Kanalına iletildi]
$deletecommand
$onlyIf[$message!=;⚠️ Bir mesaj yaz]
$onlyIf[$getServerVar[tlog]!=;⚠️ Tavsiye logu ayarlanmamış]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
}   
