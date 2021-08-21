module.exports = {
        name: "ekonomi-yardım",
        aliases:"Economy",
        code: `$author[$username[$clientID] Ekonomi Yardım Menüsü;$authorAvatar]
        $thumbnail[$userAvatar[$clientID

        $addField[$getServerVar[prefix]envanter;\`Envatnerinizi gösterir.\`;yes]
        $addField[?satın-al;\`Bir şeyler satın alırsınız.\`;yes]
        $addField[?çalış;\`Çalışıp para kazanırsınız.\`;yes]
        $addField[?para-gönder;\`Etiketlediğiniz kişiye belirtiniz miktarda para gönderir.\`;yes]
        $addField[?para çek/yatır;\`Banka hesabınızdan para çekip yatırırsınız.\`;yes]
        $addField[?para al/ver;\`etiketlediğiniz kişiye para verip alabilirsiniz.\`;yes]
        $addField[?para-birim ayarla/sıfırla;\`Sunucu içindeki para birimini ayarlarsınız.\`;yes]
        $addField[?market;\`Market menüsünü görürsünüz.\`;yes]
        $addField[?cf;\`Kumar oynarsınız.\`;yes]
        $addField[?günlük;\`Günlük paranızı alırsınız.\`;yes]
        $addField[?cüzdan;\`Cüzdanınızı gösterir.\`;yes]
        $addField[?kimlik;\`Kimliğinizi gösterir.\`;yes]
        $addField[Para Birimi ve Rozetler; $getServerVar[pbirim] **|** 🔱 **|** ⚜️]
        $color[303136]
        `
}