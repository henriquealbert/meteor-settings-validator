# Meteor Settings Validator

The `MeteorSettingsValidator` class simplifies the validation of Meteor.settings using a specified Zod schema. This utility ensures that the settings adhere to the expected structure and provides a straightforward method, get(), to fetch and utilize them in a TypeScript project.

## How it works

The class is tailored for use with Zod, a TypeScript-centric schema declaration and validation library. It takes a ZodObject representing the anticipated shape of Meteor.settings and furnishes a get() method to fetch and validate the settings.

Upon successful validation, the method returns the verified settings. If executed on the client side, it exclusively returns the public settings to bolster security.

## Usage

1. Installation: Ensure Zod is installed in your project.

```bash
npm install zod
```

2. Import the class: Import the MeteorSettingsValidator class into your TypeScript file.
```typescript
import { MeteorSettingsValidator } from "./packages/meteor-settings-validator";
```

3. Create a ZodObject for Meteor.settings: Define a ZodObject that represents the expected structure of Meteor.settings. For example:
```typescript
const MeteorSettingsSchema = z.object({
  public: z.object({
    // Define your public settings structure here
  }),
  // Add other properties as needed
});
```
4. Instantiate the Validator: Create an instance of MeteorSettingsValidator with your ZodObject.
```typescript
const settingsValidator = new MeteorSettingsValidator(MeteorSettingsSchema);
```

5. Retrieve and Use Meteor.settings:
- Call the get() method to retrieve and validate Meteor.settings.
```typescript
const settingsValidator = new MeteorSettingsValidator(MeteorSettingsSchema);
const settings = settingsValidator.get();
```

We've already set up a `getMeteorSettings` function in the `index.ts` file. You can utilize it to fetch the settings in your project.
```typescript
import { getMeteorSettings } from "./packages/meteor-settings-validator";

const settings = getMeteorSettings();
console.log(settings.public.example);
```


- TODO: add tests