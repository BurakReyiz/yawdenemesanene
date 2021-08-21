module.exports = {
	name:"birlikayrıl",
	bkz:["Olduğunuz birlikten ayrılırsınız"],
	code:`
$setGlobalUserVar[birlik;yok;$authorID]
$setGlobalUserVar[birlikü;$filterMessage[$getGlobalUserVar[birlikü;$get[sahip]];<@$authorID>/];$get[sahip]]
\`$getGlobalUserVar[birlik;$authorID]\` adlı birlikten başarıyla ayrıldın.
$onlyIf[$get[sahip]!=$authorID;Kendi birliğinden ayrılamazsın !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
$onlyIf[$getGlobalUserVar[birlik;$authorID]!=yok;Zaten bir birliğin yok !]
`
}