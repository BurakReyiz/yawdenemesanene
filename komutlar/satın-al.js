module.exports = {
        name: "satın-al",
        code: `$if[$message[1]==su]
        $description[Başarılı bir şekilde su aldın. $multi[1;$message[2]] $getServerVar[pbirim] paran eksildi.]
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$multi[1;$message[2]]];$authorID]
        $setUserVar[su;$sum[$getUserVar[su;$authorID];$message[2]];$authorID]
        $color[]
        $onlyIf[$getUserVar[para;$authorID]>=1;:x: | Yetersiz bakiye.]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
$endif
$if[$message[1]==ayran]
$description[Başarılı bir şekilde ayran aldın. $multi[1;$message[2]] $getServerVar[pbirim] paran eksildi.]
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$multi[1;$message[2]]];$authorID]
        $setUserVar[ayran;$sum[$getUserVar[ayran;$authorID];$message[2]];$authorID]
                $color[303136]
        $onlyIf[$getUserVar[para;$authorID]>=1;:x: | Yetersiz bakiye.]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
$endif
$if[$message[1]==simit]
$description[Başarılı bir şekilde simit aldın. $multi[2;$message[2]] $getServerVar[pbirim] paran eksildi.]
        $setUserVar[para;$sub[$getUserVar[para;$authorID];$multi[2;$message[2]]];$authorID]
        $setUserVar[simit;$sum[$getUserVar[simit;$authorID];$message[2]];$authorID]
                $color[303136]
        $onlyIf[$getUserVar[para;$authorID]>=2;:x: | Yetersiz bakiye.]
         $onlyIf[$isNumber[$message[2]]!=false;:x: | Yazdığın şey sayı değil.]
$endif
$if[$message[1]==rozet1]
$description[Başarılı bir şekilde 🔱 rozetini aldın. 100 $getServerVar[pbirim] paran eksildi.]
$setUserVar[para;$sub[$getUserVar[para;$authorID];100];$authorID]
$setUserVar[rozet1;true;$authorID]
 $color[303136]
        $onlyIf[$getUserVar[para;$authorID]>=100;:x: | Yetersiz bakiye.]
        $onlyIf[$getUserVar[rozet1;$authorID]!=true;:x: | Rozetin zaten var.]
$endif
$if[$message[1]==rozet2]
$description[Başarılı bir şekilde ⚜️ rozetini aldın. 200 $getServerVar[pbirim] paran eksildi.]
$setUserVar[para;$sub[$getUserVar[para;$authorID];200];$authorID]
$setUserVar[rozet2;true;$authorID]
 $color[303136]
        $onlyIf[$getUserVar[para;$authorID]>=200;:x: | Yetersiz bakiye.]
        
        $onlyIf[$getUserVar[rozet2;$authorID]!=true;:x: | Rozetin zaten var.]
$endif

$onlyIf[$checkContains[$toLowercase[$message[1]];su;ayran;simit;rozet1;rozet2]==true;:x: | Doğru kulanım.
\`$getServerVar[prefix]satın-al su 1 | $getServerVar[prefix]satın-al ayran 1 | $getServerVar[prefix]satın-al simit 1 | $getServerVar[prefix]satın-al rozet1 | $getServerVar[prefix]satın-al rozet2\`
]
        `
}