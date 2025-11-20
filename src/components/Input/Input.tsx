import css from "./Input.module.css";
import { useState } from "react";
import { EyeIcon, EyeOffIcon, ClearIcon } from "./Icons";

interface InputProps {
  type?: "text" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  clearable?: boolean;
}

export function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  clearable = false,
}: InputProps) {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const handleClear = () => {
    setInputValue("");
    onChange && onChange("");
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className={css.inputWrap}>
      <input
        className={css.input}
        type={inputType}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        aria-label={placeholder}
      />
      <div className={css.buttons}>
        {clearable && inputValue && (
          <button
            type="button"
            className={css.clearBtn}
            onClick={handleClear}
            aria-label="Clear input"
          >
            <ClearIcon />
          </button>
        )}

        {type === "password" && (
          <button
            type="button"
            className={css.passwordBtn}
            onClick={handleShowPassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        )}
      </div>
    </div>
  );
}
