module.exports = {
        name: "çalış",
        code: `$author[$usertag Çalıştı.]
        $description[$randomText[Manavcı olarak;Projeci olarak;Elektirikçi olarak;Youtuber olarak;Kasap olarak;Marketçi olarak;Büfeci olarak;Simitçi olarak;Kantinci olarak;Çiftçi olarak;Mühendis olarak;Polis olarak;Doktor olarak;Mimar olarak;Yazılımcı olarak] çalıştın ve $random[75;500] $getServerVar[pbirim] kazandın.]
        $color[303136]
        $setUserVar[para;$sum[$random[75;400];$getUserVar[para;$authorID]];$authorID]
        $cooldown[300s;:x: | 5 dakika beklemelisin.]
        
        `
}