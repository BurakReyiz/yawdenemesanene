module.exports = {
  name:"snipe",
  code:`
  $description[$thumbnail[$userAvatar[$getServerVar[zerotwokk]]]
   > **Yakaladığım Mesaj:** __$getServerVar[zerotwo]__
  > **Yakaladığım Kanal:** __<#$getServerVar[zerotwok]>__
 > **Yakaladığım Kişi:** __<@$getServerVar[zerotwokk]>__ | __$getServerVar[zerotwokk]__
> **Yakaladığım Saat:** __$getServerVar[zerotwos]__
  ]
$color[$getServerVar[hex]]
$onlyIf[$getServerVar[zerotwo]!=;:x: | **Bir mesaj kaydedilmemiş.**]
$onlyIf[$hasPerms[$authorID;admin]!=false;Bu komutu kullanabilmek için **Yönetici** yetkisine sahip olmalısın]
$onlyIf[$getVar[bakım]==no;⚠️ Üzgünüm Bakımdayım.]
`
}
