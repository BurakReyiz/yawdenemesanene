module.exports = {
  name:"bakım-aç",
  code:`
$author[$usertag;$authorAvatar]
$if[$message[1]==;aç]
Bakım Modu Açılmıştır $customEmoji[yesiltik]
Bütün Komutlar Kullanıma Kapatılmıştır. $customEmoji[yukleniyor2]
$customEmoji[pepe_exit]Kapatmak İçin $getServerVar[prefix]bakım-kapat Yazman Yeterli Kurucum $customEmoji[siyahkraltaci]]
$setVar[bakım;yes]
$onlyIf[getVar[bakım]==no;Zaten Bakımdayım
$endif
$setGlobalUserVar[bakım;evet;310301496824561666;654741976327127080]
$onlyForIDs[310301496824561666;654741976327127080;Geliştiricim Değilsin]
$footer[Mixden Bakım Sistemi]
`}