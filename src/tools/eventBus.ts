import { trace } from "console";
import mitt from "mitt";

export type EmitterType = {
  toggleNavigation: void;
  toggleSearchBar: void;
  toggleUser: void;
};

const emitter = mitt<EmitterType>();

// emitter.on("*", () => {
//   console.log("Emitter triggered");
// });

export { emitter };
