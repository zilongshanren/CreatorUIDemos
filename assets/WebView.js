cc.Class({
    extends: cc.Component,

    properties: {
        webview: cc.WebView
    },

    // use this for initialization
    onLoad: function () {
        if (this.webview && CC_JSB) {
            this.webview._sgNode.loadFile(cc.url.raw("resources/Test.html"));
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
