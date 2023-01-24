// var x = false;
// var startScene = false;
// var ellipse1;
// var ellipse2;
// var ellipse3;
// var checkPointer = false;
// var count = 0;
// var callfun = false;
// // var checkClick = false;
// var loadhalfdestroy = false;
// var loadfulldestroy = false;


class Game extends Phaser.Scene {
    constructor() {
        super("Game")
    }
    create() {
        console.log("game ")
        this.background = this.add.image(225, 500, "background").setScale(0.4)
        this.rectangle = this.add.image(260, 120, "rectangle").setScale(0.2)
        this.text = this.add.text(190, 105, "Tap on Planets ", {
            fontSize: '25px',
            fontFamily: 'Arial'
        })
        this.planetImage = this.add.image(250, 350, "planet_2").setScale(0.3).setInteractive({ cursor: 'pointer' });
        // this.textTap = this.add.text(440, 330, "Tap Here ", {
        //         fontSize: '20px',
        //         fontFamily: 'Arial'
        //     })
        // this.fingerasset = this.add.image(410, 330, 'finger').setScale(0.2);
        // this.fingerasset.angle = 50
        // this.tweens1 = this.tweens.add({
        //     targets: [this.fingerasset, this.textTap],
        //     x: 430,
        //     y: 320,
        //     repeat: -1,
        //     duration: 300,
        //     yoyo: true,

        // })
        this.planetImage.on('pointerdown', function() {
            if (checkClick == false) {
                callfun = true;
            }
        });
        timeout = setTimeout(function() {
            checkPointer = true;
        }, 3000)
    }

    startScene() {

        count++;
        console.log(count)
        if (count == 1) {
            this.vectorimage1 = this.add.image(250, 350, "vector_5").setScale(0.4);
            this.vectorimage4 = this.add.image(250, 350, "vector_6").setScale(0.2);
            x = true;
        } else if (count == 2) {
            this.planetImage.setAlpha(0);
            // this.fingerasset.setAlpha(0);
            // this.textTap.setAlpha(0);
            this.vectorimage1 = this.add.image(250, 350, "vector_6").setScale(0.25);
            this.vectorimage5 = this.add.image(250, 350, "vector_5").setScale(0.25);
            x = true;
            setTimeout(function() {
                startScene = true;
            }, 1000);
        } else if (count == 3) {
            this.vectorimage1.setAlpha(0);
            this.vectorimage5.setAlpha(0);
            this.vectorimage6 = this.add.image(250, 350, "vector_4").setScale(0.25);
            this.vectorimage7 = this.add.image(250, 355, "vector_4").setScale(0.25);
            this.vectorimage7.angle = 180
        } else {
            x = true;
            return;
        }
        // }, this);
    }
    call() {
        ellipse1 = this.add.image(250, 350, 'ellipse_1').setScale(0.3);
        this.tweens.add({
            targets: [ellipse1],
            x: 450,
            y: 300,
            yoyo: false,
            duration: 100,
            ease: 'Sine.easeInOut',
            repeat: 0,
            onComplete: function() {
                this.call1();
            },
            onCompleteScope: this
        });
    }
    call1() {
        ellipse2 = this.add.image(250, 350, 'ellipse_2').setScale(0.3);
        this.tweens.add({
            targets: [ellipse2],
            x: 450,
            y: 300,
            yoyo: false,
            duration: 100,
            ease: 'Sine.easeInOut',
            repeat: 0,
            onComplete: function() {
                this.call2();
            },
            onCompleteScope: this
        });
    }
    call2() {
        ellipse3 = this.add.image(250, 350, 'ellipse_3').setScale(0.3);
        this.tweens.add({
            targets: [ellipse3],
            x: 450,
            y: 500,
            yoyo: false,
            duration: 100,
            ease: 'Sine.easeInOut',
            repeat: 0,
            onComplete: function() {
                ellipse1.setAlpha(0);
                ellipse2.setAlpha(0);
                ellipse3.setAlpha(0);
            },
            onCompleteScope: this
        });
    }
    newScene() {
            checkClick = false;
            clearTimeout(timeout)
            this.scene.start("Finalmap")
        }
        // pauseScene() {
        //     setTimeout(function() {
        //         //showPlanet = true;
        //     }, 1000)
        // }
    autoSlide() {
        console.log("Auto Play")
        setTimeout(function() {
            loadhalfdestroy = true;
        }, 1500);
        setTimeout(function() {
            loadfulldestroy = true;
        }, 3000);
    }
    loadHalfPlanet() {
        this.vectorimage1 = this.add.image(250, 350, "vector_5").setScale(0.4);
        this.vectorimage4 = this.add.image(250, 350, "vector_6").setScale(0.2);
    }
    loadFullPlanet() {
        this.planetImage.setAlpha(0);
        // this.fingerasset.setAlpha(0);
        // this.textTap.setAlpha(0);
        this.vectorimage1 = this.add.image(250, 350, "vector_6").setScale(0.25);
        this.vectorimage5 = this.add.image(250, 350, "vector_5").setScale(0.25);
        setTimeout(function() {

            startScene = true;
        }, 1000);
    }
    update() {
        if (x) {
            x = false;
            this.call()
        }
        if (startScene) {
            startScene = false;
            this.newScene();
        };
        if (callfun) {
            callfun = false;
            this.startScene()
        }
        // if (checkPointer != true) {
        //     this.pauseScene();
        // }
        // if (showPlanet) {
        //     showPlanet = false;
        // }
        if (checkPointer) {
            checkPointer = false;
            checkClick = true;
            this.autoSlide();
        }
        if (loadhalfdestroy) {
            loadhalfdestroy = false;
            this.loadHalfPlanet()
        }
        if (loadfulldestroy) {
            loadfulldestroy = false;
            this.loadFullPlanet()
        }
    }
}