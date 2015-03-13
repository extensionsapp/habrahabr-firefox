var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: [ /.*habrahabr\.ru\/all.*/, /.*habrahabr\.ru\/feed\/all.*/, /.*habrahabr\.ru\/feed\/interesting.*/ ],
    contentScriptWhen: "end",
    contentScriptFile: data.url("habr.js")
});
