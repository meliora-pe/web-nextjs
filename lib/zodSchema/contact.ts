import z from "zod"

export const contactSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    cellphone: z.string().min(9),
    district: z.string(),
    message: z.string()
});

export type ContactForm = z.infer<typeof contactSchema>;