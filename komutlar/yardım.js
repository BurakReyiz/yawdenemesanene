module.exports = {
  name:"yardım",
  aliases:"help",
  code:`
 $reactionCollector[$splitText[1];$authorID;30s;✅;onay;yes]
  $textSplit[$sendMessage[
{image:https://media.discordapp.net/attachments/837255566979235900/864783974807502888/standard_1.gif}
🤖 Destek Sunucum= https://discord.gg/QtffYC2Ubd

📥 Davet Linkim= https://discord.com/oauth2/authorize?client_id=856499683929489438&scope=bot&permissions=0

\`📚 Tepkiye Basarak Yardım Menüsünü Grebilirsiniz 📚\`
;yes]; ]

  `
  }
