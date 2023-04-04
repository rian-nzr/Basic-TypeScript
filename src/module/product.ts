import Cbr from "./cbr";
import Beat from "./beat";

let cbr = new Cbr('all new', '200', true);
cbr.b()
console.log(cbr);


let beat = new Beat(880, 200, false);
beat.a()
console.log(beat);
