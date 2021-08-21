module.exports = {
        name: "çalış",
        code: `$author[$usertag Çalıştı.]
        $description[$randomText[Polis olarak;Doktor olarak;Mimar olarak;Yazılımcı olarak] çalıştın ve $random[75;150] $getServerVar[pbirim] kazandın.]
        $color[303136]
        $setUserVar[para;$sum[$random[75;150];$getUserVar[para;$authorID]];$authorID]
        $cooldown[10s;:x: | 10 saniye beklemelisin.]
        
        `
}