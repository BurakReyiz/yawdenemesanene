module.exports = {
	name:"rehber",
	aliases:["guide"],
	bkz:["Eğer botta yeniyseniz A'dan Z'ye herşeyi detaylıca açıklar"],
	code:`
	$dm
	$color[GREEN]
	$author[Mustik Rehber Menüsü;$authorAvatar]
	$thumbnail[$userAvatar[$clientID]]
	$description[
Öncelikle selam <@$authorID>. Ekonomi Komutundan biraz bahsetmek gerekirse .
Diğer botlardan ayıran özelliğini sorarsan bir çok bug önceden fixlenmiş. Ve çoğu şey hard üzerinedir.
Mesela soygun komudu. Çoğu botta birisini soyduğunda kişinin tüm parasını alır. Ama bu botta bütün sistemler o kadar karmaşık ve farklı ki.
Şimdi oyuna başlamak için **mkişilik** yazarak kendini belirle.
Kötü bir adammı yoksa Kahramanmı olacağını belirle.
Böylece ilk rozetini alacaksın.
**miyilik** yazarak kahramanlık puanını arttırabilir
**msuç** yazarak kötülük puanını arttırabilirsin.
Eğer kötü iken fazla iyilik yada kahraman iken fazla suç yaparsan roller değişir. Kötü birisi iken kahraman olursun.
Şimdi kendi profilini incelemek için **mprofil** yazabilirsin. Ayriyetten etiket atarsan o kişinin profiline bakarsın.
Profil kısmı 3'e ayrılır. 1 Bölüm IC Kısımlar yani Senin Rolündeki eşyadır itemdir odur budur yer alır.
2.kısımda OOC Kısımlar yani iletişim bilgilerin ve discord bilgilerin
3.kısımda ise avatarın bu avatarı seçmek için **mavatar** ile standart avatarlara bakabilir ve **mgavatar <avatar kodu>** ile avatarını değiştirebilirsin.
Para kazanma yolları basit. Her 24 saatte bir **mgünlük** yazarak belli bir para ücreti alabilirsin.
**mçalış** yaparakta küçük bir ücret alabilirsin.
H-a bu arada botun bilerek para birimi yok arada lira geçiyor ama standart bir para birimi söz konusu değildir.
Her neyse devam edelim.
Para kazanmanın birçok yolu var.
Sana tavsiyem **msatınal 3** yazarak bıçak almayı unutma.
Eğer birisi soyarsa 5 saniye savunma hakkın var. Bu 5 saniye içinde savunmazsan belli bir miktar paran gider , savunursan karşıdaki kişinin -2500 parası gider.
Bide soymak için **msoygun @etiket** yazabilirsin. Ama sistem şöyle çalışır. 
Önce **msıralama para** ve **msıralama banka** ile sırayla liderlere bak para'daki kişiyi bulabilirsen hemen onu etiketle ve sunucuya bakmamasına dua et.
Eğer şanslıysan ilk günden zengin olabilirsin
Şimdi sana tavsiyem sürekli para kasıp **möğren hackerlik 1** yazarak **ip** ve **hesapçal** yapman böyle para kas ve **Profesyönel Hacker** olana kadar durma.
Profesyönel Hacker olursan daha fazla para kazanabilirsin.
Evet para kasmayı birnevi gösterdik.
Şimdi bazı şeyleri söyleyelim rozetler hakkında bilgiyi **mrozetler** ile görebilirsin.
Bota harika önerilerin varsa ki eminim vardır **möneri** ile söylemekten **ÇEKİNME**
ve bulduğun bugları lütfen **mbug** ile bildir. Eğer tespit edilirse **Hesabın 0'lanır**
	]
	$reply[$messageID;Özel Mesajınızı Kontrol Ediniz;yes]
	$onlyIf[$isUserDMEnabled!=false;Uzun bir metin olduğu için lütfen Direkt Mesajlar'ı Açın.]
	`
}