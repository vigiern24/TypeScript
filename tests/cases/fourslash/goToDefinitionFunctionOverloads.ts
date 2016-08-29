/// <reference path='fourslash.ts' />

/////*functionOverload1*/function /*functionOverload*/functionOverload();
/////*functionOverload2*/function functionOverload(value: string);
/////*functionOverloadDefinition*/function functionOverload() {}
////
/////*functionOverloadReference1*/functionOverload();
/////*functionOverloadReference2*/functionOverload("123");

verify.goToDefinition(["functionOverloadReference1", "functionOverloadReference2", "functionOverload"], "functionOverloadDefinition");
