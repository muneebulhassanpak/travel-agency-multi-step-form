import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const personalDetailsSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  preferredContactMethod: z.enum(["Phone", "WhatsApp", "Text"], {
    errorMap: () => ({ message: "Please select a contact method" }),
  }),
});

export type personalDetailsSchemaType = z.infer<typeof personalDetailsSchema>;
