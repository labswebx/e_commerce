import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InputField from "../../components/ui/InputField";
import { loginUser } from "../../features/user/userSlice";
import Button from "../../components/ui/Button";
import { Loader } from "lucide-react";
import useForm from "../../hooks/useForm";
import { validateLogin } from "../../utils/validation/validation";
import Toast from "../../components/ui/Toast";
import { useNavigate } from "react-router-dom";
import NavItem from "../../components/ui/NavItems";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: apiError } = useSelector((state) => state.user);

  const submitForm = async (values) => {
    const resultAction = await dispatch(loginUser(values));
    if (loginUser.fulfilled.match(resultAction)) {
      Toast.success("User login successfully");
      navigate("/cart");
    } else {
      Toast.error("Login failed");
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    submitForm,
    validateLogin
  );

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">Login</h2>
          <p className="form-subtitle">Please sign in to your account</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <InputField
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              error={errors.email}
            />
            <InputField
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Password"
              error={errors.password}
            />
          </div>

          {apiError && <p className="form-error">{apiError}</p>}

          <div className="form-actions">
            <Button
              type="submit"
              disabled={isSubmitting}
              fullWidth
              label={
                isSubmitting ? <Loader className="animate-spin" /> : "Login"
              }
            />
          </div>
        </form>
        <div className="form-footer">
          <p>
            <NavItem
              link="/password/forgot"
              label="Forgot password?"
              className="form-link"
            />
          </p>
          <p className="mt-2">
            Don't have an account?{" "}
            <NavItem
              link="/register"
              label="Register"
              className="inline form-link"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
