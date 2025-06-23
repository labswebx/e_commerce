import React, { useEffect, useState } from "react";
import useAddress from "../../features/address/addressHooks";
import NavItem from "../../components/ui/NavItems";
import Breadcrumb from "../../components/ui/BreadCrumb";
import Loader from "../../components/ui/Loader";
import ErrorMessage from "../../utils/ErrorMessage";
import Pagination from "../../components/ui/Pagination";

const AllAddresses = () => {
  const {
    addresses,
    fetchAddresses,
    loading,
    error,
    totalPages,
    currentPage,
    resultsPerPage,
  } = useAddress();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("recent");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchAddresses({ page });
  }, [page]);
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  return (
    <div className="p-6">
      {/* Address Info */}
      <div className="pt-6 border-t border-white border-opacity-20">
        <h3 className="mb-4 text-xl font-semibold opacity-90">
          Address Details
        </h3>
        {/* Filters */}

        {addresses?.length === 0 ? (
          <p className="text-sm text-gray-500">No addresses found.</p>
        ) : (
          addresses?.map((address, index) => (
            <div
              key={address._id || index}
              className="max-w-4xl p-4 mb-6 bg-white border border-white rounded-md shadow-md border-opacity-10 bg-opacity-5"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold opacity-90">
                  Address {(currentPage - 1) * resultsPerPage + index + 1} —
                  {address?.label || "Unnamed"}
                </h4>
                {address?._id && (
                  <NavItem to={`/user/address/${address._id}`}>
                    Edit Address
                  </NavItem>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
                <p>
                  <span className="text-gray-600">Address:</span>{" "}
                  {address?.address}
                </p>
                <p>
                  <span className="text-gray-600">Landmark:</span>{" "}
                  {address?.landmark}
                </p>
                <p>
                  <span className="text-gray-600">City:</span> {address?.city}
                </p>
                <p>
                  <span className="text-gray-600">State:</span> {address?.state}
                </p>
                <p>
                  <span className="text-gray-600">Country:</span>{" "}
                  {address?.country}
                </p>
                <p>
                  <span className="text-gray-600">Pincode:</span>{" "}
                  {address?.pincode}
                </p>
                <p>
                  <span className="text-gray-600">Contact Number:</span>{" "}
                  {address?.contactNumber}
                </p>
                <p>
                  <span className="text-gray-600">Created At:</span>{" "}
                  {address?.createdAt
                    ? new Date(address.createdAt).toLocaleString()
                    : "N/A"}
                </p>
                <p>
                  <span className="text-gray-600">Updated At:</span>{" "}
                  {address?.updatedAt
                    ? new Date(address.updatedAt).toLocaleString()
                    : "N/A"}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(newPage) => setPage(newPage)}
        />
      )}
    </div>
  );
};

export default AllAddresses;
