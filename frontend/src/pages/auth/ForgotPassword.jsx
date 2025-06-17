import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../features/user/userSlice";
import { validateForgotPassword } from "../../utils/validation/validation";
import useForm from "../../hooks/useForm";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    const resultAction = await dispatch(forgotPassword(values));

    if (forgotPassword.fulfilled.match(resultAction)) {
      Toast.success(resultAction.payload || "Reset link sent to your email.");
    } else {
      Toast.error(resultAction.payload || "Failed to send reset link.");
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    { email: "" },
    submitForm,
    validateForgotPassword
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 mx-auto mt-10 bg-white rounded shadow"
    >
      <h2 className="mb-4 text-2xl font-semibold">Forgot Password</h2>

      <InputField
        type="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
        required
      />

      <Button
        type="submit"
        label={isSubmitting ? "Sending..." : "Send Reset Link"}
        disabled={isSubmitting}
        className="w-full mt-4"
      />
    </form>
  );
};

export default ForgotPassword;
