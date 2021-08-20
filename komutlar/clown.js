module.exports = ({
name:"palyaço",
code:`$color[$getServerVar[hex]]
$image[https://frenchnoodles.xyz/api/endpoints/clown/?image=$userAvatar[$mentioned[1;yes]]]
$footer[Kullanıcı:$username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getGlobalUserVar[bakım;310301496824561666]!=evet;:lock: Bakım Modu Açık Lütfen Daha Sonra Tekrar Deneyiniz]
`
})
