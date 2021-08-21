module.exports = {
        name: "ekonomi-yardım",
        aliases:"economy",
        code: `$author[$username[$clientID] Ekonomi Yardım Menüsü;$authorAvatar]
        $thumbnail[$userAvatar[$clientID
        $addField[$getServerVar[prefix]envanter;\`Envatnerinizi gösterir.\`;yes]
        $addField[$getServerVar[prefix]satın-al;\`Bir şeyler satın alırsınız.\`;yes]
        $addField[$getServerVar[prefix]çalış;\`Çalışıp para kazanırsınız.\`;yes]
        $addField[$getServerVar[prefix]para-gönder;\`Etiketlediğiniz kişiye belirtiniz miktarda para gönderir.\`;yes]
        $addField[$getServerVar[prefix]para çek/yatır;\`Banka hesabınızdan para çekip yatırırsınız.\`;yes]
        $addField[$getServerVar[prefix]para al/ver;\`etiketlediğiniz kişiye para verip alabilirsiniz.\`;yes]
        $addField[$getServerVar[prefix]para-birim ayarla/sıfırla;\`Sunucu içindeki para birimini ayarlarsınız.\`;yes]
        $addField[$getServerVar[prefix]market;\`Market menüsünü görürsünüz.\`;yes]
        $addField[$getServerVar[prefix]cf;\`Kumar oynarsınız.\`;yes]
        $addField[$getServerVar[prefix]günlük;\`Günlük paranızı alırsınız.\`;yes]
        $addField[$getServerVar[prefix]cüzdan;\`Cüzdanınızı gösterir.\`;yes]
        $addField[$getServerVar[prefix]kimlik;\`Kimliğinizi gösterir.\`;yes]
        $addField[Para Birimi ve Rozetler; $getServerVar[pbirim] **|** 🔱 **|** ⚜️]
        $color[RANDOM]
        `
}