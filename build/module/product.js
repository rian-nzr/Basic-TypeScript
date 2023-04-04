"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cbr_1 = __importDefault(require("./cbr"));
const beat_1 = __importDefault(require("./beat"));
let cbr = new cbr_1.default('all new', '200', true);
cbr.b();
console.log(cbr);
let beat = new beat_1.default(880, 200, false);
beat.a();
console.log(beat);
