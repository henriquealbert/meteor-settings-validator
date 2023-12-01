import { Meteor } from "meteor/meteor";
import type { z, ZodObject, ZodRawShape } from "zod";
import { ZodError } from "zod";

export class MeteorSettingsValidator<T extends ZodRawShape> {
    constructor(private schema: ZodObject<T>) {}

    get() {
        try {
            if (!Meteor.settings) {
                console.error(
                    "Meteor.settings is undefined or this is not a Meteor app."
                );
                return null;
            }

            if (!this.schema) {
                console.error("No schema provided.");
                return null;
            }

            const validatedSettings = this.schema.parse(Meteor.settings);

            // If we're on the client, only return the public settings
            if (Meteor.isClient) {
                return {
                    public: validatedSettings.public,
                } as unknown as z.infer<typeof this.schema>;
            }

            return validatedSettings as unknown as z.infer<typeof this.schema>;
        } catch (error) {
            if (error instanceof ZodError) {
                console.error("Invalid Meteor.settings:", error.errors);
            } else {
                console.error("Unexpected error:", error);
            }
            return null;
        }
    }
}
