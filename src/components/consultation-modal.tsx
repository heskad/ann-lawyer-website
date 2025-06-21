"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useActionState, useEffect, useMemo } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { handleConsultationForm } from "@/lib/actions";
import { consultationSchema } from "@/lib/types";
import { SubmitButton } from "./submit-button";
import { Mail, Phone, Send } from "lucide-react";
import { Label } from "@/components/ui/label";

type ConsultationModalProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

const contactOptions = {
  telegram: { label: "Telegram", icon: <Send />, placeholder: "Ваш @username" },
  whatsapp: { label: "WhatsApp", icon: <Phone />, placeholder: "Ваш номер телефона" },
  phone: { label: "Звонок", icon: <Phone />, placeholder: "Ваш номер телефона" },
  email: { label: "Почта", icon: <Mail />, placeholder: "vash.email@example.com" },
};

export function ConsultationModal({ setIsModalOpen }: ConsultationModalProps) {
  const [modalStep, setModalStep] = useState<"conditions" | "form">(
    "conditions"
  );
  const { toast } = useToast();

  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10));
    setNum2(Math.floor(Math.random() * 10));
  }, []);


  const [state, formAction] = useActionState(handleConsultationForm, {
    message: "",
    status: "",
  });

  const form = useForm<z.infer<typeof consultationSchema>>({
    resolver: zodResolver(consultationSchema),
    defaultValues: {
      name: "",
      contact: "",
      contactMethod: "telegram",
      captcha: "",
    },
  });

  const contactMethod = form.watch("contactMethod");
  const contactDetails = useMemo(() => contactOptions[contactMethod as keyof typeof contactOptions], [contactMethod]);

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Заявка отправлена!",
        description: state.message,
      });
      form.reset();
      // Закрываем модальное окно через 2 секунды после успешной отправки
      setTimeout(() => setIsModalOpen(false), 2000);
    } else if (state.status === "error") {
      toast({
        title: "Ошибка",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form, setIsModalOpen]);


  if (modalStep === "conditions") {
    return (
      <>
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Условия бесплатной консультации</DialogTitle>
          <div className="pt-4 text-base text-muted-foreground">
            <ul className="space-y-2 list-disc pl-5">
              <li>Консультация проводится устно по телефону или в мессенджере.</li>
              <li>Длительность консультации — до 20 минут.</li>
              <li>В рамках консультации проводится первичный анализ вашей ситуации и определяются возможные пути решения.</li>
              <li>Разработка документов и детальный план действий не входят в бесплатную консультацию.</li>
            </ul>
          </div>
        </DialogHeader>
        <DialogFooter className="pt-6">
          <Button
            onClick={() => setModalStep("form")}
            size="lg"
            className="w-full"
          >
            Принять и записаться
          </Button>
        </DialogFooter>
      </>
    );
  }

  return (
     <>
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl">Запись на консультацию</DialogTitle>
          <DialogDescription>
            Заполните форму, и я свяжусь с вами в ближайшее время.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form action={formAction} className="space-y-6">
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
            <SubmitButton pendingText="Отправка...">Записаться на консультацию</SubmitButton>
          </form>
        </Form>
      </>
  );
}
