module.exports = {
	name:"birlikkurallar",
	bkz:["Birliğin kurallarını gösterir"],
	code:`
	$author[$getGlobalUserVar[birlik;$authorID] - Birlik Kuralları]
	$color[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]]
	$description[$getGlobalUserVar[bkurallar;$get[sahip]]]
	$footer[Sorgulayan - $userTag;$authorAvatar]
	$onlyIf[$getGlobalUserVar[bkurallar;$get[sahip]]!=yok;Birliğinizin kuralları yazılmamış !]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
$onlyIf[$getGlobalUserVar[birlik;$authorID]!=yok;Bir birlikte bulunmuyorsun !]`
}