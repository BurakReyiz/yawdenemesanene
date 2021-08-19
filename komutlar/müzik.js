module.exports = ({
name:"müzik",
code:`$title[Mixden Müzik Sistemi;$authorAvatar]
        $description[
        ======================================================
        
        **Şarkıyı Başlatmak İçin:** \`$getServerVar[prefix]çal\`
        **Şarkı Sırasını Açmak İçin:** \`$getServerVar[prefix]sıralama\`
        
        ======================================================
        
        **Şarkıyı Durdurmak İçin:** \`$getServerVar[prefix]durdur\`
        **Şarkıyı Devam Ettirmek İçin:** \`$getServerVar[prefix]devam\`
        
        ======================================================
        
        **Şarkıyı Tekrarlamak İçin:** \`$getServerVar[prefix]tekrarla\`
        **Şarkıyı Geçmek İçin:** \`$getServerVar[prefix]geç\`
        
        ======================================================
        **Şarkıyı Bitirmek İçin Ses Kanalından Çıkmanız Yeterlidir** $customEmoji[anime_nd].
        
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]

`
})