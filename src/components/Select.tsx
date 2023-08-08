import React, { useEffect, useRef, useState } from "react";

export interface Option<V, L> {
  value: V;
  label: L;
  key: string | number;
  disabled?: boolean;
}

interface SelectProps<V, L> {
  options: Option<V, L>[];
  onSelect: (value: V) => void;
  value: Option<V, L>;
  className?: string;
}

export function Select<V, L>({
  options,
  onSelect,
  value,
  className,
}: SelectProps<V, L>) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option<V, L> | null>(
    value ?? null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: Option<V, L>) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsOpen(false);
  };

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  return (
    <div
      className={`relative inline-block text-left ${className}`}
      ref={dropdownRef}
    >
      <div
        className="border border-gray-500 bg-gray-700 px-3 py-1 rounded-md shadow-sm cursor-pointer flex items-center justify-between"
        onClick={toggleDropdown}
      >
        <span className="text-sm">
          {selectedOption ? (selectedOption.label as any) : "Select an option"}
        </span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform duration-200 text-white ${
            isOpen && "transform rotate-180"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M6 8l4 4 4-4z" />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute z-10 py-1 w-full bg-gray-700 border border-gray-500 rounded-md shadow-sm mt-1">
          {options.map((option) => (
            <li
              key={option.key}
              className={`px-3 py-1 hover:bg-gray-600 ${
                selectedOption?.value === option.value &&
                "font-medium bg-gray-500"
              } ${
                option.disabled
                  ? "cursor-not-allowed grayscale"
                  : "cursor-pointer"
              }`}
              onClick={
                option.disabled ? () => {} : () => handleOptionSelect(option)
              }
            >
              {option.label as React.ReactNode}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
