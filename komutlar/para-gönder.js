module.exports = {
        name: "para-gönder",
        code: `
        $description[<@$mentioned[1]> kişisine \`$message[2]\` $setServerVar[pbirim] miktarda para gönderildi.]
        $color[303136]
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$message[2]];$authorID]
        $setUserVar[para;$sub[$getUserVar[para;$mentioned[1]];$message[2]];$mentioned[1]]
        $onlyIf[$getUserVar[para;$authorID]>=$message[2];:x: | Yetersiz bakiye.]
        $onlyIf[$message[1]!=;:x: | Bir miktar girmelisin.]
        $onlyIf[$mentioned[1]!=;:x: | Birini etiketle.]
        $onlyIf[$mentioned[1]!=$authorID;:x: | Kendine para gönderemezsin.]
        $onlyIf[$isBot[$mentioned[1]]!=true;:x: | Bir bota para gönderemezsin.]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
        `
}