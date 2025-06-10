import React from "react";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { registerUser } from "../../features/user/userSlice";
import { validateRegister } from "../../utils/validation/validation";
import Toast from "../../components/ui/Toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error: apiError, loading } = useSelector((state) => state.user);

  const submitForm = async (values) => {
    const resultAction = await dispatch(registerUser(values));
    if (registerUser.fulfilled.match(resultAction)) {
      Toast.success("User created successfully");
      navigate("/cart");
    } else {
      Toast.error("Registration failed");
    }
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm(
    {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      pincode: "",
    },
    submitForm,
    validateRegister
  );

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2 className="form-title">Create Account</h2>
          <p className="form-subtitle">Register for a new account</p>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <InputField
              name="name"
              placeholder="Full Name"
              value={values.name}
              onChange={handleChange}
              error={errors.name}
            />
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
            <InputField
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
            />
            <InputField
              name="contactNumber"
              placeholder="Contact Number"
              value={values.contactNumber}
              onChange={handleChange}
              error={errors.contactNumber}
            />
            <InputField
              name="pincode"
              placeholder="Pincode"
              value={values.pincode}
              onChange={handleChange}
              error={errors.pincode}
            />
          </div>

          <div className="form-actions">
            <Button type="submit" disabled={isSubmitting || loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
            {apiError && <p className="form-error">{apiError}</p>}
          </div>
        </form>

        <div className="form-footer">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="form-link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
