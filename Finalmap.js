class Finalmap extends Phaser.Scene {
    constructor() {
        super("Finalmap")
    }
    create() {
        console.log("FinalMap Scene ")
        this.background = this.add.image(265, 475, "background").setScale(0.27, 0.35);
        this.rectangle = this.add.image(260, 120, "rectangle").setScale(0.2).setInteractive({ cursor: 'pointer' })
        this.text = this.add.text(160, 105, "Download and Try ", {
            fontSize: '25px',
            fontFamily: 'Arial'
        });
        this.text.setInteractive({
            cursor: 'pointer'
        })
        this.rectangle.on('pointerdown', function() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.paradyme.solarmash";
        }, this);
        this.text.on('pointerdown', function() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.paradyme.solarmash";
        }, this)
        var planet1 = this.add.image(100, 300, 'planet_13').setScale(0.5);
        var planet_2 = this.add.image(470, 450, 'planet_14').setScale(0.35);
        var maskSolar = this.add.image(50, 900, 'mask').setScale(0.3);
        // var tween = this.tweens.add({
        //     targets: planet_2,
        //     x: 470,
        //     y: 451,
        //     ease: 'Linear',
        //     yoyo: false,
        //     repeat: -1,
        //     rotation: 180,
        //     duration: 20000

        // onUpdate: function(tween) {
        //     planet_2.setAngle(tween.getValue())
        // }
        // })
        this.button = this.add.image(260, 800, "playnow").setScale(0.3).setInteractive({ cursor: 'pointer' });
        this.buttonText = this.add.text(220, 780, "Play Now", {
            fontSize: '25px',
            fontFamily: 'Arial'
        }).setInteractive({ cursor: 'pointer' })
        this.button.on('poimterdown', function() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.paradyme.solarmash";
        }, this)
        this.buttonText.on('poimterdown', function() {
            window.location.href = "https://play.google.com/store/apps/details?id=com.paradyme.solarmash";
        }, this)
    };

}