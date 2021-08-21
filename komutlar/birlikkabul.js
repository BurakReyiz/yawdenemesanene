module.exports = {
	name:"birlikkabul",
	bkz:["Birliğe gelen isteği kabul eder."],
	code:`
$setGlobalUserVar[birlik;$getGlobalUserVar[birlik;$authorID];$mentioned[1]]
$setGlobalUserVar[birlikü;$getGlobalUserVar[birlikü;$authorID]<@$mentioned[1]>/;$authorID]
$setGlobalUserVar[istek;$filterMessage[$getGlobalUserVar[istek;$authorID];,$mentioned[1]];$authorID]
Birliğe Kabul Edilen Kişi: \`$userTag[$mentioned[1]]\`
Kabul Eden Lider: \`$userTag\`
Birlik İsmi: \`$getGlobalUserVar[birlik;$authorID]\`
$onlyIf[$checkContains[$getGlobalUserVar[istek;$authorID];$mentioned[1]]!=false;Bu kişi birliğe istek atmamış !]
$onlyIf[$getGlobalUserVar[birlik;$mentioned[1]]==yok;Bu kişi başka birlikte !]
$onlyIf[$mentioned[1]!=;Birliğe kabul edeceğin kişiyi etiketle !]
$onlyIf[$get[sahip]==$authorID;Bu birliğin lideri sen değilsin !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
	`
}