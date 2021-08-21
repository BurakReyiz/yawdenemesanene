module.exports = {
    name:"günlük",
    bkz:["Günlük ödülünüzü verir"],
    code:`
    $setGlobalUserVar[coin;$sum[$getGlobalUserVar[coin;$authorID];$random[150;300]];$authorID]
    $editIn[1s;Evet Günlük Sandık Açılıyor **5**;Evet Günlük Sandık Açılıyor **4**;Evet Günlük Sandık Açılıyor **3**;Evet Günlük Sandık Açılıyor **2**;Evet Günlük Sandık Açılıyor **1**;Ödülün $username = **$random[150;300]** Tebrikler :tada:]
    Evet Günlük Sandık Açılıyor - **$username**
    
    $globalCooldown[24h;Ödülünüzü **$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[24h;globalUser;günlük;$authorID];s;];hour;Saat];minute;Dakika];econd;Saniye];and;]** sonra alabilirsiniz]
    `
}