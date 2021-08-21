module.exports = {
    name:"kumar",
    bkz:["İster para kasabilirsin yada kayıp edebilirsin"],
    code:`
    $if[$message==hepsi]
    $if[$getGlobalUserVar[coin;$authorID]>49999]
    Kumara yatırılan miktar = **50000**
$replaceText[$replaceText[$randomText[win;lose];win;Kazandınız :tada:;1];lose;Kaybettiniz.. :smoking:;500]
$replaceText[$replaceText[$randomText[win;lose];win;Kazanılan Miktar: **+$multi[50000;2]**;1];lose;Kaybedilen Miktar: **-50000**;500]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];-50000;$replaceText[$replaceText[$randomText[win;lose];win;$multi[50000;2];1];lose;0;500]];$authorID]
    $wait[1s]
    $sendMessage[Zarlar Atılıyor;no]
    $endif
    
    $if[50000>$getGlobalUserVar[coin;$authorID]]
    Kumara yatırılan miktar = **$get[coin2]**
$replaceText[$replaceText[$randomText[win;lose];win;Kazandınız :tada:;1];lose;Kaybettiniz.. :smoking:;500]
$replaceText[$replaceText[$randomText[win;lose];win;Kazanılan Miktar: **+$multi[$get[coin2];2]**;1];lose;Kaybedilen Miktar: **-$get[coin2]**;500]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];-$getGlobalUserVar[coin;$authorID];$replaceText[$replaceText[$randomText[win;lose];win;$multi[$getGlobalUserVar[coin;$authorID];2];1];lose;0;500]];$authorID]
    $wait[1s]
    $sendMessage[Zarlar Atılıyor;no]
    $onlyIf[$checkCondition[50>$getGlobalUserVar[coin;$authorID]]!=true;Hesabınızda 50'den fazla miktar bulunmalıdır]
    $endif
    $onlyIf[$checkCondition[0>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinide para yok !]
    $endif
    $if[$isNumber[$message]==true]
    Kumara yatırılan miktar = **$message**
$replaceText[$replaceText[$randomText[win;lose];win;Kazandınız :tada:;1];lose;Kaybettiniz.. :smoking:;500]
$replaceText[$replaceText[$randomText[win;lose];win;Kazanılan Miktar: **+$multi[$get[coin];2]**;1];lose;Kaybedilen Miktar: **-$message**;500]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];-$message;$replaceText[$replaceText[$randomText[win;lose];win;$multi[$get[coin];2];1];lose;0;500]];$authorID]
   $wait[1s]
    $sendMessage[Zarlar Atılıyor;no]
    $onlyIf[$checkCondition[$message>49999]!=true;En fazla 50binlik oynayabilirsiniz]
    $onlyIf[$checkCondition[50>$message]!=true;50den yukarı miktar girmelisiniz]
    $onlyIf[$checkCondition[$message>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinde \`$message\` kadar para yok.]
    $onlyIf[$message!=hepsi;]
    $endif
    $globalCooldown[1s;Bir kaç saniye bekle {delete:10s}]
    $let[coin2;$getGlobalUserVar[coin;$authorID]]
    $let[coin;$message]
    $onlyIf[$message!=;Miktar yazınız | en az 50 en fazla 50000 , bütün paranızı yatırmak için hepsi yazınız]
    `
}