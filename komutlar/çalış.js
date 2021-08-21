module.exports = {
        name: "çalış",
        code: `$author[$usertag Çalıştı.]
        $description[$randomText[Uçak Yapımcısı olarak;Düğüncü olarak;Kıyafet Satış Elemanı olarak;Tasarımcı olarak;Elektronik Çalışanı olarak;Hemşire olarak;Madenci olarak;Eczaneci olarak;Ağıt yakarak;Kağıtçı olarak;Su Tesisatçısı olarak;Saatçi olarak;Kırtasiyeci olarak;Manavcı olarak;Projeci olarak;Elektirikçi olarak;Youtuber olarak;Kasap olarak;Marketçi olarak;Büfeci olarak;Simitçi olarak;Kantinci olarak;Çiftçi olarak;Mühendis olarak;Polis olarak;Doktor olarak;Mimar olarak;Yazılımcı olarak] çalıştın ve $random[75;500] $getServerVar[pbirim] kazandın.]
        $color[303136]
        $setUserVar[para;$sum[$random[75;400];$getUserVar[para;$authorID]];$authorID]
        $cooldown[300s;:x: | 5 dakika beklemelisin.]
        
        `
}