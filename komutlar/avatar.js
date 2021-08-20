module.exports = {
name:"avatar",
code:`
$author[$userTag tarafından istendi;$authorAvatar]
$description[**[Kullanıcının profil fotoğrafı]($userAvatar[$mentioned[1;yes]])**]
$image[$userAvatar[$mentioned[1;yes]]]
$footer[;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
}

