module.exports = {
        name: "hgbb-sistemi",
        code: `$author[HGBB Sistemi;$authorAvatar]
        $description[
        ======================================
        
        **HGBB Sistemini açmak için:** \`$getServerVar[prefix]hgbb aç #kanal\`
        **HGBB Sistemini kapatmak için:** \`$getServerVar[prefix]hgbb kapat\`
        **HGBB Yazılarına resim eklemek için:** \`$getServerVar[prefix]hgbb resim <resim-url>\`
         
        ======================================
        
        **HG Mesajını değiştirmek için:** \`$getServerVar[prefix]hgtxt düzenle <yeni-hg-mesajı>\`
        **HG Mesajını sıfırlamak için:** \`$getServerVar[prefix]hgtxt sıfırla\`
        
        **BB Mesajını değiştirmek için:** \`$getServerVar[prefix]bbtxt düzenle <yeni-bb-mesajı>\`
        **BB Mesajını sıfırlamak için:** \`$getServerVar[prefix]bbtxt sıfırla\`
        
        ======================================
        
        **-etiket- -> <@$authorID>**
        **-isim- -> $username**
        **-isimt- -> $usertag**
        
        ======================================
        ]
        $color[$getServerVar[hex]]
        $thumbnail[$serverIcon]
        $onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
        `
}
