module.exports = {
	name:"birlikkur",
	bkz:["Tek olmaktan yoruldunmu. O zaman bir birlik kur ve kendi topluluğunu yönet"],
	code:`
	$setGlobalUserVar[birlik;$message;$authorID]
	$setGlobalUserVar[birliky;$authorID;$authorID]
	$setGlobalUserVar[birlikü;<@$authorID>/;$authorID]
	$setGlobalUserVar[birliküye;25;$authorID]
	$editMessage[$get[mesaj];$customEmoji[mevet;856156367891070976] Birlik başarıyla kuruldu.]
	$wait[2s]
	$editMessage[$get[mesaj];$customEmoji[myukleniyor;856156367891070976] Birlik üye sınırı ayarlanıyor]
	$wait[2s]
	$editMessage[$get[mesaj];$customEmoji[myukleniyor;856156367891070976] Birlik banka hesabı kuruluyor]
	$wait[2s]
	$setGlobalUserVar[birlik;$getGlobalUserVar[birlik;$clientID]$message/;$clientID]
	$wait[2s]
	$let[mesaj;$sendMessage[$customEmoji[myukleniyor;856156367891070976] Birlik adı yazılıyor;yes]]
	
	$setGlobalUserVar[coin;$sub[$getGlobalUserVar[coin;$authorID];35000];$authorID]
	$setGlobalUserVar[birlik;$getGlobalUserVar[birlik;$clientID]$message/;$clientID]	
	$onlyIf[$getGlobalUserVar[birlik;$authorID]==yok;Zaten bir birliğin var !]
	$setGlobalUserVar[birlikler;
  {$replaceText[$replaceText[$getGlobalUserVar[birlikler;$clientID];};];{;],
	"$messageüye":"1",
	"$messagebankasınır":"100000",
	"$messagebankapara":"0",
	"$messagey":"$authorID",
	"$messageüyesınır":"10"
};$clientID]
$wait[1s]
	$onlyIf[$checkContains[$getGlobalUserVar[birlik;$clientID];$message]!=true;Bu isimde bir birlik bulunuyor !]
	$onlyIf[$message!=;Birliğin adını gir.]
	$onlyIf[$checkCondition[34000>$getGlobalUserVar[coin;$authorID]]!=true;Üzerinde \`35000\` Para yok.]
		
	`
}