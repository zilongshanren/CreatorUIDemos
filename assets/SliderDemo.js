cc.Class({
    extends: cc.Component,

    properties: {
        slider: cc.Slider,
        progressBar: cc.ProgressBar
    },

    // use this for initialization
    onLoad: function () {
        this.updateProgressBar();
    },

    updateProgressBar () {
        if (this.slider && this.progressBar) {
            this.progressBar.progress = this.slider.progress;
        }
    }
});
