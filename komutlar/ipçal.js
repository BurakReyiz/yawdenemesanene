module.exports = {
    name:"iphackle",
    bkz:["Eğer hacker isen ip çalabilirsin"],
	code:`
IP Hackleme işlemi başarılı. 
Hacklenen IP: \`$random[00;99].$random[000;999].$random[001;999].$random[01;99]\`
    $setGlobalUserVar[ip;$sum[$getGlobalUserVar[ip;$authorID];1];$authorID]
    $globalCooldown[15m;**$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[15m;globalUser;iphackle;$authorID];minute;Dakika];second;Saniye];s;];and;ve]** sonra deneyebilirsin]
    $onlyIf[$getGlobalUserVar[pc;$authorID]!=yok;Böyle önemli işlerinde yardımcı olması için bilgisayarın olması gerekiyor]
    $onlyIf[$getGlobalUserVar[hackerlik;$authorID]!=Yok;Bunun için hacker olman gerekiyor]
    
    `
}