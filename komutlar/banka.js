module.exports = {
name: "banka",
code: `$author[$username[$clientID] Ekonomi Yardım Menüsü;$userAvatar] $thumbnail[$authorAvatar[$clientID
$addField[🏦;\**Bankanda Şuan $getUserVar[banka;$mentioned[1;yes]] Paran Var**;]
$color[RANDOM]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların parası olmaz.]
`
}