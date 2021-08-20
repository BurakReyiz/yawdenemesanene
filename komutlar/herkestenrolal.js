module.exports = {
  name:"herkesten-rol-al",
  code:`
  $channelSendMessage[$channelID;{description:<@&$mentionedRoles[1]> adlı rol herkesten alınıyor}{color:$getServerVar[hex]}]
  $forEachMember[zuzia]
   $onlyIf[$mentionedRoles[1]!=;:x: | **Bir rol etiketlemelisin**]
  $onlyIf[$authorID==$ownerID;:x: | **Bunun komut için __SUNUCU SAHİBİ__ olmalısın.**]
  $onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
  `
  }
