Package.describe({
    git: "https://github.com/henriquealbert/meteor-settings-validator",
    name: "hschmaiske:meteor-settings-validator",
    version: "0.0.1",
    summary: "Meteor Settings e2e type safe",
    documentation: "README.md",
});

Npm.depends({
    zod: "3.22.4",
});

Package.onUse(function (api) {
    api.versionsFrom("2.13.3");
    api.use("ecmascript");
    api.use("typescript");
    api.use("zodern:types@1.0.0");
    api.mainModule("src/index.ts");
});

Package.onTest(function (api) {
    api.use("ecmascript");
    api.use("tinytest");
    api.use("meteor-settings-validator");
    api.mainModule("meteor-settings-validator-tests.js");
});
