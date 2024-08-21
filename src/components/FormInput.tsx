interface FormInputProps {
  inputLabel: string;
  labelFor: string;
  inputType: string;
  inputId: string;
  inputName: string;
  placeholderText: string;
  ariaLabelName: string;
}

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}: FormInputProps) => {
  return (
    <div className="mb-4">
      <label
        className="block text-lg dark:text-white text-black mb-1"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="w-full px-5 py-2 border dark:border-neutral-300 border-neutral-700 border-opacity-50
        dark:text-white text-black bg-white dark:bg-primaryDarkBackground shadow-sm text-md
        focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
        dark:focus:border-primaryDark dark:focus:ring-primaryDark"
        type={inputType}
        id={inputId}
        name={inputName}
        placeholder={placeholderText}
        aria-label={ariaLabelName}
        required
      />
    </div>
  );
};

export default FormInput;
