module.exports = {
  name:"yakala",
  bkz:["Aranan kötüyü yakalamak için kullanılır"],
  code:`
$if[$getGlobalUserVar[karate;$authorID]$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[halat;$authorID]==yokyokyok]
*Kötü adamın yanına geldiğin gibi kaçtın çünkü dövüş sanatı bilmiyorsun*
$endif
$if[$getGlobalUserVar[koruma;$mentioned[1]]==var]
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==yokvar]
$endif
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==varyok]
  
$endif
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==varvar]
  
$endif
$endif
$if[$getGlobalUserVar[koruma;$mentioned[1]]==yok]
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==yokvar]
$endif
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==varyok]
  
$endif
$if[$getGlobalUserVar[boks;$authorID]$getGlobalUserVar[karate;$authorID]==varvar]
$editMessage[$get[mesaj];*Suçlarına göre cezası vesaire veriliyor...*]
$wait[3s]
$editMessage[$get[mesaj];**Adalet Birliği Üyelerini** çağırdın. \`$userTag[$mentioned[1]]\` kişisini yargıya çıkardın]
$wait[3s]
$editMessage[$get[mesaj];\`$userTag[$mentioned[1]]\` Kişisini hızlıca bayılttın ve cebindeki halatla bağladın.]
$wait[2s]
$let[mesaj;$sendMessage[\`$userTag[$mentioned[1]]\` Kişisine hızlıca yaklaşıp karate dövüş sanatlarından öğrendiklerini uyguluyorsun;yes]]
$endif
$endif
$onlyIf[$getGlobalUserVar[aranma;$mentioned[1]]!=yok;Aranan birisini etiketle !]
$onlyIf[$mentioned[1]!=;Kötü birini etiketle !]
$onlyIf[$getGlobalUserVar[kişilik;$authorID]==kahraman;]
`
}