module.exports = {
  name:"prefix",
  code:`
  $description[Prefix değişti yeni prefix: $message]
  $color[$getServerVar[hex]]
  $setServerVar[prefix;$message]
  $onlyIf[$message!=;:x: | Mesajının Yanına Yazılacak Prefixi yazmalısın.]
  $onlyPerms[admin;:x: | Buna Yetkin Yok.]
  
  `
}
