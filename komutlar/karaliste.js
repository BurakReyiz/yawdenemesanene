module.exports = {
name:"karaliste",
code:`
$if[$message[1]==ver]
✔️ <@$message[1]> adlı kişiyi **$getGlobalUserVar[ksebep;$message[1]] ** sebebinden kara listeye aldımke
$setGlobalUserVar[karaliste;yes;$message[1]]
$setGlobalUserVar[ksebep;$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] ;$message[9] $message[10];$message[1]]
$onlyIf[$message[2]!=;Sebep gir]
$onlyIf[$isNumber[$message[1]]==true;Bu bir id'ye benzemiyor]
$onlyIf[$message[1]!=;Kullanıcının id sini gir]
$endif
$if[$message[1]==al]
✔️ <@$message[1]> Adlı üye karalisteden çıkarıldı
$setGlobalUserVar[karaliste;no;$message[1]]
$setGlobalUserVar[ksebep;;$message[1]]
$onlyIf[$getGlobalUserVar[karaliste;$message[1]]==yes;Bu üye karalistede değil]
$onlyIf[$isNumber[$message[1]]==true;Bu bir id'ye benzemiyor]
$onlyIf[$message[1]!=;Kullanıcının id sini gir]
`
}