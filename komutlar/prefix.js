module.exports = {
  name:"prefix",
  code:`
  $description[Prefix değişti yeni prefix: $message]
  $color[$getServerVar[hex]]
  $setServerVar[prefix;$message]
  $onlyIf[$message!=;:x: | Prefixi yazmalısın.]
  $onlyPerms[admin;:x: | Buna yetkin yok.]
  $onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
  `
}
