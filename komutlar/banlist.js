module.exports = {
        name: "banlist",
        code: `
$description[**Sunucudaki toplam ban sayısı:** \`$banCount\`
>>> **=======__Banlanan Kişiler__=======**
\`\`\`
$replaceText[$usersBanned;,;
;-1]
\`\`\`
**==========================**]
$color[$getServerVar[hex]]
$onlyPerms[ban;:x: | **Bu komut için __ÜYELERİ YASAKLA__ iznin olmalı**]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
}
