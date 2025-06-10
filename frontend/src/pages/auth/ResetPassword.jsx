import { useParams, useNavigate } from "react-router-dom";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import { useDispatch } from "react-redux";
import Toast from "../../components/ui/Toast";
import { resetPassword } from "../../features/user/userSlice";
import { validateResetPassword } from "../../utils/validation/validation";
import useForm from "../../hooks/useForm"; // assumed you have this custom hook

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    const resultAction = await dispatch(resetPassword({ ...values, token }));

    if (resetPassword.fulfilled.match(resultAction)) {
      Toast.success("Password reset successfully.");
      navigate("/login");
    } else {
      Toast.error(resultAction.payload || "Password reset failed.");
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      password: "",
      confirmPassword: "",
    },
    submitForm,
    validateResetPassword
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 mx-auto mt-10 bg-white rounded shadow"
    >
      <h2 className="mb-4 text-2xl font-semibold">Reset Password</h2>

      <InputField
        type="password"
        name="password"
        placeholder="New Password"
        value={values.password}
        onChange={handleChange}
        error={errors.password}
        // required
      />

      <InputField
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        // required
      />

      <Button
        type="submit"
        label={isSubmitting ? "Resetting..." : "Reset Password"}
        disabled={isSubmitting}
        className="w-full mt-4"
      />
    </form>
  );
};

export default ResetPassword;
