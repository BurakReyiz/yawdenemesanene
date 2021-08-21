module.exports = {
name: "banka",
code: `
$addField[🏦;\Bankanda Şuan $getUserVar[banka;$mentioned[1;yes]] Paran Var]
$color[hex]
$onlyİf[isBot[mentioned[1;yes]]!=true;:x: | Dostum Bu Bir Bot Botların Parası Olmaz.]
`
}