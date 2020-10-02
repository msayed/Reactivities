export interface Icar{
    Model: string,
    Color:String,
    topspeed:Number
}

const car2: Icar={
    Model: 'dasd',
    Color:'dasda',
    topspeed:100
}

const car1: Icar={
    Model: 'dasd',
    Color:'dasda',
    topspeed:100
}

const multiply = (x :number, y: number) => {
    x*y
}

export const cars=[car1, car2];