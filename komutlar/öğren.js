module.exports = {
    name:"öğren",
    bkz:["Bazı şeyleri öğrenip kendinizi geliştirebilirsiniz"],
    code:`
    $if[$checkCondition[$message[1]==hackerlik]$checkCondition[$message[1]==boks]$checkCondition[$message[1]==karate]==falsefalsefalse]
    Ne öğreneceğini belirle
--> hackerlik
--> boks
--> karate
$endif
  $if[$message[1]==boks]  
Boks Öğrenildi 🥊
    $setGlobalUserVar[boks;var;$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];500];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<499]!=true;Bu dersi alabilmek için yeterli miktarda paranız bulunmamaktadır.]
    $onlyIf[$checkContains[$getGlobalUserVar[boks;$authorID];var]!=true;Zaten boks biliyorsunuz.]
    $endif
  $if[$message[1]==karate]  
Karate Öğrenildi 🥋
    $setGlobalUserVar[karate;var;$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];500];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<499]!=true;Bu dersi alabilmek için yeterli miktarda paranız bulunmamaktadır.]
    $onlyIf[$checkContains[$getGlobalUserVar[karate;$authorID];var]!=true;Zaten karate biliyorsunuz.]
    $endif
    $if[$message[1]==hackerlik]
    $if[$message[2]==]
    Hackerlik türünü seçin.
Kolay Bilgiler = 5000 Para  | İçindekiler: Dosya kilitlerini açma , IP Adresi çalma , IP Adresi ile yapılabilecekler öğrenme
\`möğren hackerlik 1\`
Orta bilgiler = 10000 Para | İçindekiler: Üsttekiler dahil , Başka bir sistemi ele geçirme
\`möğren hackerlik 2\`
Zor bilgiler = 15000 Para | İçindekiler: Üsttekiler dahil , üst makamlardaki sistemlere erişme , banka atmlerine erişme 
\`möğren hackerlik 3\`
    $endif
    $endif
    $if[$message[2]==1]
Hackerlik dersi alındı.
Artık Dosya kilitlerini açabilir , IP Adresi çalabilirsin.
    $setGlobalUserVar[hackerlik;Amatör Hacker;$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];4999];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<4999]!=true;Bu dersi alabilmek için yeterli miktarda paranız bulunmamaktadır.]
    $onlyIf[$checkContains[$getGlobalUserVar[hackerlik;$authorID];Profesyönel;Gelişmiş;Amatör]!=true;Daha üst seviye öğrenmişsiniz.]
    $endif
    $if[$message[2]==2]
Hackerlik dersi alındı.
Banka bir sistemi ele geçirebilirsin
    $setGlobalUserVar[hackerlik;Gelişmiş Hacker;$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];9999];$authorID]
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<9999]!=true;Bu dersi alabilmek için yeterli miktarda paranız bulunmamaktadır.]
    $onlyIf[$checkContains[$getGlobalUserVar[hackerlik;$authorID];Profesyönel;Gelişmiş]!=true;Daha üst seviye öğrenmişsiniz.]
    $endif
    $if[$message[2]==3]
$channelSendMessage[$channelID;Hackerlik dersi alındı.
Artık ATM'leri soyabilirsin;no]
    $setGlobalUserVar[hackerlik;Profesyönel Hacker;$authorID]
    $setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];14999];$authorID]
    $if[$message[2] $checkContains[$getGlobalUserVar[rozetler;$authorID];hacker]==3 false]
    $dm[$authorID]
    $color[BLACK]
    $author[Özel Bir Rozet Kazanıldı;$authorAvatar]
    $thumbnail[$authorAvatar]
    $description[> Kazanılan Rozet: 🎩
    > Rozet Açıklaması: Ben hackerim.
    Selam Çoğu şeyi öğrenmiş hacker.
    Artık daha kolay para kazanacağına eminim.
    Bu yolu sen seçtin.
    İster ATM Soyabilirsin ve günde 10binlerce para kazanabilirsin.
    İster hesap çalabilir deli gibi satış yapabilirsin
    Yada IP Çalabilir ve zor olarak para kazanabilirsin.
    Bu senin yolun kolay gelsin]
    $setGlobalUserVar[rozetler;$getGlobalUserVar[rozetler;$authorID]hacker/;$authorID]
    $endif
    $onlyIf[$checkCondition[$getGlobalUserVar[coin;$authorID]<14999]!=true;Bu dersi alabilmek için yeterli miktarda paranız bulunmamaktadır.]
    $onlyIf[$checkContains[$getGlobalUserVar[hackerlik;$authorID];Profesyönel]!=true;Zaten herşeyi biliyorsun ?]
    $endif
    `
}