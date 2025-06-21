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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { handleConsultationForm } from "@/lib/actions";
import { consultationSchema } from "@/lib/types";
import { SubmitButton } from "./submit-button";
import { Mail, Phone, Send } from "lucide-react";

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
    },
  });

  const contactMethod = form.watch("contactMethod");
  const contactDetails = useMemo(() => contactOptions[contactMethod], [contactMethod]);

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
          <DialogDescription className="pt-4 text-base text-muted-foreground">
            <ul className="space-y-2 list-disc pl-5">
              <li>Консультация проводится устно по телефону или в мессенджере.</li>
              <li>Длительность консультации — до 20 минут.</li>
              <li>В рамках консультации проводится первичный анализ вашей ситуации и определяются возможные пути решения.</li>
              <li>Разработка документов и детальный план действий не входят в бесплатную консультацию.</li>
            </ul>
          </DialogDescription>
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
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-4"
                    >
                      {Object.entries(contactOptions).map(([key, value]) => (
                        <FormItem key={key}>
                          <FormControl>
                            <RadioGroupItem value={key} className="sr-only" />
                          </FormControl>
                           <Label
                            className={`flex items-center justify-center gap-2 rounded-md border-2 p-3 font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer ${field.value === key ? 'border-primary bg-primary/10' : 'border-muted'}`}
                           >
                            {value.icon}
                            {value.label}
                          </Label>
                        </FormItem>
                      ))}
                    </RadioGroup>
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
            <SubmitButton pendingText="Отправка...">Записаться на консультацию</SubmitButton>
          </form>
        </Form>
      </>
  );
}
