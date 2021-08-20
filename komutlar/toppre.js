module.exports = {
name:"toppre",
code:`
$title[Mixden Premium Sistemi]
$color[$getServerVar[hex]]
$description[
**Şuanda Toplam \`$getVar[presayı]\` Premium Üyem Var**

$customEmoji[asker] **Premium Üye Olmak İçin Sunucumuzu Ziyaret Edin** 
]
$footer[Destek Sunucuma Gelmek İçin $getServerVar[prefix]destek Yazın]
$onlyIf[$getVar[bakım]==no;⚠️ Üzgünüm Bakımdayım.]
`
}

