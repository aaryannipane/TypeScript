abstract class TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string
    ){}

    abstract getSepia(): void

    // define method which we can't in interface
    // we can overite this method in child class
    // we can call this method by child class object
    getReelTime():number{
        // some complex calculations
        return 8
    }
}

// abstract VS interface
// acstract class can't make new object
// we have to "extend" abstract class | for interface we have to "implement" it
// have to use "abstract" keyword for creating class and method inside that class which is not defined in it

class Instagram extends TakePhoto{

    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        // when we use constructor then we have to call super class constructor compulsory with arguments
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia in the house");
    }
}

const aryan = new Instagram("front", "blur", 5)
aryan.getReelTime()