class Preload extends Phaser.Scene {
    constructor() {
        super('Preload')
    }
    preload() {
        this.load.image("background", "./assets/background.png");
        this.load.image("bg", "./assets/bg.png")
        this.load.image("rectangle", "./assets/Rectangle.png")
        this.load.image("finger", "./assets/finger.png");
        this.load.image("planet_1", "./assets/01.png");
        this.load.image("planet_2", "./assets/02.png");
        this.load.image("planet_3", "./assets/03.png");
        this.load.image("planet_4", "./assets/04.png");
        this.load.image("planet_5", "./assets/05.png");
        this.load.image("planet_6", "./assets/06.png");
        this.load.image("planet_7", "./assets/07.png");
        this.load.image("planet_8", "./assets/08.png");
        this.load.image("planet_9", "./assets/09.png");
        this.load.image("planet_10", "./assets/10.png");
        this.load.image("planet_11", "./assets/11.png");
        this.load.image("planet_12", "./assets/12.png");
        this.load.image("planet_13", "./assets/13.png");
        this.load.image("planet_14", "./assets/14.png");
        this.load.image("planet_15", "./assets/15.png");
        // this.load.image("vector1", "./assets/Vector.png");
        // this.load.image("vector2", "./assets/Vector41.png");
        this.load.image("playnow", "./assets/button.png");
        this.load.image("ellipse_1", "./assets/Ellipse34.png");
        this.load.image("ellipse_2", "./assets/Ellipse35.png");
        this.load.image("ellipse_3", "./assets/Ellipse36.png");
        this.load.image("vector1", "./assets/Vector40.png");
        this.load.image("vector2", "./assets/Vector41.png");
        this.load.image("vector4", "./assets/Vector43.png")
        this.load.image("vector5", "./assets/Vector44.png")
        this.load.image("vector6", "./assets/Vector45.png")
        this.load.image("vector7", "./assets/Vector46.png")
        this.load.image("vector8", "./assets/Vector47.png")
        this.load.image("vector9", "./assets/Vector48.png")
        this.load.image("vector10", "./assets/Vector49.png")
        this.load.image("vector11", "./assets/Vector50.png")
        this.load.image("vector12", "./assets/Vector51.png")
        this.load.image("mask", "./assets/Maskgroup.png")
        this.load.image("vector_1", "./assets/101.png")
        this.load.image("vector_2", "./assets/102.png")
        this.load.image("vector_3", "./assets/103.png")
        this.load.image("vector_4", "./assets/104.png")
        this.load.image("vector_5", "./assets/105.png")
        this.load.image("vector_6", "./assets/106.png")


    }
    create() {
        this.scene.start("Tutorial");
    }
}