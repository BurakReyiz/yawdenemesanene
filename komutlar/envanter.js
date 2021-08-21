module.exports = {
        name: "envanter",
        code: `
$descripion[**Rozetler:** $replaceText[$replaceText[$getUserVar[rozet1;$mentioned[1;yes]];false;\`Yok\`;-1];true;🔱;-1] **|** $replaceText[$replaceText[$getUserVar[rozet2;$mentioned[1;yes]];false;\`Yok\`;-1];true;⚜️;-1]
**Su:** \`$getUserVar[su;$mentioned[1;yes]]\`
**Ayran:** \`$getUserVar[ayran;$mentioned[1;yes]]\`
**Simit:** \`$getUserVar[simit;$mentioned[1;yes]]\`
**Paran:** \`$getUserVar[para;$mentioned[1;yes]]\`
]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[303136]
        $onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların envanteri olmaz.]
        `
}