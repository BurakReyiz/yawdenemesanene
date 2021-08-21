module.exports = {
    name:"bankasoy",
    bkz:["Banka soyarsınız. Risklidir."],
    code:`
    $if[$checkCondition[$getGlobalUserVar[bıçak;$authorID]==yok]$checkCondition[$getGlobalUserVar[taramalı;$authorID]==yok]$checkCondition[$getGlobalUserVar[silah;$authorID]==yok]==truetruetrue]
    $editMessage[$get[mesaj];*Birdaha yapmaman dileğiyle...*]
    $wait[2s]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];10000];$authorID]
    $editMessage[$get[mesaj];*Banka soymanın cezası 10.000 Para Cezasıdır.*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankadaki 10 güvenlik görevlisi sana **Desert Eagle** Marka silah doğrulttular*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankacı kadına **ELLER YUKARI PARALARI ÇIKAR** diye bağırdın*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankaya girdin ve vezneye yöneldin*]
    $wait[2s]
    $let[mesaj;$sendMessage[*Hiçbir eşyan yokken banka soymaya gidiyorsun*;yes]]
    $setGlobalUserVar[aranma;yok;$authorID]
    $endif
    
    $if[$getGlobalUserVar[bıçak;$authorID]$getGlobalUserVar[taramalı;$authorID]$getGlobalUserVar[silah;$authorID]==varyokyok]
    
    $if[$getGlobalUserVar[çuval;$authorID]==var]
    $setGlobalUserVar[coin;$replaceText[$replaceText[$randomText[win;lose];win;$sum[$getGlobalUserVar[coin;$authorID];50000];1];lose;$sub[$getGlobalUserVar[coin;$authorID];20000];75];$authorID]
    $wait[1s]
    $replaceText[$replaceText[$randomText[win;lose];win;*Görevli ıskaladı ve kaçtın*;1];lose;*Görevli seni vurdu ve yakalandın*
*Adam öldürmeye teşebbüsten ve hırsızlıktan 20000 Para cezası yedin*
$setGlobalUserVar[aranma;yok;$authorID]
$setGlobalUserVar[bıçak;yok;$authorID]
$setGlobalUserVar[çuval;yok;$authorID];75]
    $wait[2s]
    $editMessage[$get[mesaj];*Kaçarken güvenlik görevlisinden birisi silahla vurdu*]
    $wait[2s]
    $editMessage[$get[mesaj];*50000 Parayı aldın ve kaçmaya çalıştın*]
    $wait[2s]
    $endif
                
    $if[$getGlobalUserVar[çuval;$authorID]==yok]
    $setGlobalUserVar[coin;$replaceText[$replaceText[$randomText[win;lose];win;$sum[$getGlobalUserVar[coin;$authorID];25000];1];lose;$sub[$getGlobalUserVar[coin;$authorID];20000];75];$authorID]
    $wait[1s]
    $replaceText[$replaceText[$randomText[win;lose];win;*Görevli ıskaladı ve kaçtın | Kaçarken bıçağı düşürdün*;1];lose;*Görevli seni vurdu ve yakalandın*
*Adam öldürmeye teşebbüsten ve hırsızlıktan 20000 Para cezası yedin*
$setGlobalUserVar[aranma;yok;$authorID]
$setGlobalUserVar[bıçak;yok;$authorID]
$setGlobalUserVar[çuval;yok;$authorID];75]
    $wait[2s]
    $editMessage[$get[mesaj];*Kaçarken güvenlik görevlisinden birisi silahla vurdu*]
    $wait[2s]
    $editMessage[$get[mesaj];*25000 Parayı aldın ve kaçmaya çalıştın*]
    $wait[2s]
$endif
    $if[$getGlobalUserVar[çuval;$authorID]==var]
    $editMessage[$get[mesaj];***ÇABUK PARALARI ÇUVALA KOY** Diye bağırdın.*]
    $wait[2s]
    $editMessage[$get[mesaj];*Sağ cebindeki çuvalı vezneye doğru attın*]
    $wait[2s]
    $endif
    
    $editMessage[$get[mesaj];*Bağırarak **SİLAHLARI İNDİRİN YOKSA ADAMI ÖLDÜRÜRÜM** dedin ve vezneye döndün*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankadaki 10 güvenlik görevlisi sana **Desert Eagle** Marka silah doğrulttular*]
    $wait[2s]
    $editMessage[$get[mesaj];*Sağ elini belindeki bıçağa 🔪 atıp görevlinin boğazına tuttun*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankaya girdin ve güvenlik görevlisine soru sordun*]
    $wait[2s]
    $let[mesaj;$sendMessage[*Sağ elindeki 🔪 Bıçağını pantolonunun arkasına saklayıp bankaya giriyorsun*;yes]]
    $endif
    $if[$getGlobalUserVar[silah;$authorID]$getGlobalUserVar[taramalı;$authorID]==varyok]
    
    $if[$getGlobalUserVar[çuval;$authorID]==yok]
    $setGlobalUserVar[coin;$replaceText[$replaceText[$randomText[win;lose];win;$sum[$getGlobalUserVar[coin;$authorID];25000];1];lose;$sub[$getGlobalUserVar[coin;$authorID];20000];50];$authorID]
    $wait[1s]
    $replaceText[$replaceText[$randomText[win;lose];win;*Başarıyla kaçtın | +25000 Para*;1];lose;*Polisler tarafından yakalandın*
    *Adam öldürmeye teşebbüsten ve hırsızlıktan 20000 Para cezası yedin*
    $setGlobalUserVar[silah;yok;$authorID]
    $setGlobalUserVar[aranma;yok;$authorID]
    $setGlobalUserVar[çuval;yok;$authorID];50]
    $endif
    $if[$getGlobalUserVar[çuval;$authorID]==var]
    $setGlobalUserVar[coin;$replaceText[$replaceText[$randomText[win;lose];win;$sum[$getGlobalUserVar[coin;$authorID];150000];1];lose;$sub[$getGlobalUserVar[coin;$authorID];20000];50];$authorID]
    $wait[1s]
    $replaceText[$replaceText[$randomText[win;lose];win;*Başarıyla kaçtın | Kaçarken silahını düşürdün | +150000 Para*;1];lose;*Polisler tarafından yakalandın*
    *Adam öldürmeye teşebbüsten ve hırsızlıktan 20000 Para cezası yedin*
    $setGlobalUserVar[silah;yok;$authorID]
    $setGlobalUserVar[aranma;yok;$authorID]
    $setGlobalUserVar[çuval;yok;$authorID];50]
    $endif
    $editMessage[$get[mesaj];*Paraları aldın ve arkana sürekli sıkarak kaçmaya çalıştın*]
    $wait[2s]
    $if[$getGlobalUserVar[çuval;$authorID]==var]
    $editMessage[$get[mesaj];*Vezneye **PARALARI DOLDUR** diye bağırdın*]
    $wait[2s]
    $editMessage[$get[mesaj];*Sol elinle sol cebindeki çuvalı alıp vezneye attın*]
    $endif
    $if[$getGlobalUserVar[çuval;$authorID]==yok]
    $editMessage[$get[mesaj];*Vezneye dönüp **PARALARI VER** diye bağırdın*]
    $endif
    $wait[2s]
    $editMessage[$get[mesaj];*Kafanı vezneye çevirdin*]
    $wait[2s]
    $editMessage[$get[mesaj];*Bankaya girdin ve silahını bir güvenlik görevlisinin kafasına dayadın*]
    $wait[2s]
    $let[mesaj;$sendMessage[*Belindeki silahla <:msilah:860076464169680897> Bankaya yöneliyorsun*;yes]]
    
    $endif
    $if[$getGlobalUserVar[taramalı;$authorID]==var]
    $setGlobalUserVar[seçim;evet;$authorID]
    $setGlobalUserVar[şans;$replaceText[$replaceText[$randomText[win;lose];win;win;5];lose;lose;35];$authorID]
    $if[$getGlobalUserVar[çuval;$authorID]==var]
     *Seçim Zamanı: Polisler 4 kişi çatışmaya girmeyip teslim olmak için **mteslimol** yazmalısın.
    Eğer saldıracaksan **mteslimolma** yazmalısın*
    $editMessage[$get[mesaj];*Polisler ile çatışmaya giriyorsun.*]
    $wait[2s]
    $editMessage[$get[mesaj];*2 polis aracı önünü kesti ve sana silah doğrulttu*]
    $wait[2s]
    $editMessage[$get[mesaj];*Kaçmaya koyuldun.*]
    $wait[2s]
    $editMessage[$get[mesaj];*Vezne torbada sana 150000 Para verdi*]
    $wait[2s]
    $editMessage[$get[mesaj];*Vezneye **DOLDUR PARAYI HADİ** diye bağırdın*]
    $wait[2s]
    $editMessage[$get[mesaj];*AK-47'i kayışla boynuna bırakıp sağ elinle sağ cebindeki çuvalı aldın vezneye uzattın*]
    $endif 
    
    $if[$getGlobalUserVar[çuval;$authorID]==yok]
    *Seçim Zamanı: Polisler 4 kişi çatışmaya girmeyip teslim olmak için **mteslimol** yazmalısın.
    Eğer saldıracaksan **mteslimolma** yazmalısın*
    $editMessage[$get[mesaj];*Polisler ile çatışmaya giriyorsun.*]
    $wait[2s]
    $editMessage[$get[mesaj];*2 polis aracı önünü kesti ve sana silah doğrulttu*]
    $wait[2s]
    $editMessage[$get[mesaj];*Kaçmaya koyuldun*]
    $wait[2s]
    $editMessage[$get[mesaj];*Vezne sana torba içinde 50000 Para verdi*]
    $wait[2s]
    $editMessage[$get[mesaj];*Vezneye **PARALARI ÇIKAR HADİ HADİ** diye bağırdın*]
    $endif 
    $wait[2s]
    $editMessage[$get[mesaj];*Vezneye doğru yürüdün*]
    $wait[2s]
    $editMessage[$get[mesaj];*Silahla tüm güvenlik görevlilerini öldürdün*]
    $wait[2s]
    $let[mesaj;$sendMessage[*Elindeki AK-47 ile <:mak47:860190567610449951> Bankaya yöneliyorsun*;yes]]
    $endif
    $if[$getGlobalUserVar[maske;$authorID]==giydi]
    $sendMessage[*Maske ile gidiyorsun*;no]
    $endif
    $if[$getGlobalUserVar[maske;$authorID]==giydi]
    $setGlobalUserVar[aranma;yok;$authorID]
    $endif
    $setGlobalUserVar[aranma;fazla;$authorID]
    $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];15];$authorID]   
    $globalCooldown[12h;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[12h;globalUser;bankasoy;$authorID];hour;Saat];minute;Dakika];second;Saniye];s;];and;ve]** sonra deneyebilirsin]
    `
}