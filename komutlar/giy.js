module.exports = {
  name:"giy",
  bkz:["Bazı giyilebilir itemler bulunur"],
  code:`
  $if[$message==maske]
  Maske takıldı.
  $setGlobalUserVar[maske;giydi;$authorID]
  $onlyIf[$getGlobalUserVar[maske;$authorID]!=giydi;Giydiğin maskeyi giyemezsin]
  $onlyIf[$getGlobalUserVar[maske;$authorID]!=yok;Olmayan maskeyi giyemezsin]
  $endif
  $if[$message!=maske]
  Maske harici birşey giyemezsin
  $endif
  `
}