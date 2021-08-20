module.exports = {
  name:"25miles",
  code:`$argsCheck[>1;Birden fazla kelime yazmak için her kelimenin arasına + bırak]
$color[$getServerVar[hex]]
$deletecommand
$title[25 mile's]
$image[https://vacefron.nl/api/water?text=$message]
$footer[$username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
}

