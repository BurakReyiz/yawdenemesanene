module.exports = {
  name:"yardım",
  aliases:"help",
  code:`
 $reactionCollector[$splitText[1];$authorID;30s;✅;onay;yes]
  $textSplit[$sendMessage[
\`
\`

\`Tepkiye basarak yardım menüsünü görebilirsiniz.\`
;yes]; ]
  `
  }
