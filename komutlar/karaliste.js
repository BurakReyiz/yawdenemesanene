module.exports = {
name:"karaliste",
code:`
$if[$message[1]==ver]
✔️ <@$message[1]> adlı kişiyi **$getGlobalUserVar[ksebep;$message[1]] ** sebebinden kara listeye aldım
$setGlobalUserVar[karaliste;yes;$message[1]]
$setGlobalUserVar[ksebep;$message[2] $message[3] $message[4] $message[5] $message[6] $message[7] $message[8] ;$message[9] $message[10];$message[1]]
$onlyForIDs[$botOwnerID;{title;Karalisteye Yalnız Sahibim Alabilir!}
$onlyIf[$message[2]!=;Sebep gir]
$onlyIf[$isNumber[$message[1]]==true;Bu Bir İd'ye Benzemiyor!]
$onlyIf[$message[1]!=;Kullanıcının İd'sini Gir!]
$endif
$if[$message[1]==al]
✔️ <@$message[1]> Adlı üye karalisteden çıkarıldı
$setGlobalUserVar[karaliste;no;$message[1]]
$setGlobalUserVar[ksebep;;$message[1]]
$onlyForIDs[$botOwnerID;{title:Karalisteye Yalnızca Sahibim Alabilir!}
$onlyIf[$getGlobalUserVar[karaliste;$message[1]]==yes;Bu üye karalistede değil]
$onlyIf[$isNumber[$message[1]]==true;Bu Bir İd'ye Benzemiyor!]
$onlyIf[$message[1]!=;Kullanıcının İd'sini Gir!]
]]`
}