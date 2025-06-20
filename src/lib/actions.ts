"use server";
import { z } from "zod";
import { contactSchema } from "./types";

type State = {
  message: string;
  status: "success" | "error" | "";
  data?: z.infer<typeof contactSchema>;
};

export async function handleContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "При отправке произошла ошибка. Проверьте правильность введенных данных.",
      status: "error",
      data: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      },
    };
  }

  // Simulate sending an email
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Form data:", validatedFields.data);

  return {
    message: "Спасибо за ваше сообщение! Я свяжусь с вами в ближайшее время.",
    status: "success",
  };
}
