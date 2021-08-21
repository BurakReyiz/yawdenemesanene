module.exports = {
    name:"satınal",
    bkz:["Marketten item almak için kullanabilirsiniz"],
    aliases:["satın-al","buy"],
    code:`
    $if[$checkCondition[$message[1]==1]$checkCondition[$message[1]==5]$checkCondition[$message[1]==2]$checkCondition[$message[1]==3]$checkCondition[$message[1]==4]$checkCondition[$message[1]==a1]$checkCondition[$message[1]==a2]$checkCondition[$message[1]==a3]$checkCondition[$message[1]==a4]$checkCondition[$message[1]==a5]==falsefalsefalsefalsefalsefalsefalsefalsefalse]
    Yazdığınız kod markette bulunmuyor !
    $endif
    $if[$message[1]==1]
    Padlock Envantere Eklenmiş ve bankana kurulmuştur.
Bu item sizden gitmeyecek ve hırsızlar sizin bankanızı soymaya çalışamayacaktır.
Paranızdan Eksilen Miktar = \`5000\`    
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];5000];$authorID]
    $setGlobalUserVar[padlock;var;$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<4999]!=true;Maalesef yeterli miktarda paranız bulunmamaktadır]
    $onlyIf[$getGlobalUserVar[padlock;$authorID]!=var;Boşa para verme zaten bu item sende bulunmakta]
    $endif
    
    $if[$message[1]==2]
    $setGlobalUserVar[bsınır;$truncate[$multi[$getGlobalUserVar[bsınır;$authorID];1.5]];$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];5000];$authorID]
Banka sınırı arttırıldı.
Yeni sınır = \`$getGlobalUserVar[bcoin;$authorID]/$truncate[$multi[$getGlobalUserVar[bsınır;$authorID];1.5]]\`
$onlyIf[$checkCondition[4999>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinizde \`5000\` Para yok !]
    $endif
    
    $if[$message[1]==3]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];50];$authorID]
    $setGlobalUserVar[bıçak;var;$authorID]
    $setGlobalUserVar[savun;var;$authorID]
    $wait[1ms]
Bıçak alınmıştır
Artık kendinizi hırsızlardan koruyabilirsiniz
Paranızdan Eksilen Miktar = \`50\`
    $onlyIf[$getGlobalUserVar[bıçak;$authorID]!=var;Zaten bıçağın var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<49]!=true;Üzerinizde \`50\` Lira yok]
    $endif
    $if[$message[1]==4]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];50];$authorID]
    $setGlobalUserVar[maske;var;$authorID]
    $wait[1ms]
Maske alınmıştır
Artık önemli işlerde yüzünüzü gizleyebilirsiniz
Paranızdan Eksilen Miktar = \`50\`
        $onlyIf[$getGlobalUserVar[maske;$authorID]==yok;Zaten masken var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<49]!=true;Üzerinizde \`50\` Lira yok]
    $endif
    $if[$message[1]==5]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];10000];$authorID]
    $setGlobalUserVar[pc;var;$authorID]
    $wait[1ms]
Bilgisayar Alınmıştır
Paranızdan Eksilen Miktar = \`10000\`
    $onlyIf[$getGlobalUserVar[pc;$authorID]!=var;Zaten bilgisayarın var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<9999]!=true;Üzerinizde \`10000\` Lira yok]
    $endif
     $if[$message[1]==6]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];15];$authorID]
    $setGlobalUserVar[çuval;var;$authorID]
    $wait[1ms]
Çuval
Paranızdan Eksilen Miktar = \`15\`
    $onlyIf[$getGlobalUserVar[çuval;$authorID]!=var;Zaten çuvalın var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<14]!=true;Üzerinizde \`15\` Lira yok]
    $endif
$if[$message[1]==7]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];3000];$authorID]
    $setGlobalUserVar[3;var;$authorID]
    $wait[1ms]
Gümüş yüzük alındı
Paranızdan Eksilen Miktar = \`3000\`
*Evlilik teklifi etmek için **mevlilik <kişi>***
    $onlyIf[$getGlobalUserVar[3;$authorID]!=var;Zaten gümüş yüzüğün var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2999]!=true;Üzerinizde \`3000\` Para yok]
    $endif
$if[$message[1]==8]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];8000];$authorID]
    $setGlobalUserVar[2;var;$authorID]
    $wait[1ms]
Altın yüzük alındı
Paranızdan Eksilen Miktar = \`8000\`
*Evlilik teklifi etmek için **mevlilik <kişi>***
    $onlyIf[$getGlobalUserVar[2;$authorID]!=var;Zaten altın yüzüğün var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<7999]!=true;Üzerinizde \`8000\` Para yok]
    $endif
$if[$message[1]==9]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];15000];$authorID]
    $setGlobalUserVar[1;var;$authorID]
    $wait[1ms]
Elmas yüzük alındı
Paranızdan Eksilen Miktar = \`15000\`
*Evlilik teklifi etmek için **mevlilik <kişi>***
    $onlyIf[$getGlobalUserVar[1;$authorID]!=var;Zaten elmas yüzüğün var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<14999]!=true;Üzerinizde \`15000\` Para yok]
    $endif
$if[$message[1]==11]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];50];$authorID]
    $setGlobalUserVar[halat;var;$authorID]
    $wait[1ms]
Halat alındı <:mhalat:862023703676321822>
Paranızdan Eksilen Miktar = \`50\`
    $onlyIf[$getGlobalUserVar[halat;$authorID]!=var;Zaten halatın var niye alıyorsun ki ?]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<49]!=true;Üzerinizde \`50\` Para yok]
    $endif
    
    $if[$message[1]==a1]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$authorID]
    $setGlobalUserVar[a1;var;$authorID]
    $wait[1ms]
1 Numaralı Avatar Alınmıştır
Paranızdan Eksilen Miktar = \`2500\`
    $onlyIf[$getGlobalUserVar[a1;$authorID]!=var;Zaten alınmış !]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2499]!=true;Üzerinizde \`2500\` Lira yok]
    $endif
    $if[$message[1]==a2]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$authorID]
    $setGlobalUserVar[a2;var;$authorID]
    $wait[1ms]
2 Numaralı Avatar Alınmıştır
Paranızdan Eksilen Miktar = \`2500\`
    $onlyIf[$getGlobalUserVar[a2;$authorID]!=var;Zaten alınmış !]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2499]!=true;Üzerinizde \`2500\` Lira yok]
    $endif
    $if[$message[1]==a3]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$authorID]
    $setGlobalUserVar[a3;var;$authorID]
    $wait[1ms]
3 Numaralı Avatar Alınmıştır
Paranızdan Eksilen Miktar = \`2500\`
    $onlyIf[$getGlobalUserVar[a3;$authorID]!=var;Zaten alınmış !]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2499]!=true;Üzerinizde \`2500\` Lira yok]
    $endif
    $if[$message[1]==a4]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$authorID]
    $setGlobalUserVar[a4;var;$authorID]
    $wait[1ms]
4 Numaralı Avatar Alınmıştır
Paranızdan Eksilen Miktar = \`2500\`
    $onlyIf[$getGlobalUserVar[a4;$authorID]!=var;Zaten alınmış !]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2499]!=true;Üzerinizde \`2500\` Lira yok]
    $endif
    $if[$message[1]==a5]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];2500];$authorID]
    $setGlobalUserVar[a5;var;$authorID]
    $wait[1ms]
5 Numaralı Avatar Alınmıştır
Paranızdan Eksilen Miktar = \`2500\`
    $onlyIf[$getGlobalUserVar[a5;$authorID]!=var;Zaten alınmış !]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<2499]!=true;Üzerinizde \`2500\` Lira yok]
    $endif
    `
}