module.exports = {
	name:"param",
	aliases:["para","bakiye","cüzdan","money","cash"],
	bkz:["Etiketlenen kişinin bakiye durumuna bakabilirsin"],
	code:`
    $color[$replaceText[$replaceText[$replaceText[$getGlobalUserVar[kişilik;$authorID];kötü;RED];kahraman;GREEN];yok;BLACK]]
    $description[
Kişi: \`$userTag[$mentioned[1;yes]]\`
Kişinin Üstündeki Para: \`$getGlobalUserVar[coin;$mentioned[1;yes]]\`
Kişinin Banka Durumu: \`$getGlobalUserVar[bcoin;$mentioned[1;yes]]/$getGlobalUserVar[bsınır;$mentioned[1;yes]]\`
    ]
    $author[Sorgulanan Kişi = $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]
    $footer[Sorgulayan = $username;$authorAvatar]
    $thumbnail[$userAvatar[$clientID]]
	`
}