module.exports = {
        name: "cüzdan",
        code: `$author[$userTag[$mentioned[1;yes]]'in Cüzdanı.]
        $description[**Kullanıcının Cebinde $getServerVar[pbirim] $getUserVar[para;$mentioned[1;yes]]
        Cüzdanında $getServerVar[KrediKartı][1;]] Tane Kredi Kartı Var.**]
        $color[RANDOM]
        $thumbnail[$userAvatar[$mentioned[1;yes]]]
        $onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların parası olmaz.]]
        
        
        `
}