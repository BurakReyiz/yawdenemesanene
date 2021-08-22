module.exports = {
name:"kanal-log",
code:`
$if[$message[1]==aç]
✔️ Kanal logu <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[modlog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;❗ bir kanal etiketlemelisin]
$endif
$if[$message[1]==kapat]
✔️ Kanal logu kapatıldı
$setServerVar[modlog;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;❗ **aç** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;❗ Bunun için  yetkin yok]
`
}   
