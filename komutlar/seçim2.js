module.exports = {
	name:"teslimolma",
	code:`
$setGlobalUserVar[seçim;yok;$authorID]
$wait[1s]
$if[$getGlobalUserVar[şans;$authorID]==win]
$editMessage[$get[mesaj];*Son 2 Polise 3-4 mermi sıkarak öldürdün*]
$wait[1s]
$editMessage[$get[mesaj];*Diğer Polisi karnından yaraladın*]
$wait[1s]
$editMessage[$get[mesaj];*1 Polisi kafasından vurarak öldürdün*]
$wait[1s]
$if[$getGlobalUserVar[çuval;$authorID]==yok]
*50000 Para ile kaçtın*
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];50000];$authorID]
$endif
$if[$getGlobalUserVar[çuval;$authorID]==var]
*150000 Para ile kaçtın*
$setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];150000];$authorID]
$endif
$endif
$if[$getGlobalUserVar[şans;$authorID]==lose]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];250000];$authorID]
$setGlobalUserVar[taramalı;yok;$authorID]
$setGlobalUserVar[çuval;yok;$authorID]
$setGlobalUserVar[maske;yok;$authorID]
$editMessage[$get[mesaj];***250000** Para cezası yedin*]
$wait[1s]
$editMessage[$get[mesaj];*Kaçamadın ve teslim oldun*]
$wait[1s]
$editMessage[$get[mesaj];*Diğer polisler elini vurdu ve elindeki AK-47 düştü*]
$wait[1s]
$editMessage[$get[mesaj];*1 Polisi kafasından vurarak öldürdün*]
$endif
$wait[1s]
$let[mesaj;$sendMessage[*Hızlıca bir arabaya pusup polisler ile çatışıyorsun*;yes]]
$onlyIf[$getGlobalUserVar[seçim;$authorID]!=yok;]
	`
}