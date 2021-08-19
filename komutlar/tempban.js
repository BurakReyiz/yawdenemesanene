module.exports = {
name:"tempban",
code:`
$channelSendMessage[$channelID;$userTag[$mentioned[1]] Adlı kullanıcının ban süresi bitti ve banı açıldı]
$unban[$mentioned[1]]
$wait[1y]
:white_check_mark: $userTag[$mentioned[1]] Adlı Üye Banlandı
$ban[$mentioned[1];$noMentionMessage;7]
$onlyIf[$mentioned[1]!=:negative_squared_cross_mark: Kimi Banlamalıyım?]
$onlyIf[$message!=;:warning: **Kullanım:** md!tempban @kullanıcı ]
$onlyBotPerms[ban;:warning: Bunun için botun \`Üyeleri Yasakla\` izni olmalı]
$onlyPerms[ban::negative_squared_cross_mark: Bunun için \`Üyeleri Yasakla\` İznin Olmalı]
`
}