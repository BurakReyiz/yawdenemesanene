module.exports = {
        name: "günlük",
        code: `$description[$randomText[250;300;350;400] $getServerVar[pbirim] para günlük aldın. 12 saat sonra tekrar gel]
        $setUserVar[para;$sum[$getUserVar[para;$authorID];$randomText[250;300;350;400]];$authorID]
        $cooldown[12s;:x: | 12 saat'te bir günlük alabilirsin.]
        $color[303136]`
}