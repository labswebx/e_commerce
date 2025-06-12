export const validateRegister = {
  name: ["required"],
  email: ["required", "email"],
  password: ["required", { rule: ["minLength", 8] }, "password"],
  confirmPassword: [
    "required",
    {
      rule: [
        (value, values) => {
          console.log("Comparing", value, "vs", values.password);
          return value === values.password;
        },
      ],
      message: "Passwords do not match.",
    },
  ],
  contactNumber: ["required", "phone"],
  pincode: ["required", "numeric"],
};

export const validateLogin = {
  email: ["required", "email"],
  password: ["required"],
};

export const validateResetPassword = {
  password: ["required"],
  confirmPassword: [
    "required",
    {
      rule: [(value, values) => value === values.password],
      message: "Passwords do not match.",
    },
  ],
};

export const validateForgotPassword = {
  email: ["required", "email"],
};
