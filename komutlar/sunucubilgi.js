module.exports = {
name:"sunucu-bilgi",
code:`
 $thumbnail[$serverIcon]
$title[Sunucu Bilgileri]
$description[
✏️**Sunucu Adı:** \`$serverName[$guildID]\`

👑**Sunucu Sahibi:** \`$username[$ownerID]\`

🔰**Sunucu Bölgesi:** \`$serverRegion\`

❇️**Toplam Kanal Sayısı:** \`$channelCount\`

💬**Toplam Yazı Kanalı:** \`$channelCount[text]\`

📣**Toplam Ses Kanalı:** \`$channelCount[voice]\`

👤**Toplam Üye Sayısı:** \`$membersCount\`

🎃**Toplam Bot Sayısı:** \`$botCount\`]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]

`
}   
