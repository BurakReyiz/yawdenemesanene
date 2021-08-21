module.exports = {
name: "banka",
code: `
$addField[🏦;\Bankanda Şuan $getUserVar[banka;$mentioned[1;yes]] Paran Var;]
$color[hex]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların parası olmaz.]
`
}