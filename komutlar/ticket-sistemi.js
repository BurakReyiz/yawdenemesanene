module.exports = {
  name:"ticket-sistemi",
  code:`
  $author[Mixden Ticket Sistemi;$authorAvatar]
        $description[
**Ticket kanalı ayarlamak için:** \`$getServerVar[prefix]ticket-kanal ayarla #kanal\`
**Ticket kanalını sıfırlamak için:** \`$getServerVar[prefix]ticket-kanal sıfırla\`
=================
**Ticket kategorisini ayarlamak için:** \`$getServerVar[prefix]ticket-kategori KATEGORİ_ID\`
**Ticket kategorisini sıfırlamak için:** \`$getServerVar[prefix]ticket-kategori sıfırla\`
=================
**Ticket açmak için** \`Ayarlanan ticket kanalına $getServerVar[prefix]ticket-aç yazın\`
**Ticket kapatmak için:** \`$getServerVar[prefix]ticket kapat\`
        ]
        $footer[Destek'e İhtiyacınız Varsa $getServerVar[prefix]destek Yazmanız Yeterlidir.]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]  

  `
  }
