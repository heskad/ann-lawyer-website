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
      message: "There was an error with your submission.",
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
    message: "Thank you for your message! I'll get back to you soon.",
    status: "success",
  };
}
