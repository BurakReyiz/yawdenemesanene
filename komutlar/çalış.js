module.exports = {
        name: "çalış",
        code: `$author[$usertag Çalıştı.]
        $description[$randomText[Polis olarak;Doktor olarak;Mimar olarak;Yazılımcı olarak] çalıştın ve $random[75;1000] $getServerVar[pbirim] kazandın.]
        $color[303136]
        $setUserVar[para;$sum[$random[75;150];$getUserVar[para;$authorID]];$authorID]
        $cooldown[300s;:x: | 5 dakika beklemelisin.]
        
        `
}