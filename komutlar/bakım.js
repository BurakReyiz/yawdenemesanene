module.exports = {
name:"bakım",
code:`
$onlyIf[$message[1]==aç]
✔️ Bakım açıldı Artık Komutlar Kullanılamaz Durumda
$setVar[bakım;yes]
$onlyIf[$getVar[bakım]==no;⚠️ Zaten bakım'dayım] 
$endif
$onlyIf[$message[1]==kapat]
✔️ Bakım kapatıldı artık komutlarım kullanılabilir
$setVar[bakım;no]
$onlyIf[$getVar[bakım]==yes;]⚠️ Zaten bakım'da değilim]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]==true;⚠️ **aç** veya **kapat** argumanlarını kullan]
$onlyIf[$authorID==$botOwnerID;Bunu Yalnızca Sahibim Kullanabilir!]
`
}