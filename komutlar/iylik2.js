module.exports = {
    name:"iyilik",
    code:`
    $setGlobalUserVar[kpuan;$sum[$getGlobalUserVar[kpuan;$authorID];$random[1;5]];$authorID]
    $wait[1ms]
    $editMessage[$get[mesaj];$randomText[Ağaçtaki kediyi alıp yere bıraktın;Yere şekerini düşürmüş ağlayan çocuğa yeni bir şeker aldın;Bastonunu yere düşüren bir yaşlıya yardım ettin;Kanalizasyona birşey düşüren kişiye yardım ettin;Dondurmacının aracını soğuk biryere taşıdın]]
    $wait[1s]
    $let[mesaj;$channelSendMessage[$channelID;Görevini yapıyorsun :mag:;yes]]
    $globalCooldown[30s;**$replaceText[$replaceText[$getCooldownTime[30s;globalUser;iyilik;$authorID];econd;Saniye];s;]** Sonra Deneyebilirsin !{delete:30s}]
    $onlyIf[$getGlobalUserVar[durum;$authorID]==kahraman;]
    `
  }