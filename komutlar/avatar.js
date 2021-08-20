module.exports = {
name:"avatar",
code:`
$author[$userTag tarafından istendi;$authorAvatar]
$description[**[Kullanıcının profil fotoğrafı]($userAvatar[$mentioned[1;yes]])**]
$image[$userAvatar[$mentioned[1;yes]]]
$footer[;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$onlyIf[$getVar[bakım]==no;:warning: Üzgünüm Bakımdayım.]
`
}

