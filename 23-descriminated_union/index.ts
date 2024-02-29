
// disscriminative union
interface Circle{
    kind: "circle",
    radius: number,
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length:number,
    width:number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape : Shape){
    if(shape.kind == "circle"){
        return Math.PI * shape.radius ** 2
    } 

    // return shape.side ** 2
}

// https://youtu.be/30LWjhZzg50?t=16954
// exhaustive check
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side ** 2
        case "rectangle":
            return shape.width * shape.length

        default:
            // this block will never run if everything is f9
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}