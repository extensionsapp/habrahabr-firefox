var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: [ /.*habrahabr\.ru\/feed\/all.*/, /.*habrahabr\.ru\/posts\/top\/daily.*/ ],
    contentScriptWhen: "end",
    contentScriptFile: data.url("habr.js")
});