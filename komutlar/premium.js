module.exports = {
name:"premium",
code:`$setGlobalUserVar[premium;yes;$mentioned[1]]
$setVar[presayı;$sum[$getVar[presayı];1]]
$useChannel[premium log kanalı idsi]
<@$mentioned[1]>
$title[Başarılı]
$description[__Premium Alan Üye__:\`$username[$mentioned[1]]\`

__Premium Aldığı Sunucu__: [$serverName[$guildID]]($getServerInvite)
 
__Hesap Detayları__:
\`Kurulum Tarihi\`:$creationDate[$mentioned[1]]

\`Hesap ID si\` $mentioned[1]

$channelSendMessage[$channelID;** Üyeye Premium Verildi **]

$onlyForIDs[$botOwnerID;Sadece Sahibim Premium Verebilir]

$onlyIf[$mentioned[1]!=;Kime Premium Vermeliyim]
$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;Bunun İçin Premium Üye Olmalısınız]
`
}