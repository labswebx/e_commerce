import { useEffect } from "react";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import { useUser } from "../../features/user/userHooks";
import NavItem from "../../components/ui/NavItems";

const UserProfile = () => {
  const { user, loading, error, fetchProfile } = useUser();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="max-w-5xl p-6 mx-auto mt-8 space-y-6 text-black bg-white shadow-xl bg-opacity-10 rounded-2xl backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <img
          src={user?.avatar?.url || "/logo-icon.jpg"}
          alt={user?.name}
          className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-lg sm:w-28 sm:h-28"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-semibold">{user?.name || "N/A"}</h2>
          <p className="text-sm opacity-70">{user?.email}</p>
        </div>
      </div>

      {/* User Info */}
      <div className="pt-6 border-t border-white border-opacity-20">
        <h3 className="mb-4 text-xl font-semibold opacity-90">User Details</h3>
        <div className="flex justify-end mt-4">
          <NavItem to={`/user/settings`}>Edit User</NavItem>
        </div>

        <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
          <p>
            <span className="text-gray-600">Name:</span> {user?.name}
          </p>
          <p>
            <span className="text-gray-600">Email:</span> {user?.email}
          </p>
          <p>
            <span className="text-gray-600">Contact Number:</span>{" "}
            {user?.contactNumber}
          </p>
          <p>
            <span className="text-gray-600">Pincode:</span> {user?.pincode}
          </p>
          <p>
            <span className="text-gray-600">Role:</span> {user?.role}
          </p>

          <p>
            <span className="text-gray-600">Created At:</span>{" "}
            {new Date(user?.createdAt).toLocaleString()}
          </p>
          <p>
            <span className="text-gray-600">Updated At:</span>{" "}
            {new Date(user?.updatedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
