module.exports = {
        name: "cüzdan",
        code: `$author[$userTag[$mentioned[1;yes]]'in Cüzdanı.]
        $description[
        $addField[$userTag[$mentioned[1;yes]]'in Kullanıcının Cebinde $getServerVar[pbirim] $getUserVar[para;$mentioned[1;yes]];Para Var]
        $color[RANDOM]
        $thumbnail[$userAvatar[$mentioned[1;yes]]]
        $onlyIf[$isBot[$mentioned[1;yes]]!=true;:x: | Dostum bu bir bot. Botların parası olmaz.]]
        
        
        `
}