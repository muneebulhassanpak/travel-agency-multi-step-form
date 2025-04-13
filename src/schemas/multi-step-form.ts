import { z } from "zod";

export const personalDetailsSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number must be less than 15 digits" }),
  preferredContactMethod: z.enum(["Phone", "WhatsApp", "Text"], {
    errorMap: () => ({ message: "Please select a contact method" }),
  }),
});

export type personalDetailsSchemaType = z.infer<typeof personalDetailsSchema>;
