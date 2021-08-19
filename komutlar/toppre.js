module.exports = {
name:"toppre",
code:`
$title[Selam]
$description[
**Şuanda Toplam \`$getVar[presayı]\` Premium Üyem Var**

__Premium Üye Olmak İçin Sunucumuzu Ziyaret Edin__
]
$thumbnail[$userAvatar[$clientID]]$onlyIf[$getGlobalUserVar[premium;$authorID]!=no;Bunun İçin Premium Üye Olmalısınız]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[Prefix]destek Yazın]
`
}
