import React, { useEffect, useState } from "react";
import { useUser } from "../../features/user/userHooks";
import useForm from "../../hooks/useForm";
import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import Toast from "../../components/ui/Toast";
import toastMessage from "../../constants/toastMessage";
import Avatar from "../../components/ui/Avatar";

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
  const {
    user,
    handleProfileUpdate,
    handlePasswordUpdate,
    fetchProfile,
    loading,
    error,
    message,
  } = useUser();

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
      try {
        const updateData = {
          name: formData.name,
          email: formData.email,
          contactNumber: formData.contactNumber,
          pincode: formData.pincode,
        };

        if (avatarFile) {
          const base64 = await toBase64(avatarFile);
          updateData.avatar = base64;
        }

        console.log("Update payload:", updateData);
        await handleProfileUpdate(updateData);
        Toast.success(toastMessage.PROFILE_UPDATE.SUCCESS);
        fetchProfile();
      } catch (error) {
        console.error("Update error:", error);
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
    async ({ oldPassword, newPassword, confirmPassword }) => {
      if (newPassword !== confirmPassword) {
        Toast.error("New password and confirmation do not match.");
        return;
      }
      try {
        await handlePasswordUpdate({ oldPassword, newPassword });
        Toast.success(toastMessage.PASSWORD_UPDATE.SUCCESS);
        setPasswordValues({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        fetchProfile();
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

  // Handle error and message states
  useEffect(() => {
    if (error) {
      Toast.error(error);
    }
    if (message) {
      Toast.success(message);
    }
  }, [error, message]);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex justify-start w-full px-4 py-8 bg-gray-50">
      <section className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-sm">
        <header className="pb-4 mb-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Account Settings</h2>
          <p className="mt-1 text-sm text-gray-500">
            Update your personal information and security settings
          </p>
        </header>

        {/* Profile Update Form */}
        <form onSubmit={handleSubmit} className="mb-8 space-y-6">
          <div className="flex flex-col space-y-6">
            {/* Avatar Upload */}
            <div className="flex items-center gap-4">
              <Avatar
                src={avatarPreview || user?.avatar?.url}
                alt={user?.name || "User"}
                size="lg"
                rounded={true}
              />
              <div>
                <label className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                  Change Avatar
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  JPG, GIF or PNG. Max size 2MB
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <InputField
                  label="Full Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  error={errors.name}
                />
              </div>

              <div className="sm:col-span-6">
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  disabled
                  info="Email cannot be changed"
                />
              </div>

              <div className="sm:col-span-6">
                <InputField
                  label="Contact Number"
                  name="contactNumber"
                  value={values.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  error={errors.contactNumber}
                />
              </div>

              <div className="sm:col-span-6">
                <InputField
                  label="Pincode"
                  name="pincode"
                  type="number"
                  value={values.pincode}
                  onChange={handleChange}
                  placeholder="Enter your area pincode"
                  error={errors.pincode}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button
              type="submit"
              label={loading ? "Saving..." : "Save Changes"}
              disabled={loading}
              className="px-6 py-2"
            />
          </div>
        </form>

        {/* Change Password Section */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="mb-6 text-lg font-semibold text-gray-800">
            Change Password
          </h3>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <InputField
                  label="Current Password"
                  name="oldPassword"
                  type="password"
                  value={passwordValues.oldPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter your current password"
                  error={passwordErrors.oldPassword}
                />
              </div>

              <div className="sm:col-span-6">
                <InputField
                  label="New Password"
                  name="newPassword"
                  type="password"
                  value={passwordValues.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  error={passwordErrors.newPassword}
                />
              </div>

              <div className="sm:col-span-6">
                <InputField
                  label="Confirm New Password"
                  name="confirmPassword"
                  type="password"
                  value={passwordValues.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  error={passwordErrors.confirmPassword}
                />
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                label={loading ? "Updating..." : "Update Password"}
                disabled={loading}
                variant="outline"
                className="px-6 py-2"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Settings;
