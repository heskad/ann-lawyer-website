"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useMemo, useState } from "react";
import { useFormState } from "react-dom";
import { handleContactForm } from "@/lib/actions";
import { AnimatedSection } from "./animated-section";
import { contactSchema } from "@/lib/types";
import { SubmitButton } from "./submit-button";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

const contactOptions = {
  telegram: { label: "Telegram", icon: <Send />, placeholder: "Ваш @username" },
  whatsapp: { label: "WhatsApp", icon: <MessageCircle />, placeholder: "Ваш номер телефона" },
  phone: { label: "Звонок", icon: <Phone />, placeholder: "Ваш номер телефона" },
  email: { label: "Почта", icon: <Mail />, placeholder: "vash.email@example.com" },
};


export function ContactSection() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(handleContactForm, {
    message: "",
    status: "",
  });

  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);

  useEffect(() => {
    // Generate random numbers only on the client-side after mount
    // to prevent hydration errors.
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      contactMethod: "telegram",
      contact: "",
      message: "",
      captcha: "",
    },
  });

  const contactMethod = form.watch("contactMethod");
  const contactDetails = useMemo(() => contactOptions[contactMethod as keyof typeof contactOptions], [contactMethod]);


  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Сообщение отправлено!",
        description: state.message,
      });
      form.reset();
    } else if (state.status === "error") {
      toast({
        title: "Ошибка",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <AnimatedSection>
      <section id="contact" className="container py-20 sm:py-32">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Свяжитесь со мной</h2>
          <p className="text-lg text-muted-foreground">
            Есть вопрос или нужна консультация? Я буду рада помочь вам.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form action={formAction} className="space-y-8">
              <input type="hidden" name="captchaExpected" value={num1 + num2} />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Ваше Имя" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactMethod"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Предпочитаемый способ связи</FormLabel>
                    <FormControl>
                      <Tabs
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                        className="w-full"
                      >
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                          {Object.entries(contactOptions).map(([key, value]) => (
                             <TabsTrigger key={key} value={key} className="flex flex-col sm:flex-row gap-2 py-2 sm:py-1.5">
                               {value.icon}
                               {value.label}
                             </TabsTrigger>
                          ))}
                        </TabsList>
                      </Tabs>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

               <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contactDetails.label}</FormLabel>
                      <FormControl>
                        <Input placeholder={contactDetails.placeholder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Сообщение</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Опишите вашу ситуацию или вопрос..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Для защиты от спама, решите задачу: {num1} + {num2} = ?</FormLabel>
                    <FormControl>
                      <Input placeholder="Ваш ответ" {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <SubmitButton pendingText="Отправка...">Отправить сообщение</SubmitButton>
            </form>
          </Form>
        </div>
      </section>
    </AnimatedSection>
  );
}
