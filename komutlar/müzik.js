module.exports = ({
name:"müzik",
code:`$author[Mixden Müzik Sistemi;$authorAvatar]
        $description[
        ======================================================
        
        **Şarkıyı Başlatmak İçin:** \`$getServerVar[prefix]çal\`
        **Şarkö Sırasını Açmak İçin:** \`$getServerVar[prefix]sıralama\`
        
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

`
})