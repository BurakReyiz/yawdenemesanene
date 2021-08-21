module.exports = {
    name:"çalış",
    bkz:["Para kazanma yollarından birisi"],
    code:`
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$random[10;20]];$authorID]
    $if[$getGlobalUserVar[kişilik;$authorID]!=kötü]
    $randomText[Yaşlı birisini karşıdan karşıya geçirmeye yardım ettin;Yarı zamanlı bir işte çalıştın;Komşunun çimlerini biçtin;Bir ev sahibinin evini temizledin] \`$random[10;20]\` Kazandın
    $endif
    $if[$getGlobalUserVar[kişilik;$authorID]==kötü]
    $randomText[Kötülük fuarına katıldın;Sokaktaki birinin cüzdanını çaldın;Yere düşen parayı aldın] \`$random[10;20]\` Kazandın
    $endif
    $globalCooldown[30s;**$replaceText[$replaceText[$getCooldownTime[30s;globalUser;çalış;$authorID];econd;Saniye];s;]** sonra gelebilirsin.]
    `
}