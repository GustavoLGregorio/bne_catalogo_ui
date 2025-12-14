import { trace } from "console";
import mitt from "mitt";

export type EmitterType = {
  navToggler: void;
  navSearchBarToggler: void;
};

const emitter = mitt<EmitterType>();

// emitter.on("*", () => {
//   console.log("Emitter triggered");
// });

export { emitter };
