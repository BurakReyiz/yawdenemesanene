module.exports = {
        name: "kimlik",
        code: `
        $addField[Rozetler;$replaceText[$replaceText[$getUserVar[rozet1;$mentioned[1;yes]];false;\`Yok\`;-1];true;🔱;-1] **|** $replaceText[$replaceText[$getUserVar[rozet2;$mentioned[1;yes]];false;\`Yok\`;-1];true;⚜️;-1];yes]
        $addField[No;\`$mentioned[1;yes]\`;yes]
        $addField[Seri No;\`$discriminator[$mentioned[1;yes]]\`;yes]
        $addField[İsim Soyisim;\`$username[$mentioned[1;yes]]\`;yes]
        $thumbnail[$userAvatar[$mentioned[1;yes]]]
        $color[303136]
        $onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların kimliği olmaz.]
        `
}