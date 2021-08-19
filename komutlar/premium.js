module.exports = {
name:"premium-ver",
code:`$setGlobalUserVar[premium;yes;$mentioned[1]]
$setVar[presayı;$sum[$getVar[presayı];1]]
$useChannel[861207028054360064]
<@$mentioned[1]>
$title[Başarılı]
$color[RANDOM]
$description[__Premium Alan Üye__:\`$username[$mentioned[1]]\`

__Premium Aldığı Sunucu__: [$serverName[$guildID]]($getServerInvite)
 
__Hesap Detayları__:
\`Kurulum Tarihi\`:$creationDate[$mentioned[1]]

\`Hesap ID si\` $mentioned[1]

$channelSendMessage[$channelID;** Üyeye Premium Verildi **]

$onlyForIDs[$botOwnerID;Sadece Sahibim Premium Verebilir]

$onlyIf[$mentioned[1]!=;Kime Premium Vermeliyim]
`
}