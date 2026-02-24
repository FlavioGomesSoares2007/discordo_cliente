import z from "zod"

export const enviarMensageSchemas = z.object({
    message: z.string().min(1).max(3000, "No max  3mil caracteres")
})

export type  enviarMensagetype = z.infer<typeof enviarMensageSchemas>