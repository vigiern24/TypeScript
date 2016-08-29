/// <reference path='fourslash.ts' />

////class MethodOverload {
////    static me/*staticMethodOverload1*/thod();
////    static me/*staticMethodOverload2*/thod(foo: string);
/////*staticMethodDefinition*/static method(foo?: any) { }
////    public met/*instanceMethodOverload1*/hod(): any;
////    public met/*instanceMethodOverload2*/hod(foo: string);
/////*instanceMethodDefinition*/public method(foo?: any) { return "foo" }
////}

////// static method
////MethodOverload./*staticMethodReference1*/method();
////MethodOverload./*staticMethodReference2*/method("123");

////// instance method
////var methodOverload = new MethodOverload();
////methodOverload./*instanceMethodReference1*/method();
////methodOverload./*instanceMethodReference2*/method("456");

verify.goToDefinition(["staticMethodReference1", "staticMethodReference2", "staticMethodOverload1"], "staticMethodDefinition");
verify.goToDefinition(["instanceMethodReference1", "instanceMethodReference2", "instanceMethodOverload1"], "instanceMethodDefinition");
