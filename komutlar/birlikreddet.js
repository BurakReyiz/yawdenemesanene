module.exports = {
	name:"birlikreddet",
	bkz:["Birliğe gelen isteği reddeder."],
	code:`
$setGlobalUserVar[istek;$filterMessage[$getGlobalUserVar[istek;$authorID];,$mentioned[1]];$authorID]
Birliğe Red Edilen Kişi: \`$userTag[$mentioned[1]]\`
Reddeden Lider: \`$userTag\`
Birlik İsmi: \`$getGlobalUserVar[birlik;$authorID]\`
$onlyIf[$checkContains[$getGlobalUserVar[istek;$authorID];$mentioned[1]]!=false;Bu kişi birliğe istek atmamış !]
$onlyIf[$mentioned[1]!=;İsteği reddedeceğin kişiyi etiketle !]
$onlyIf[$get[sahip]==$authorID;Bu birliğin lideri sen değilsin !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
	`
}