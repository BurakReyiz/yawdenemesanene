module.exports = {
	name:"birlikçek",
	bkz:["Eğer birliğinize yatırılan parayı çekmek isterseniz kullanabilirsiniz"],
	code:`
\`$getGlobalUserVar[birlik;$authorID]\` adlı birliğinden \`$message\` miktarında para çektin !
$setGlobalUserVar[birlikler;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]bankapara"] = $get[para]
istek;yes];$clientid]
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$message];$authorID]
$let[para;$sub[$get[bpara];$message]]
$onlyIf[$checkCondition[$message>$get[bpara]]!=true;Birliğinizde bu kadar para yok !]
$onlyIf[$checkCondition[1>$message]!=true;0 yada altında bir sayı giremezsin !]
$onlyIf[$isNumber[$message]!=false;Miktarın sayı olmalıdır !]
$onlyIf[$message!=;Miktar gir !]
$let[bpara;$djsEval[const bpara = $getGlobalUserVar[birlikler;$clientID]
bpara["$getGlobalUserVar[birlik;$authorID]bankapara"];yes]]
$let[bsınır;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]bankasınır"];yes]]
$let[bisim;$getGlobalUserVar[birlik;$authorID]]
$onlyIf[$get[sahip]==$authorID;Birlik lideri siz değilsiniz !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
$onlyIf[$getGlobalUserVar[birlik;$authorID]!=yok;Birliğiniz yok !]
	`
}