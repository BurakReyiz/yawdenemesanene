module.exports = {
	name:"birliğim",
	bkz:["Birliğin hakkında bilgi verir"],
	code:`
	$author[$getGlobalUserVar[birlik;$authorID] - Birlik Bilgileri]
	$color[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]]
	
	$description[
	💰 Birlik Banka Bilgisi: **$get[bpara]/$get[bsınır]**
	👥 Birlik Üye Durumu: **$sub[$getTextSplitLength;1]/$get[üye]**
	
	$customEmoji[mtac;856156367891070976] Birlik Sahibi: $userTag[$get[sahip]]
	👥 Birlik Üyeleri: $joinSplitText[ , ]
	$textSplit[$getGlobalUserVar[birlikü;$get[sahip]];/]
	👥 Bekleyen Üye İstekleri: $djsEval[const res = []
array.shift()
for(var i = 0;i <array.length;i++){
if(array.toString() === "") {
res.push("Bekleyen herhangi bir istek yok.")
break;
}
const tag = client.users.cache.get(array[i])
if(!tag){
res.push("Bilinmeyen")
continue}
res.push(tag.tag+" - <@"+array[i]+">")
}
res.join(" | ")
;yes]
$textSplit[$getGlobalUserVar[istek;$get[sahip]];,]
	
	]
	$if[$getGlobalUserVar[birliky;$authorID]==$authorID]
	$footer[Selam Birlik Sahibi $userTag;$authorAvatar]
	$endif
$let[üye;$getGlobalUserVar[birliküye;$get[sahip]]]
$let[bsınır;$getGlobalUserVar[birliksınır;$get[sahip]]]
$let[bpara;$djsEval[const bpara = $getGlobalUserVar[birlikler;$clientID]
bpara["$getGlobalUserVar[birlik;$authorID]bankapara"];yes]]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$getGlobalUserVar[birlik;$authorID]y"];yes]]
	
$onlyIf[$getGlobalUserVar[birlik;$authorID]!=yok;Birliğin yok.]
	`
}