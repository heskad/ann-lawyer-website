"use client";

import { useFormStatus } from "react-dom";
import { Button, type ButtonProps } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import type { ReactNode } from "react";

interface SubmitButtonProps extends ButtonProps {
  children: ReactNode;
  pendingText?: string;
}

export function SubmitButton({ children, pendingText, ...props }: SubmitButtonProps) {
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
      {...props}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {pendingText || "Отправка..."}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
