"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMotor_1 = __importDefault(require("./BaseMotor"));
class Cbr extends BaseMotor_1.default {
    constructor(type, topsp, spot) {
        super("cbr", type, topsp, spot);
    }
}
exports.default = Cbr;
