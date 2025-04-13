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

export const travelPreferenceSchema = z.object({
  numberOfTravelers: z
    .number({ invalid_type_error: "Number of travelers is required" })
    .min(1, { message: "At least 1 traveler is required" }),
  startDate: z.date({
    required_error: "Start date is required",
  }),
  endDate: z.date({
    required_error: "End date is required",
  }),
  preferredTravelType: z.enum(["Leisure", "Adventure", "Cultural", "Luxury"], {
    errorMap: () => ({ message: "Please select a travel type" }),
  }),

  travelBudget: z.enum(["Under $500", "$500-$1000", "$1000-$2000", "$2000+"], {
    errorMap: () => ({ message: "Please select a budget range" }),
  }),

  hotelStarRating: z.enum(["3", "4", "5"]).optional(),

  privateTransport: z.boolean().optional(),
});

export type travelPreferenceSchemaType = z.infer<typeof travelPreferenceSchema>;

export const destinationAndActivities = z
  .object({
    destinationCountry: z.enum([
      "Pakistan",
      "Turkey",
      "Thailand",
      "Dubai",
      "Other",
    ]),
    otherCountry: z.string().optional(),

    activities: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        })
      )
      .min(1, { message: "At least 1 activity is required" }),

    specialRequests: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.destinationCountry === "Other") {
        return !!data.otherCountry && data.otherCountry.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please enter a country when 'Other' is selected",
      path: ["otherCountry"],
    }
  );

export type DestinationAndActivitiesType = z.infer<
  typeof destinationAndActivities
>;
