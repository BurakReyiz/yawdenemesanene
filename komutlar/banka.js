module.exports = {
    name:"banka",
    bkz:["Para çekme yada yatırma işlemlerini buradan yapabilirsiniz"],
    code:`
    $if[$checkCondition[$message[1]==çek]$checkCondition[$message[1]==yatır]==falsefalse]
    Banka'ya \`çek\` yada \`yatır\` işlemi yapabilirsiniz
    $endif
    $if[$message[1]==çek]
    Bankadan \`$message[2]\` miktar çekilmiştir. $truncate[$getGlobalUserVar[bcoin;$authorID]]/$getGlobalUserVar[bsınır;$authorID]
    $wait[1ms]
    $setGlobalUserVar[bcoin;$sub[$getGlobalUserVar[bcoin;$authorID];$message[2]];$authorID]
    $wait[1ms]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$message[2]];$authorID]
    $onlyIf[$checkContains[$message;.;,]!=true;Küsürat giremezsiniz !]
    $onlyIf[$checkCondition[$message[2]>$getGlobalUserVar[bcoin;$authorID]]!=true;Bankanda bu kadar miktarda para yok]
    $onlyIf[$checkCondition[$message[2]<1]!=true;0 ve - Gibi sayılar yatırarak buga sokmana izin veremem]
    $onlyIf[$isNumber[$message[2]]!=false;Bankaya sayı cinsinden miktar çekebilirsin]
    $argsCheck[>1;Miktarı yazınız]
    $endif
    
    $if[$message[1]==yatır]
    Bankaya \`$message[2]\` miktar yatırılmıştır. $truncate[$getGlobalUserVar[bcoin;$authorID]]/$getGlobalUserVar[bsınır;$authorID]
    $wait[1ms]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$message[2]];$authorID]
    $wait[1ms]
    $setGlobalUserVar[bcoin;$sum[$getGlobalUserVar[bcoin;$authorID];$message[2]];$authorID]
    $onlyIf[$checkContains[$message;.;,]!=true;Küsürat giremezsiniz !]
    $onlyIf[$checkCondition[$message[2]>$getGlobalUserVar[coin;$authorID]]!=true;Bu miktar sende yok !]
    $onlyIf[$checkCondition[$getGlobalUserVar[bsınır;$authorID]<$sum[$getGlobalUserVar[bcoin;$authorID];$message[2]]]!=true;Yatırdığın miktar banka sınırını aşıyor.]
    $onlyIf[$checkCondition[$message[2]<1]!=true;0 ve - Gibi sayılar yatırarak buga sokmana izin veremem]
    $onlyIf[$isNumber[$message[2]]!=false;Bankaya sayı cinsinden miktar yatırabilirsin]
    $argsCheck[>1;Miktarı yazınız]
    $endif
    
    $globalCooldown[3s;Biraz bekle kankam{delete:3s}]
    `
}