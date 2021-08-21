module.exports = {
    name:"suç",
    code:`
    $if[$getGlobalUserVar[kapuan;$authorID]<98]
    $if[$getGlobalUserVar[kişilik;$authorID]==kahraman]
    $setGlobalUserVar[kpuan;$sub[$getGlobalUserVar[kpuan;$authorID];1];$authorID]
    $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];1];$authorID]
    $wait[1ms]
    $sendMessage[*Unutma eğer fazla kötülük yaparsan artık bir kahraman olamazsın*;no]
    $wait[5s]
  $editMessage[$get[mesaj2];$randomText[Sokaktaki insanları kışkırttın;Binaların zillerine basıp kaçtın;Görme engelli birinin yolunu değiştirdin;Bakkalların içine torpil attın;Yoldan geçen birinin keline vurup kaçtın;İnsanların saçlarını çekip kaçtın;Kediyi ağacın tepesine bıraktın;Bitane veledin elindeki şekeri yere attın;Yoldan geçen yaşlı birinin elindeki bastonu aldın;Evin kapısına giren kişinin anahtarını alıp kanalizasyona attın;Dondurmacının aracına 300 Derece bir sıcaklık tuttun]]
  $wait[1s]
    $if[$getGlobalUserVar[kapuan;$authorID]==0]
    
    $dm[$authorID]
    $color[RED]
    $author[Rozet Kazanıldı;$authorAvatar]
    $description[Kazanılan Rozet = 😣
    
    *Rozet Açıklaması = **Kahramanlar da kötülük yapabilir***]
    $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]evilhero/;$authorID]
    $onlyIf[$checkContains[$getGlobalUserVar[rozetler;$authorID];evilhero]!=true;]
  
    $endif
    $endif
    $endif
    
    $if[$checkCondition[$getGlobalUserVar[kapuan;$authorID]>97]$checkCondition[$getGlobalUserVar[kişilik;$authorID]==kahraman]==truetrue]
  
 $setGlobalUserVar[rozetler;$filterMessage[$getGlobalUserVar[rozetler;$authorID];kahraman/]kötü/old/;$authorID]
  $setGlobalUserVar[kapuan;$sum[$getGlobalUserVar[kapuan;$authorID];150];$authorID]
  $setGlobalUserVar[durum;kötü;$authorID]
  $setGlobalUserVar[kişilik;kötü;$authorID]
  $sendMessage[Sen {edit:2s:{Ne yaptığını}:{biliyormusun}:{aptal adam}};no]
  $sendDM[$authorID;
  {color:5c0303}
  {author:Özel Bir Rozet Kazanıldı:$authorAvatar}
  {thumbnail:$authorAvatar}
  {description:
    > Kazanılan Rozet: ☠️
    > Rozet Açıklaması: Artık kahraman değilim.
    
    Selam eski \`kahraman\`
    O kadar suç işledinki artık insanlar seni \`kahraman\` diye değilde \`Hayır bu $replaceText[$getGlobalUserVar[isim;$authorID];yok;$username] kaçııın\` diye bağırıp kaçıyorlar.
    Açıkçası çok komik  geldi qwelkqweklewqkeqwk
    Herneyse aptal adam artık bu dünyada hiçbir zaman kahraman olamayacaksın.
    Artık kötülük yapabilirsin ama daha iyilik yapamazsın.
    Yeni hayatında bol şans \`Eski kahraman\`
    *150 Kötülük Puanı Kazanıldı*
  }]
  $endif
 
  $let[mesaj2;$channelSendMessage[$channelID;Suç işliyorsun :mag:;yes]]
  $globalCooldown[1m;**$replaceText[$replaceText[$getCooldownTime[60s;globalUser;suç;$authorID];second;Saniye];s;]** Sonra Deneyebilirsin !{delete:1m}]  
  $onlyIf[$getGlobalUserVar[kişilik;$authorID]==kahraman;]
  $onlyIf[$checkContains[$getGlobalUserVar[durum;$authorID];kötü;kahraman]!=true;]
    `
}