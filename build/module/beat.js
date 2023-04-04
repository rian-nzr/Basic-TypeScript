"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseMotor_1 = __importDefault(require("./BaseMotor"));
class Beat extends BaseMotor_1.default {
    constructor(type, topsp, spot) {
        super("Beat", type, topsp, spot);
    }
}
exports.default = Beat;
