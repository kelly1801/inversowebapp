import { z } from "zod";

export const UserFormValidation = z.object({
  fullname: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address")
});

export const GuestFormValidation = z.object({
  fullname: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.coerce.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  documentNumber: z
    .string()
    .min(5, "Document id must be at least 5 characters")
    .max(50, "Document id must be at most 50 characters"),
  documentType: z
    .string()
    .min(2, "Document Type must be at least 2 characters")
    .max(50, "Document Type must be at most 50 characters"),
  identificationDocument: z.custom<File[]>().optional(),
  privacyConsent: z
    .boolean()
    .default(false)
    .refine((value) => value === true, {
      message: "You must consent to privacy in order to proceed",
    }),
});

export const CreateReservationSchema = z.object({
  schedule: z.coerce.date(),
  note: z.string().optional(),
  ota: z
    .string()
    .min(5, "ota must be at least 5 characters")
    .max(50, "ota Type must be at most 50 characters"),
    specialRequirements: z
    .string()
    .optional(),
    guestCuantity: z.number().min(1, "Reservations should contain at least 1 person").max(10, "Reservations should contain at most 10 person"),


});

export const ScheduleReservationSchema = z.object({
  schedule: z.coerce.date(),
  note: z.string().optional(),
});

export const CancelReservationSchema = z.object({
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getReservationSchema(type: string) {
  switch (type) {
    case "create":
      return CreateReservationSchema;
    case "cancel":
      return CancelReservationSchema;
    default:
      return ScheduleReservationSchema;
  }
}