module.exports = {
    name:"iyilik",
    bkz:["İyide olsanız kötüde olsanız iyilik yapabilirsiniz. Lakin kötüler için bu bir zaman sıkıntı verebilir"],
    code:`
    $editMessage[$get[mesaj];$randomText[Ağaçtaki kediyi alıp yere bıraktın;Yere şekerini düşürmüş ağlayan çocuğa yeni bir şeker aldın;Bastonunu yere düşüren bir yaşlıya yardım ettin;Kanalizasyona birşey düşüren kişiye yardım ettin;Dondurmacının aracını soğuk biryere taşıdın]]
    $wait[1s]
    $let[mesaj;$channelSendMessage[$channelID;Görevini yapıyorsun :mag:;yes]]
    $if[$getGlobalUserVar[kpuan;$authorID]<98]
    $if[$getGlobalUserVar[kişilik;$authorID]==kahraman]
    $wait[1ms]
    $if[$getGlobalUserVar[kpuan;$authorID]==0]
    $dm[$authorID]
    $color[GREEN]
    $author[Rozet Kazanıldı;$authorAvatar]
    $description[Kazanılan Rozet = 🙂
    
    *Rozet Açıklaması = **İlk iyilik***]
    $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]one/;$authorID]
    $onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];one]!=true;]
    $endif
    $wait[1s]
    $endif
    
    $if[$getGlobalUserVar[kişilik;$authorID]==kötü]
    $if[$getGlobalUserVar[kpuan;$authorID]==0]
    $sendDM[$authorID;{color:GREEN}{author:Rozet Kazanıldı;$authorAvatar}{description:Kazanılan Rozet = 😕
    
    *Rozet Açıklaması = **Kötü adam değilim***}]
    $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]two/;$authorID]
    $onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];two]!=true;]
    $endif
    $wait[1s]
    $endif
    $endif
    $if[$checkCondition[$getGlobalUserVar[kpuan;$authorID]>97]$checkCondition[$getGlobalUserVar[kişilik;$authorID]==kötü]==truetrue]
  
  $setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];kötü/]kahraman/star/;$authorID]
  $setGlobalUserVar[kpuan;$sum[$getGlobalUserVar[kapuan;$authorID];150];$authorID]
  $setGlobalUserVar[durum;kahraman;$authorID]
  $setGlobalUserVar[kişilik;kahraman;$authorID]
  $sendMessage[Sen {edit:1s:{Ne yaptığını}:{biliyormusun}:{aptal adam}};no]
  $sendDM[$authorID;
  {color:03fe1d}
  {author:Özel Bir Rozet Kazanıldı:$authorAvatar}
  {thumbnail:$authorAvatar}
  {description:
    > Kazanılan Rozet: ⭐
    > Rozet Açıklaması: Artık kötü bir insan değilim.
    
    Selam eski \`kötü adam\`
    O kadar iyilik yaptınki artık insanlar seni \`kötü adam geldi kaçın\` diye değilde \`Bu kahraman $replaceText[$getGlobalUserVar[isim;$authorID];yok;$username]\` diye seviniyorlar.
    Açıkçası çok komik  geldi qwelkqweklewqkeqwk
    Herneyse aptal adam artık bu dünyada hiçbir zaman kötü bir adam olamayacaksın.
    Artık iyilik yapabilirsin ama daha kötülük yapamazsın.
    Yeni hayatında bol şans \`Eski Kötü adam\`
    *150 İyilik Puanı Kazanıldı*
  }]
  $endif
    $globalCooldown[1m;**$replaceText[$replaceText[$getCooldownTime[60s;globalUser;iyilik;$authorID];second;Saniye];s;]** sonra deneyebilirsin{delete:1m}]
    $setGlobalUserVar[kpuan;$sum[$getGlobalUserVar[kpuan;$authorID];1];$authorID]
    $setGlobalUserVar[kapuan;$sub[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
    $onlyIf[$getGlobalUserVar[kişilik;$authorID]!=;Kişiliğini seç ve komutlara erişim sağla ! \`mkişilik\`]
    $onlyIf[$getGlobalUserVar[durum;$authorID]==;]`
  }