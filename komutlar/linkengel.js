module.exports = {
name:"link-engel",
code:`
$if[$message[1]==aç]
$customEmoji[yesiltik] | **Link Engel Açıldı.**
$setServerVar[lengel;açık]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[lengel]!=açık;Bu Zaten Açık]
$endif
$if[$message[1]==kapat]
$customEmoji[yesiltik] | **Link Engel Kapatıldı.**
$setServerVar[lengel;kapalı]
$onlyPerms[admin;⚠️Bunun İçin \`Yönetici\` İznin Olmalı]
$onlyIf[$getServerVar[lengel]!=kapalı;Bu Zaten Kapalı]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];aç;kapat]!=false;Lütfen **aç** veya **kapat** yaz]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
} 