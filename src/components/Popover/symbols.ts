import { InjectionKey } from "vue";
import { context } from "./context";

export const ContextKey: InjectionKey<typeof context> = Symbol('Context');