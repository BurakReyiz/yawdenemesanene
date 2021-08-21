module.exports = {
	name:"teslimol",
	code:`
$setGlobalUserVar[seçim;yok;$authorID]
$setGlobalUserVar[taramalı;yok;$authorID]
$setGlobalUserVar[çuval;yok;$authorID]
$setGlobalUserVar[maske;yok;$authorID]
$wait[1s]
$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];150000];$authorID]
$editMessage[$get[mesaj];*Teslim oldun ama bir çok güvenlik görevlisi öldürdüğün için **150000** Para cezası yedin*]
$wait[2s]
$editMessage[$get[mesaj];*Polisler Silahına ve Torbana el koydu.*]
$wait[2s]
$let[mesaj;$sendMessage[*Ellerini havaya kaldırdın ve teslim oldun*;yes]]
$onlyIf[$getGlobalUserVar[seçim;$authorID]!=yok;]
	`
}