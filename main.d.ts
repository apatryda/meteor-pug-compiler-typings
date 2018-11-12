// Type definitions for meteor/apatryda:pug-compiler package
// Project: https://github.com/apatryda/meteor-pug-compiler
// Definitions by: Artur Nerkowski <https://github.com/apatryda>
// Definitions: https://github.com/apatryda/meteor-pug-compiler-typings

declare module "*.pug" {
  const template: (locals?: any) => string;
  export = template;
}
