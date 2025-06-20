"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full text-lg"
      size="lg"
      style={{
        backgroundColor: "hsl(var(--accent))",
        color: "hsl(var(--accent-foreground))",
      }}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Отправка...
        </>
      ) : (
        "Отправить сообщение"
      )}
    </Button>
  );
}
