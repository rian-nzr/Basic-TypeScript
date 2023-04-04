import Motor from "./BaseMotor";

class Cbr<T> extends Motor<T>{
    constructor(type: T,  topsp: T, spot: boolean){
        super("cbr", type, topsp, spot);
    }
} 

export default Cbr;