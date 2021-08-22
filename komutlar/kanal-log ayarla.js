module.exports = {
name:"log",
code:`
$if[$message[1]==ayarla]
✔️ Log <#$mentionedChannels[1]> olarak ayarlandı
$setServerVar[modlog;$mentionedChannels[1]]
$onlyIf[$mentionedChannels[1]!=;❗ bir kanal etiketlemelisin]
$endif
$if[$message[1]==kapat]
✔️ Log kapatıldı
$setServerVar[modlog;]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];ayarla;kapat]==true;❗ **ayarla** veya **kapat** argumanlarını kullanın]
$onlyPerms[admin;❗ Bunun için  yetkin yok]
`
}   
