module.exports = {
  name:"yardım",
  aliases:"help",
  code:`
 $reactionCollector[$splitText[1];$authorID;30s;✅;onay;yes]
  $textSplit[$sendMessage[
\`
\`
$textSplit[$sendMessage[$image https://media.discordapp.net/attachments/837255566979235900/864783974807502888/standard_1.gif
\`Tepkiye basarak yardım menüsünü görebilirsiniz.\`
;yes]; ]
  `
  }
