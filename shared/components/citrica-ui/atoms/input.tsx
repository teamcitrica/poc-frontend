'use client'
import React from 'react';
import { Input as InputHeroUI } from "@heroui/input";
import Text from '../atoms/text';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  size?: 'sm' | 'md' | 'lg';
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  errorMessage,
  variant = 'bordered',
  size = 'md',
  startContent,
  endContent,
  className = '',
}) => {
  return (
    <div className="w-full">
      {label && (
        <div className="mb-2">
          <Text variant="label" textColor="color-on-surface">
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </Text>
        </div>
      )}
      <InputHeroUI
        type={type}
        placeholder={placeholder}
        value={value}
        onValueChange={onChange}
        isRequired={isRequired}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        variant={variant}
        size={size}
        startContent={startContent}
        endContent={endContent}
        className={className}
        classNames={{
          input: "text-color-on-surface",
          inputWrapper: "bg-color-surface-container",
        }}
      />
    </div>
  );
};

export default Input;
