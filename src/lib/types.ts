import * as z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов.",
  }),
  contactMethod: z.enum(["telegram", "whatsapp", "phone", "email"], {
    required_error: "Необходимо выбрать способ связи.",
  }),
  contact: z.string().min(5, {
    message: "Контактные данные должны содержать не менее 5 символов.",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать не менее 10 символов.",
  }),
  captcha: z.string().nonempty({ message: "Пожалуйста, решите задачу." }),
});

export const consultationSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать не менее 2 символов.",
  }),
  contactMethod: z.enum(["telegram", "whatsapp", "phone", "email"], {
    required_error: "Необходимо выбрать способ связи.",
  }),
  contact: z.string().min(5, {
    message: "Контактные данные должны содержать не менее 5 символов.",
  }),
  captcha: z.string().nonempty({ message: "Пожалуйста, решите задачу." }),
});
