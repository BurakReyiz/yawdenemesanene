module.exports = {
	name:"birlikgüncelle",
	bkz:["Birlik ayarlarını değiştirir"],
	code:`
$if[$checkCondition[$message[1]==kurallar]$checkCondition[$message[1]==isim]==falsefalse]
Sadece \`kurallar\` ve \`isim\` kullanabilirsin !
> Not: İsim değiştirmek **15.000** Para kesecektir.
$endif
$if[$message[1]==kurallar]
Birlik kuralları güncellenmiştir.
$setGlobalUserVar[bkurallar;$messageSlice[1];$authorID]
$onlyIf[$message[2]!=;Kurallarınızı yazınız.]
$endif
$if[$message[1]==isim]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];15000];$authorID]
$setGlobalUserVar[birlikler;$replaceText[$getGlobalUserVar[birlikler;$clientID];$get[bisim];$messageSlice[1]];$clientID]
$replaceText[$djsEval[array.pop()
for(const r of array){
d.client.db.set("main", "birlik_"+r, "$messageSlice[1]")
};yes];true;Birlik ismi güncellenmiştir]
$textSplit[$replaceText[$replaceText[$getGlobalUserVar[birlikü;$get[sahip]];<@;];>;];/]
$onlyIf[$checkCondition[14999>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinizde \`15.000\` Para yok]
$onlyIf[$message[2]!=;Yeni birlik ismini giriniz !]
$endif
$let[bisim;$getGlobalUserVar[birlik;$authorID]]
$onlyIf[$get[sahip]==$authorID;Bu komutu sadece lider kullanabilir !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]	`
}