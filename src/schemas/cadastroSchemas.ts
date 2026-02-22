import { z } from "zod";

const emailRegex =
  /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

export const cadastroSchema = z
  .object({
    nome: z
      .string()
      .min(3, "O nome deve ter pelo menos 3 caracteres")
      .max(100, "O nome pode ter ate 100 caracteres")
      .transform((name) => {
        return name.trim();
      }),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .max(200, "E-mail muito longo")
      .regex(emailRegex, "Formato de e-mail inválido"),
    senha: z
      .string()
      .min(6, "A senha tem que ter no minimo 6 caracteres")
      .max(100, "A senha é muito longa"),
    confirmarSenha: z.string(),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não coincidem",
    path: ["confirmarSenha"],
  });

export type CadastroFormData = z.infer<typeof cadastroSchema>;
