module.exports = {
	name:"birlikat",
	bkz:["Birlikteki birini atar."],
	code:`
$setGlobalUserVar[birlik;yok;$mentioned[1]]
$setGlobalUserVar[birlikü;$filterMessage[$getGlobalUserVar[birlikü;$authorID];<@$mentioned[1]>/];$authorID]
Birlikten Atılan Kişi: \`$userTag[$mentioned[1]]\`
Atan Lider: \`$userTag\`
Birlik İsmi: \`$getGlobalUserVar[birlik;$authorID]\`
$onlyIf[$mentioned[1]!=$authorID;Kendini atamazsın !]
$onlyIf[$mentioned[1]!=;Birlikten atacağın kişiyi etiketle !]
$onlyIf[$checkContains[$getGlobalUserVar[birlikü;$authorID];$mentioned[1]]!=false;Bu kişi birlikte değil !]
$onlyIf[$get[sahip]==$authorID;Bu birliğin lideri sen değilsin !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
	`
}