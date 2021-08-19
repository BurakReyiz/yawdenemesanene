module.exports = {
name:"premium-al",
code:`$setGlobalUserVar[premium;no;$mentioned[1]]
$setVar[presayı;$sub[$getVar[presayı];1]]$useChannel[premiun log kanalı idsi]
<@$mentioned[1]>
$title[Başarılı]
$description[__Premiumu Alınan Üye__:\`$username[$mentioned[1]]\`

__Premiumun Alındığı Sunucu__: [$serverName[$guildID]]($getServerInvite)
 
__Hesap Detayları__:
\`Kurulum Tarihi\` :$creationDate[$mentioned[1]]

\`Hesap ID si\` : $mentioned[1]

\`Alınma Sebebi\` : **$noMentionMessage**]

$channelSendMessage[$channelID;** Üyeden Premium Alındı**]

$onlyForIDs[$botOwnerID;Sadece Sahibim Premium Alabilir]

$onlyIf[$mentioned[1]!=;Kimden Premium Almalıyım]
`
}