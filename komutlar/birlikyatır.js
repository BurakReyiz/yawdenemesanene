module.exports = {
	name:"birlikyatır",
	bkz:["Eğer birliğinize destek olmak istiyorsanız birliğe para yatırabilirsiniz"],
	code:`
\`$getGlobalUserVar[birlik;$authorID]\` Adlı birliğine \`$message\` miktarında para yatırdın !
$setGlobalUserVar[birlikler;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]bankapara"] = $get[para]
istek;yes];$clientid]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];$message];$authorID]
$let[para;$sum[$get[bpara];$message]]
$onlyIf[$checkCondition[$sum[$get[bpara];$message]>$get[bsınır]]!=true;Bu miktar birliğin miktarını aşıyor]
$onlyIf[$checkCondition[$message>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinde bu kadar miktarda para yok !]
$onlyIf[$checkCondition[$message>$get[bsınır]]!=true;Yazdığın miktar birliğin para miktarını aşıyor !]
$onlyIf[$checkCondition[1>$message]!=true;0 yada altında bir sayı giremezsin !]
$onlyIf[$isNumber[$message]!=false;Miktarın sayı olmalıdır !]
$onlyIf[$message!=;Miktar gir !]
$let[bpara;$djsEval[const bpara = $getGlobalUserVar[birlikler;$clientID]
bpara["$getGlobalUserVar[birlik;$authorID]bankapara"];yes]]
$let[bsınır;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]bankasınır"];yes]]
$let[bisim;$getGlobalUserVar[birlik;$authorID]]
$onlyIf[$getGlobalUserVar[birlik;$authorID]!=yok;Birliğiniz yok !]
	`
}