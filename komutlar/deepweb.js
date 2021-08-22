module.exports = {
    name:"deepweb",
    bkz:["Gizli şeyler alabilirsin"],
    code:`
    $if[$message==]
    $color[BLACK]  
    $author[Ağın karanlık kısına hoşgelin Anonim;$authorAvatar]
    $description[
    Satış Yeri
    IP Satma:
    Elde ettiğini IP'leri sisteme güzel bir fiyata satabilirsin | Satış Fiyatı: \`150-300 Arası\` | Kod: **1**
    Hesap Satma:
    Elde ettiğin sosyal medya hesaplarını satabilirsin | Satış Fiyatı: \`Hesap Takipçisine Göre Değişir\` | Kod: **2**
    Alış Yeri
    
    <:msilah:860076464169680897> Desert Eagle:
    Silah işine yarayabilir | Fiyatı: \`10000\` | Kod: **1**
    🧤 Eldiven:
    Bu eldivenler ile her türlü parmak izini gizleyebilirsin | Fiyatı: \`100\` | Kod: **2**
    $customEmoji[ak471]$customEmoji[ak472]$customEmoji[ak473] AK-47:
    Bu taramalı silah belki bazı işler için işine yarayabilir | Fiyatı: \`50000\` | Kod: **3**
    ]
    $footer[Almak İçin $getServerVar[prefix]deepweb al <item kodu> | Satmak için $getServerVar[prefix]deepweb sat <item kodu>;$authorAvatar]
    $endif
    
    $if[$message[1] $message[2]==sat 1]
    $setGlobalUserVar[ip;$sub[$getGlobalUserVar[ip;$authorID];1];$authorID]
    $wait[1ms]
    $channelSendMessage[$channelID;Elindeki IP Satıldı. Satılan Fiyat = \`$random[150;300]\`;no]
    $onlyIf[$checkCondition[1>$getGlobalUserVar[ip;$authorID]]!=true;IP Hacklemeden satamazsın !]
    $endif
    $if[$message[1] $message[2]==sat 2]
    $setGlobalUserVar[hesapb;;$authorID]
    $setGlobalUserVar[hesap;yok;$authorID]
    $wait[1s]
    $if[$getGlobalUserVar[hackerlik;$authorID]==Profesyönel Hacker]
    $sendMessage[Elindeki hesabın takipçisi \`$getGlobalUserVar[hesapb;$authorID]\` olduğu için \`$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];50]]\` Kazandın.;no]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];50]]];$authorID]
    $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap çalmadan satamazsın !]
    $endif
    $if[$getGlobalUserVar[hackerlik;$authorID]==Gelişmiş Hacker]
    $sendMessage[Elindeki hesabın takipçisi \`$getGlobalUserVar[hesapb;$authorID]\` olduğu için \`$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];30]]\` Kazandın.;no]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];30]]];$authorID]
    $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap çalmadan satamazsın !]
    $endif
    $if[$getGlobalUserVar[hackerlik;$authorID]==Amatör Hacker]
    $sendMessage[Elindeki hesabın takipçisi \`$getGlobalUserVar[hesapb;$authorID]\` olduğu için \`$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];5]]\` Kazandın.;no]
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$truncate[$divide[$getGlobalUserVar[hesapb;$authorID];5]]];$authorID]
    $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap çalmadan satamazsın !]
    $endif
    $onlyIf[$getGlobalUserVar[hesap;$authorID]!=yok;Hesap çalmadan satamazsın !]
$endif
    
    $if[$message[1] $message[2]==al 1]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];10000];$authorID]
    $setGlobalUserVar[silah;var;$authorID]
    $wait[1ms]
Silah satın alındı
Paranızdan Eksilen Miktar = \`10000\`
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<9999]!=true;Üzerinizde \`10000\` yok]
    $onlyIf[$getGlobalUserVar[silah;$authorID]!=var;Zaten silahın var niye alıyorsun ki ?]
    $endif
    $if[$message[1] $message[2]==al 2]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];100];$authorID]
    $setGlobalUserVar[eldiven;var;$authorID]
    $wait[1ms]
Eldiven satın alındı
Paranızdan Eksilen Miktar = \`100\`
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<99]!=true;Üzerinizde \`100\` yok]
    $onlyIf[$getGlobalUserVar[eldiven;$authorID]!=var;Zaten eldivenin var niye alıyorsun ki ?]
    $endif
    $if[$message[1] $message[2]==al 3]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];50000];$authorID]
    $setGlobalUserVar[taramalı;var;$authorID]
    $wait[1ms]
AK-47 markalı silah satın alındı
Paranızdan Eksilen Miktar = \`50000\`
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<49999]!=true;Üzerinizde \`50000\` yok]
    $onlyIf[$getGlobalUserVar[taramalı;$authorID]!=var;Zaten taramaı silahın var niye alıyorsun ki ?]
    $endif
    
    $onlyIf[$getGlobalUserVar[pc;$authorID]!=yok;Bilgisayarın olmadan deepweb'e erişemezsin]
    $onlyIf[$checkContains[$getGlobalUserVar[hackerlik;$authorID];Hacker]!=false;Buraya erişmeniz için yeterli bilginiz yok.]
    `
}