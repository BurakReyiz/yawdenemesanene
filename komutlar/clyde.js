module.exports = {
name:"clyde",
code:` https://ctk-api.herokuapp.com/clyde/$replaceText[$message; ;+;-1] 
$onlyIf[$checkContains[$toLowercase[$message];ı;ş;ö;ü;ç;ğ;I;Ş;Ö;Ü;Ç;Ğ]!=true;Lütfen mesajında türkçe harf bulundurma!]
$onlyIf[$getVar[bakım]==no;:warning: Üzgünüm Bakımdayım.]
`
}