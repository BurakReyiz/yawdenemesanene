module.exports = ({
name:"mute-sistemi",
code:`$author[Mute Sistemi;$authorAvatar]
        $description[
        ======================================================
        
        **Mute rolü ayarlamak için:** \`$getServerVar[prefix]mrol ayarla @rol\`
        **Mute rolünü sıfırlamak için:** \`$getServerVar[prefix]mrol sıfırla\`
        
        ======================================================
        
        **Mute yetkili rolü ayarlamak için:** \`$getServerVar[prefix]myetkili ayarla @rol\`
        **Mute yetkili rolünü sıfırlamak için:** \`$getServerVar[prefix]myetkili sıfırla\`
        
        ======================================================
        
        **Mute atmak için:** \`$getServerVar[prefix]mute @üye\`
        **Unmute atmak için:** \`$getServerVar[prefix]unmute @üye\`
        
        ======================================================
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]
        $onlyIf[$getVar[bakım]==no;⚠️ Üzgünüm Bakımdayım.]

`
})