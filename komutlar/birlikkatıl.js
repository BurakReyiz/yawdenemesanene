module.exports = {
	name:"birlikkatıl",
	bkz:["ismini girdiğiniz birliğe katılırsınız."],
	code:`
$setGlobalUserVar[istek;$getGlobalUserVar[istek;$get[sahip]],$authorID;$get[sahip]]
\`$message\` Birliğine istek gönderdin.
Hey <@$get[sahip]>
<@$authorID> birliğinize katılmak istiyor !
Kabul etmek için **$getServerVar[prefix]birlikkabul @kişi** | Reddetmek için **$getServerVar[prefix]birlikreddet @kişi** yazmalısın
$onlyIf[$checkContains[$getGlobalUserVar[istek;$get[sahip]];$authorID]!=true;Bu birliğe istek göndermişsin !]
$onlyIf[$sub[$getTextSplitLength;1]!=$get[üye];Bu birliğin kapasitesi dolu !]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==$getGlobalUserVar[kişilik;$get[sahip]];\`$getGlobalUserVar[kişilik;$authorID]\` olduğun için bu birliğe giremezsin.]
$let[üye;$getGlobalUserVar[birliküye;$get[sahip]]]
$textSplit[$getGlobalUserVar[birlikü;$get[sahip]];/]
$let[sahip;$djsEval[const istek = $getGlobalUserVar[birlikler;$clientID]
istek["$messagey"];yes]]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]!=yok;Tarafını seçmemişsin !]
$onlyIf[$checkContains[$getGlobalUserVar[birlikler;$clientID];$message]!=false;Böyle bir birlik yok !]
$onlyIf[$message!=;Birlik Adı Gir !]
	$onlyIf[$getGlobalUserVar[birlik;$authorID]==yok;Zaten bir birliğin var !]
	`
}