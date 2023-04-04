import Imotor from "./imotor";
import * as cc from './cc'


abstract class BaseMotor<T> implements Imotor<T>{
    nama: string;
    type: T;
    topsp: T;
    spot: boolean;

    constructor(
        nama: string,
        type: T,
        topsp: T,
        spot: boolean
    ) {
        this.nama = nama;
        this.type = type;
        this.spot = spot;
        this.topsp = topsp;
    }

    a() {
        console.log(cc.a());
    }

    b() {
        console.log(cc.b());
    }
}

export default BaseMotor;