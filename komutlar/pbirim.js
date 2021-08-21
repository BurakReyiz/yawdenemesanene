module.exports = {
        name: "para-birim",
        code: `$if[$message[1]==ayarla]
        $description[**Yeni para birimi:** $message[2]]
        $color[303136]
        $setServerVar[pbirim;$message[2]]
        $onlyIf[$message[1]!=;:x: | Yeni para birimini gir.]
        $endif
        $if[$message[1]==sıfırla]
        $description[**Para birimi sıfırlandı:** 🪙]
        $color[303136]
        $setServerVar[pbirim;🪙]
        $endif
        $onlyIf[$hasPerms[$authorID;admin]!=false;:x: | yeterli yetkin yok.]
        `
}