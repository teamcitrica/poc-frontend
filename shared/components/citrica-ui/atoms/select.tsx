'use client'
import React from 'react';
import { Select as SelectHeroUI, SelectItem } from "@heroui/react";
import Text from '../atoms/text';
import Icon from '../atoms/icon';
import { ChevronDown } from 'lucide-react';

export interface SelectOption {
  key: string;
  label: string;
  value: string;
  isDisabled?: boolean;
}

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption[];
  selectedKey?: string;
  onSelectionChange?: (key: string) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  variant?: 'flat' | 'bordered' | 'faded' | 'underlined';
  size?: 'sm' | 'md' | 'lg';
  isMultiple?: boolean;
  className?: string;
  startContent?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  label,
  placeholder = 'Selecciona una opción',
  options,
  selectedKey,
  onSelectionChange,
  isRequired = false,
  isDisabled = false,
  isInvalid = false,
  errorMessage,
  variant = 'bordered',
  size = 'md',
  isMultiple = false,
  className = '',
  startContent,
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
      <SelectHeroUI
        placeholder={placeholder}
        selectedKeys={selectedKey ? [selectedKey] : []}
        onSelectionChange={(keys) => {
          const key = Array.from(keys)[0] as string;
          onSelectionChange?.(key);
        }}
        isRequired={isRequired}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        errorMessage={errorMessage}
        variant={variant}
        size={size}
        selectionMode={isMultiple ? 'multiple' : 'single'}
        className={className}
        startContent={startContent}
        selectorIcon={<Icon name="ChevronDown" size={16} />}
        classNames={{
          trigger: "bg-color-surface-container",
          value: "text-color-on-surface",
          listbox: "bg-color-surface-container",
        }}
      >
        {options.map((option) => (
          <SelectItem
            key={option.key}
            className="text-color-on-surface"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectHeroUI>
    </div>
  );
};

export default Select;