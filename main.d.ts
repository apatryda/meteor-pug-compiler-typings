// Type definitions for apatryda:pug-compiler v0.0.2
// Project: https://github.com/apatryda/pug-compiler
// Definitions by: Artur Nerkowski <https://github.com/apatryda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "*.pug" {
  const template: (locals?: any) => string;
  export default template;
}
