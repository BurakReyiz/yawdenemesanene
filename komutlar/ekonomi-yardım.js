module.exports = { name:"ekonomi-yardım", bkz:["Cidden bunu arattın mı ?"], aliases: ["economy"], code:` $if[$message==] $reply[$messageID; {color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]}{description: Selam sana $replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;kötü adam];kahraman;kahramanımız];yok;maceracı]} {field:Bilgi Komutları:\`$getServerVar[prefix]rozetler\` , \`$getServerVar[prefix]rehber\`}{field:Finansal Komutlar:\`$getServerVar[prefix]banka\` , \`$getServerVar[prefix]gönder\` , \`$getServerVar[prefix]market\` , \`$getServerVar[prefix]satınal\` , \`$getServerVar[prefix]öğren\` , \`$getServerVar[prefix]günlük\` , \`$getServerVar[prefix]param\`}{field:Genel Komutlar:\`$getServerVar[prefix]suç\` , \`$getServerVar[prefix]iyilik\`, \`$getServerVar[prefix]soygun\`,\`$getServerVar[prefix]deepweb\` , \`$getServerVar[prefix]bankasoy\` , \`$getServerVar[prefix]hesapçal\` , \`$getServerVar[prefix]kumar\` , \`$getServerVar[prefix]iphackle\` , \`$getServerVar[prefix]kullan\`,\`$getServerVar[prefix]giy\`}{field:Birlik Komutları:\`$getServerVar[prefix]birlikkur\` , \`$getServerVar[prefix]birlikkatıl\` , \`$getServerVar[prefix]birlikayrıl\` , \`$getServerVar[prefix]birlikreddet\` , \`$getServerVar[prefix]birlikkabul\` , \`$getServerVar[prefix]birlikat\` , \`$getServerVar[prefix]birliğim\` , \`$getServerVar[prefix]birlikkurallar\` , \`$getServerVar[prefix]birlikgüncelle\` , \`$getServerVar[prefix]birlikyatır\` , \`$getServerVar[prefix]birlikçek\`};yes] $endif $if[$message!=] $reply[$messageID;{color:$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]}$endif `
                 }
