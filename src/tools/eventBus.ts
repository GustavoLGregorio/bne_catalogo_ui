import mitt from "mitt";

export type EmitterType = {
  navToggler: void;
};

const emitter = mitt<EmitterType>();

export { emitter };
