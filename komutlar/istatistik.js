module.exports = {
name:"i",
aliases:["istatistik","istatistiks","stats","stat"],
code:`
$author[$userTag;$authorAvatar]
$description[Selam **$userTag[$clientID]** İşte Mixden'nin İstatistikleri

$customEmoji[sari1] • Sahibim: **$userTag[$botOwnerID]**

$customEmoji[kirmiziates] • Toplam Kullanıcı Sayım: **$allMembersCount**
$customEmoji[discord] • Toplam Sunucu Sayım: **$serverCount**

$customEmoji[gokkusagi] • Komut Sayım: **$commandsCount**

$custom[emoji_99] • Toplam Kanal Sayım: **$allChannelsCount**
$customEmoji[ayicik] • Toplam Yazı Kanalı: **$allChannelsCount[text]**
$customEmoji[portakal] • Toplam Ses Kanal: **$allChannelsCount[voice]**
$customEmoji[ • Toplam Kategori Sayısı: **$allChannelsCount[category]**

$customEmoji[sabit] • Oluşturma Tarihim: **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$clientID;time];years;Yıl;-1];months;Ay;-1];weeks; Hafta;-1];day;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;Ve;-1];seconds;Saniye;-1] ** önce

$customEmoji[yukleniyo] • Uptime Sürem: **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$parseDate[$djseval[client.uptime;yes];time];hours;saat;-1];minutes;dakika;-1];seconds;saniye;-1];hour;saat;-1];minute;dakika;-1];second;saniye;-1];and;ve;-1]**

$customEmoji[yesilyuklen] • Pingim: **$botPing** 

$customEmoji[zil] • Kütüphanem: \`AOI.js\`

$customEmoji[enerji] • Linkler: ** [Destek sunucum](https://discord.gg/QtffYC2Ubd) , [Davet linkim](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot&permissions=8 ) **]
$footer[Mixden İstatistik Menüsü;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[BLACK]
`
}