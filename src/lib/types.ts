import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов.",
  }),
  email: z.string().email({
    message: "Пожалуйста, введите действительный адрес электронной почты.",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов.",
  }),
});
