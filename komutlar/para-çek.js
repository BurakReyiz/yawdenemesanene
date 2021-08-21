module.exports = {
        name: "para",
        code: `$if[$message[1]==çek]
        $description[Banka hesabınızdan \`$message[2]\` $getServerVar[pbirim] miktarda para çekildi.]
        $color[303136]
        $setUserVar[para;$sum[$getUserVar[para;$authorID];$message[2]];$authorID]
        $setUserVar[banka;$sub[$getUserVar[banka;$authorID];$message[2]];$authorID]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
         $onlyIf[$message[2]!=;:x: | Çekeceğiniz para miktarını yazınız.]
         $onlyIf[$getUserVar[para;$authorID]>=$message[2];:x: | Yetersiz bakiye.]
         $endif
        $if[$message[1]==yatır]
        $description[Banka hesabınıza \`$message[2]\` $getServerVar[pbirim] miktarda para yatırıldı.]
        $color[303136]
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$message[2]];$authorID]
        $setUserVar[banka;$sum[$getUserVar[banka;$authorID];$message[2]];$authorID]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
         $onlyIf[$message[2]!=;:x: | Yatıracağınız para miktarını yazınız.]
         $onlyIf[$getUserVar[para;$authorID]>=$message[2];:x: | Yetersiz bakiye.]
         $endif
         $if[$message[1]==ver]
         $description[<@$mentioned[1]> kişisine \`$message[3]\` $getUserVar[pbirim] miktarda para eklendi.]
         $setUserVar[para;$sum[$getUserVar[para;$mentioned[1]];$message[3]];$mentioned[1]]
         $onlyIf[$message[3]!=;:x: | Vereceğiniz parayı yazınız.]
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | yeterli yetkin yok.]
        $onlyIf[$mentioned[1]!=;:x: | Birini etiketle.]
        $onlyIf[$isBot[$mentioned[1]]!=true;:x: | Bir bota para veremezsin.]
         $onlyIf[$isNumber[$message[3]]!=false;:x: | Yazdığın şey sayı değil.]
         $color[303136]
         $endif
         $if[$message[1]==al]
         $description[<@$mentioned[1]> kişisinden \`$message[3]\` $getUserVar[pbirim] miktarda para alındı.]
         $setUserVar[para;$sub[$getUserVar[para;$mentioned[1]];$message[3]];$mentioned[1]]
         $onlyIf[$message[3]!=;:x: | Alacağınız parayı yazın.]
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | yeterli yetkin yok.]
        $onlyIf[$mentioned[1]!=;:x: | Birini etiketle.]
        $onlyIf[$isBot[$mentioned[1]]!=true;:x: | Bir bottan para alamazsın.]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
         $color[303136]
         $endif
        `
}