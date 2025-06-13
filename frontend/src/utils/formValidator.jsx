const formValidator = {
  //  validation patterns
  patterns: {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+?[\d\s-]{10,}$/,
    url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
    // password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    numeric: /^\d+$/,
    alpha: /^[a-zA-Z]+$/,
    alphanumeric: /^[a-zA-Z0-9]+$/,
  },

  // Validation methods
  methods: {
    required: (value) =>
      typeof value === "string" ? value.trim() !== "" : value != null,
    minLength: (value, length) => value.length >= length,
    maxLength: (value, length) => value.length <= length,
    exactLength: (value, length) => value.length === length,
    pattern: (value, pattern) => pattern.test(value),
    minValue: (value, min) => Number(value) >= min,
    maxValue: (value, max) => Number(value) <= max,
    exactValue: (value, exact) => Number(value) === exact,
    match: (value, matchValue) => value === matchValue,
    email: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.email),
    phone: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.phone),
    url: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.url),
    // password: (value) =>
    //   formValidator.methods.pattern(value, formValidator.patterns.password),
    numeric: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.numeric),
    alpha: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.alpha),
    alphanumeric: (value) =>
      formValidator.methods.pattern(value, formValidator.patterns.alphanumeric),
  },

  // Default messages
  getDefaultMessage(ruleName, value, param) {
    const messages = {
      required: `This field is required.`,
      email: "Please enter a valid email address.",
      phone: "Please enter a valid phone number.",
      url: "Please enter a valid URL.",
      // password: "Password must contain upper/lower case letters and numbers.",
      numeric: "Only numeric values allowed.",
      alpha: "Only alphabetic characters allowed.",
      alphanumeric: "Only alphanumeric characters allowed.",
      minLength: `Minimum length is ${param}.`,
      maxLength: `Maximum length is ${param}.`,
      exactLength: `Must be exactly ${param} characters.`,
      minValue: `Value must be at least ${param}.`,
      maxValue: `Value must be at most ${param}.`,
      exactValue: `Value must be exactly ${param}.`,
      match: "Values do not match.",
    };
    return messages[ruleName] || "Invalid value.";
  },

  validateField(value, rules, allValues = {}) {
    const errors = [];

    const isEmpty =
      value === null ||
      value === undefined ||
      (typeof value === "string" && value.trim() === "");

    const hasRequiredRule = rules.some((rule) => {
      if (typeof rule === "string") return rule === "required";
      if (Array.isArray(rule.rule)) {
        const first = rule.rule[0];
        return typeof first === "string" && first === "required";
      }
      return false;
    });

    if (isEmpty && hasRequiredRule) {
      errors.push(this.getDefaultMessage("required", value));
      return { isValid: false, errors };
    }

    if (isEmpty) {
      return { isValid: true, errors: [] };
    }

    for (const rule of rules) {
      if (typeof rule === "string") {
        if (rule !== "required") {
          const method = this.methods[rule];
          if (typeof method !== "function") {
            continue;
          }
          if (!method(value)) {
            errors.push(this.getDefaultMessage(rule, value));
            break;
          }
        }
      } else if (typeof rule === "object") {
        const [ruleName, ...params] = rule.rule;
        const isValid =
          typeof ruleName === "function"
            ? ruleName(value, allValues)
            : typeof this.methods[ruleName] === "function"
            ? this.methods[ruleName](value, ...params)
            : (console.error(`Invalid validation method: '${ruleName}'`), true);

        if (!isValid) {
          errors.push(
            rule.message || this.getDefaultMessage(ruleName, value, ...params)
          );
          break;
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  validateForm(values, schema) {
    const errors = {};
    let isValid = true;

    for (const field in schema) {
      const value = values[field];
      const rules = schema[field];
      const result = this.validateField(value, rules, values);
      if (!result.isValid) {
        errors[field] = result.errors;
        isValid = false;
      }
    }

    return {
      isValid,
      errors,
    };
  },
};

export default formValidator;
