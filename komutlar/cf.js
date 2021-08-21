module.exports = {
        name: "cf",
        code: `$description[\`$message[1]\` $getServerVar[pbirim] yatırdın ve $replaceText[$replaceText[$randomText[evet;hayır];evet;Hey Kazandın. Kazandığın miktar \`$multi[2;$message[1]]\` $getServerVar[pbirim];-1];hayır;Tüh... Kaybettin. Kaybettiğin miktar \`$message[1]\` $getServerVar[pbirim];-1]
        $color[303136]
        $if[$randomText[evet;hayır]==evet]
        $setUserVar[para;$sum[$getUserVar[para;$authorID];$multi[2;$message[1]]]$authorID]
        $else
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$message[1]];$authorID]
        $endif
        $onlyIf[$isNumber[$message[1]]!=false;:x: | Yazdığın şey sayı değil.]
        $onlyIf[$message[1]!=;:x: | Bir miktar girmelisin.]
        `
}