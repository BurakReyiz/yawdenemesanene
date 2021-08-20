module.exports = {
name:"invite-kanal",
code:`
İnvite Kanalı <#$mentionedChannels[1]> Olarak Ayarlandı
$setServerVar[invite;$mentionedChannels[1]]
$onlyPerms[admin;Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$mentionedChannels[1]!=; Bir Kanal Etiketle]$onlyIf[$message!=; **Kullanım:** !invite-kanal #invite ]
`
}