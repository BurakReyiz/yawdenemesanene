module.exports = ({
name:"afk",
code:`
$deletecommand
$deleteIn[17s]
$setVar[afkkk;$sum[$getVar[afkkk];1]]
$setGlobalUserVar[afk;evet]
$setGlobalUserVar[afkc;0]
$setGlobalUserVar[afks;$message]
$setGlobalUserVar[afkss;$dateStamp]
$description[ <a:tik2:713082245543493712> Afk Olma Başarılı <a:tik2:713082245543493712>
Afk Sebebi: \`$message\`
Afk Zamanı Kaydedildi: $sum[$hour;3].$minute
Toplam AFK Kişi Sayısı: \`$getVar[afkkk]\`]
$color[BDAAF9]
$onlyIf[$message!=;Lütfen bir afk sebebi belirleyin]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
})
