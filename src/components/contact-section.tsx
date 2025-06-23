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
import { Mail, Phone, Send } from "lucide-react";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M16.75 13.96c.25.13.43.2.5.33.07.13.07.66 0 1.2-.07.53-.53 1-1.04 1.13-.5.13-1.04.2-1.52.13-.48-.07-1.13-.26-1.94-.66-.96-.46-1.76-1.1-2.4-1.85-.64-.75-1.1-1.52-1.4-2.2-.3-.68-.43-1.3-.4-1.8.04-.5.23-.9.5-1.15.27-.26.56-.36.83-.33.26.03.48.07.66.36s.28.7.35.93c.07.23.07.5,0,.7-.07.2-.13.3-.26.43-.13.14-.23.24-.33.34-.1.1-.2.2-.26.3-.07.1-.04.2.03.3.07.1.24.4.5.65.25.26.52.5.8.7.27.2.52.33.7.4.2.06.3.1.4.04.1-.07.43-.5.56-.66.14-.17.3-.26.5-.23.2.03.85.4 1 .65.14.23.23.36.26.46.03.1.03.26,0,.4zM12 2a10 10 0 0 0-10 10c0 1.8.5 3.5 1.4 5.1L2 22l5.3-1.4c1.5.8 3.2 1.4 5.1 1.4h.1c5.5 0 9.9-4.4 9.9-9.9S17.6 2 12.1 2h-.1z"/>
    </svg>
);

const contactOptions = {
  telegram: { label: "Telegram", icon: <Send />, placeholder: "Ваш @username" },
  whatsapp: { label: "WhatsApp", icon: <WhatsAppIcon />, placeholder: "Ваш номер телефона" },
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
