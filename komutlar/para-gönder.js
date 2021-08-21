module.exports = {
    name:"gönder",
    bkz:["Yardım etmek için fakir birisine para gönderebilirsiniz"],
    aliases:["pay"],
    code:`
    \`$userTag[$mentioned[1]]\` kişisine \`$userTag[$authorID]\` tarafından \`$noMentionMessage[1]\` miktarında para verilmiştir.
    $wait[1ms]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
    $wait[1ms]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$noMentionMessage[1]];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<$noMentionMessage[1]]!=true;Üzerinde yeterli miktarda para yok]
    $onlyIf[$checkCondition[$noMentionMessage[1]<1]!=true;Girdiğin miktar ne 0 olmalı nede - sayılar olmalıdır.]
    $onlyIf[$isNumber[$noMentionMessage[1]]!=false;Girdiğin miktar sayı cinsinden olmalıdır.]
    $onlyIf[$noMentionMessage[1]!=;Miktar girmelisin]
    
    $onlyIf[$mentioned[1]!=$authorID;Kendine değil başkasına.]
    $onlyIf[$mentioned[1]!=;Bunun için birini etiketlemelisin !]
    `
}