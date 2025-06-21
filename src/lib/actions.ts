"use server";
import { z } from "zod";
import { contactSchema, consultationSchema } from "./types";

type State = {
  message: string;
  status: "success" | "error" | "";
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


export async function handleConsultationForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = consultationSchema.safeParse({
    name: formData.get("name"),
    contactMethod: formData.get("contactMethod"),
    contact: formData.get("contact"),
    captcha: formData.get("captcha"),
  });

  if (!validatedFields.success) {
    const firstError = validatedFields.error.errors[0].message;
    return {
      message: firstError || "Пожалуйста, заполните все поля корректно.",
      status: "error",
    };
  }
  
  const captchaExpected = formData.get("captchaExpected");

  if (validatedFields.data.captcha !== captchaExpected) {
    return {
      message: "Неверный ответ на вопрос для защиты от спама.",
      status: "error",
    };
  }


  // Simulate processing the request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Consultation Request:", validatedFields.data);

  return {
    message: "Спасибо! Ваша заявка принята. Я скоро с вами свяжусь.",
    status: "success",
  };
}
