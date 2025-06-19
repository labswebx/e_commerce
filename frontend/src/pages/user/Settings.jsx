import React, { useEffect, useState } from "react";
import { useUser } from "../../features/user/userHooks";
import useForm from "../../hooks/useForm";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import toastMessage from "../../constants/toastMessage";

// Convert file to base64
const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const passwordSchema = {
  oldPassword: ["required"],
  newPassword: ["required"],
  confirmPassword: ["required"],
};

const formSchema = {
  name: ["required", "name"],
  contactNumber: ["name"],
  pincode: ["pincode"],
};

const Settings = () => {
  const { user, handleProfileUpdate, handlePasswordUpdate } = useUser();

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Profile form
  const { values, errors, handleChange, handleSubmit, setValues } = useForm(
    {
      name: "",
      email: "",
      contactNumber: "",
      pincode: "",
    },
    async (formData) => {
      if (avatarFile) {
        const base64 = await toBase64(avatarFile);
        formData.avatar = base64;
      }
      try {
        await handleProfileUpdate(formData);
        Toast.success(toastMessage.PROFILE_UPDATE.SUCCESS);
      } catch (error) {
        Toast.error(toastMessage.PROFILE_UPDATE.ERROR);
      }
    },
    formSchema
  );

  // Password form
  const {
    values: passwordValues,
    errors: passwordErrors,
    handleChange: handlePasswordChange,
    handleSubmit: handlePasswordSubmit,
    setValues: setPasswordValues,
  } = useForm(
    {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    ({ oldPassword, newPassword, confirmPassword }) => {
      if (newPassword !== confirmPassword) {
        Toast.error("New password and confirmation do not match.");
        return;
      }
      try {
        handlePasswordUpdate({ oldPassword, newPassword, confirmPassword });
        Toast.success(toastMessage.PASSWORD_UPDATE.SUCCESS);
        setPasswordValues({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      } catch (error) {
        Toast.error(toastMessage.PASSWORD_UPDATE.ERROR);
      }
    },
    passwordSchema
  );

  // Set initial user data
  useEffect(() => {
    if (user) {
      setValues({
        name: user.name || "",
        email: user.email || "",
        contactNumber: user.contactNumber || "",
        pincode: user.pincode || "",
      });
      if (user.avatar?.url) {
        setAvatarPreview(user.avatar.url);
      }
    }
  }, [user, setValues]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-center w-full px-4 py-8 bg-gray-50">
      <section className="w-full max-w-3xl p-6 bg-white">
        <header className="pb-4 mb-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            Account Settings
          </h2>
          <p className="text-sm text-gray-500">
            Update your personal information.
          </p>
        </header>

        {/* Profile Update Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg shadow-md"
        >
          {/* Avatar Upload */}
          <div className="flex items-center gap-4">
            <img
              src={avatarPreview || "/default-avatar.png"}
              alt="Avatar Preview"
              className="object-cover w-16 h-16 border rounded-full"
            />
            <label className="text-sm text-gray-600 cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
              Change Avatar
            </label>
          </div>

          <InputField
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter your name"
            error={errors.name}
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            disabled
          />

          <InputField
            label="Contact Number"
            name="contactNumber"
            value={values.contactNumber}
            onChange={handleChange}
            placeholder="Enter 10-digit number"
            error={errors.contactNumber}
          />

          <InputField
            label="Pincode"
            name="pincode"
            type="number"
            value={values.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
            error={errors.pincode}
          />

          <div className="pt-4 mt-6 border-t">
            <Button type="submit" label="Save Changes" />
          </div>
        </form>

        {/* Change Password Section */}
        <div className="pt-8 mt-8 border-t rounded-lg shadow-md">
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Change Password
          </h3>

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <InputField
              label="Current Password"
              name="oldPassword"
              type="password"
              value={passwordValues.oldPassword}
              onChange={handlePasswordChange}
              placeholder="Enter current password"
              error={passwordErrors.oldPassword}
            />
            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              value={passwordValues.newPassword}
              onChange={handlePasswordChange}
              placeholder="Enter new password"
              error={passwordErrors.newPassword}
            />
            <InputField
              label="Confirm New Password"
              name="confirmPassword"
              type="password"
              value={passwordValues.confirmPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm new password"
              error={passwordErrors.confirmPassword}
            />

            <div className="pt-4 mt-6">
              <Button type="submit" label="Update Password" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Settings;
