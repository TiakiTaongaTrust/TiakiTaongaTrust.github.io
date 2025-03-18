import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface InputFormFieldProps {
  label: string;
  type: "text" | "email" | "password" | "textarea"; // Restrict allowed types
  id: string;
  height?: string;
  color?: string | "white"; // Add color prop for different types of input fields (e.g., text, password, etc.)
  placeholder?: string;
}

const InputFormField: React.FC<InputFormFieldProps> = ({
  label,
  type,
  id,
  placeholder,
  height,
  color,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      {type === "textarea" ? (
        <Textarea
          className={`bg-white ${height}`}
          id={id}
          placeholder={placeholder || "Type your message here."}
        />
      ) : (
        <Input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`bg-${color}`}
        />
      )}
    </div>
  );
};

export default InputFormField;
