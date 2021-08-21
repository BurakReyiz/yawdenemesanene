module.exports = {
    name:"hesapçal",
    code:`
Hesap Çalınmıştır. 
Hesabın takipçi miktarı: \`$filterMessage[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[hackerlik;$authorID];Amatör;$random[100;2499]];Gelişmiş;$random[2500;49999]];Profesyönel;$random[50000;150000]];Hacker]\`
    $setGlobalUserVar[hesap;var;$authorID]
    $setGlobalUserVar[hesapb;$filterMessage[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[hackerlik;$authorID];Amatör;$random[100;2499]];Gelişmiş;$random[2500;49999]];Profesyönel;$random[50000;150000]];Hacker];$authorID]
    $globalCooldown[2h;**$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[2h;globalUser;hesapçal;$authorID];hour;Saat];minute;Dakika];second;Saniye];s;];and;ve]** sonra deneyebilirsin]
    $onlyIf[$getGlobalUserVar[hesap;$authorID]!=var;Zaten çaldığın bir hesap mevcut satmadan yenisini çalamazsın !]
    $onlyIf[$getGlobalUserVar[pc;$authorID]!=yok;Böyle önemli işlerinde yardımcı olması için bilgisayarın olması gerekiyor]
    $onlyIf[$getGlobalUserVar[hackerlik;$authorID]!=Yok;Bunun için hacker olman gerekiyor]
    
    `
}