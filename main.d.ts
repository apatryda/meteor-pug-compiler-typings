// Type definitions for meteor/apatryda:pug-compiler package
// Project: https://github.com/apatryda/pug-compiler
// Definitions by: Artur Nerkowski <https://github.com/apatryda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "*.pug" {
  const template: (locals?: any) => string;
  export default template;
}
