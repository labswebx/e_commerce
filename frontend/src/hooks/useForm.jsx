import { useState } from "react";
import formValidator from "../utils/formValidator";

const useForm = (initialValues, onSubmit, schema) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (schema[name]) {
      const result = formValidator.validateField(value, schema[name]);
      setErrors((prev) => ({ ...prev, [name]: result.errors[0] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = formValidator.validateForm(values, schema);
    setErrors(result.errors);
    if (result.isValid) {
      setIsSubmitting(true);
      onSubmit(values);
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
  };
};

export default useForm;
