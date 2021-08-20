module.exports = {
  name:"yardım",
  aliases:"help",
  code:`
$reactionCollector[$splitText[1];$authorID;30s;✅;onay;yes]
$textSplit[$sendMessage[
{image:https://media.discordapp.net/attachments/837255566979235900/864783974807502888/standard_1.gif}{author:$userTag:$authorAvatar}{description:
$customEmoji[welcome] [Destek Sunucum](https://discord.gg/QtffYC2Ubd)

$customEmoji[gelengiden] [Davet Linkim](https://discord.com/oauth2/authorize?client_id=856499683929489438&scope=bot&permissions=0)

> **📚 Tepkiye Basarak Yardım Menüsünü Girebilirsiniz 📚**}{footer:Mixden Yardım Menüsü}{thumbnail:$authorAvatar}{delete:12s}{color:$getServerVar[hex]}
;yes]; ] 
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]

  `
  }
