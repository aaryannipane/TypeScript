
// compulsory minimum requirements  
interface TakePhoto{
    cameraMode: string,
    filter: string,
    burst: number
}

interface Story{
    createStory(): string
}

// implementing interface on class 
// we have to use the properties mentioned in interface that is compulsory
class Instagram implements TakePhoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ) {
    }
}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number,
        public short:string
    ) {
    }

    createStory(): string {
        return "story created"
    }
}

