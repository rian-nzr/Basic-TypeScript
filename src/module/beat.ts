import Motor from "./BaseMotor";

class Beat<T> extends Motor<T>{
    constructor(type: T,  topsp: T, spot: boolean){
        super("Beat", type, topsp, spot);
    }
} 

export default Beat;