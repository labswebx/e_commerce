import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCollections,
  createCollection,
  removeFromCollection,
  deleteCollection,
} from "../../features/wishlist/wishlistSlice";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import InputField from "../../components/ui/InputField";
import { Plus, X, Trash2, ListFilter, ChevronLeft } from "lucide-react";
import Card from "../../components/ui/Card";
import useSidebarToggle from "../../hooks/useSidebarToggle";
import NavItem from "../../components/ui/NavItems";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { collections, loading, error } = useSelector(
    (state) => state.wishlist
  );

  const [sidebarOpen, setSidebarOpen, toggleSidebar] = useSidebarToggle(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [collectionToDelete, setCollectionToDelete] = useState(null);

  useEffect(() => {
    dispatch(getCollections());
  }, [dispatch]);

  useEffect(() => {
    if (collections.length && !selectedCollectionId) {
      setSelectedCollectionId(collections[0]._id);
    }
  }, [collections, selectedCollectionId]);

  const handleCreateCollection = () => {
    if (newCollectionName.trim()) {
      dispatch(createCollection({ name: newCollectionName }));
      setNewCollectionName("");
      setShowCreateModal(false);
    }
  };

  const handleDeleteCollection = (collectionId) => {
    setCollectionToDelete(collectionId);
    setShowDeleteConfirm(true);
  };

  const confirmDeleteCollection = () => {
    dispatch(deleteCollection(collectionToDelete));
    setShowDeleteConfirm(false);
    setCollectionToDelete(null);
  };

  const selectedCollection = collections.find(
    (col) => col._id === selectedCollectionId
  );

  return (
    <div className="flex w-full layout-base">
      {/* Sidebar */}
      <aside
        className={`sidebar-base max-sm:w-full md:w-[260px] md:translate-x-0 ${
          !sidebarOpen ? "-translate-x-full" : "translate-x-0"
        }`}
        aria-label="Wishlist Sidebar"
      >
        <div className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="flex text-xl font-semibold">
              <ChevronLeft
                onClick={() => toggleSidebar()}
                className="md:hidden"
              />
              <span>Collections</span>
            </h2>
            <Button
              size="sm"
              variant="outline"
              iconRight={Plus}
              className="md:hidden"
              onClick={() => setShowCreateModal(true)}
              label="Add"
            />
          </div>

          {collections.map((col) => (
            <div
              key={col._id}
              onClick={() => {
                setSelectedCollectionId(col._id);
                if (sidebarOpen) toggleSidebar();
              }}
              className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-100 ${
                selectedCollectionId === col._id
                  ? "bg-gray-200 text-gray-700"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{col.name}</span>
                <span className="text-sm text-gray-500">
                  {col.products.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="sidebar-overlay"
          aria-hidden="true"
        />
      )}

      {/* Main Content */}
      <div className="main-content-area max-w-7xl">
        <section className="w-full px-4 pt-4 pb-2 border-b md:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">My Wishlist</h1>
            <Button
              size="sm"
              variant="outline"
              iconRight={Plus}
              className=""
              onClick={() => setShowCreateModal(true)}
              label="Add"
            />
            <button
              onClick={toggleSidebar}
              className="flex items-center justify-center px-4 py-2 text-sm font-medium border rounded md:hidden"
            >
              Collections
              <ListFilter className="w-4 h-4 ml-2" />
            </button>
          </div>
        </section>

        <main className="p-4">
          {selectedCollection ? (
            <>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {selectedCollection.name}
                </h2>
                <button
                  onClick={() => handleDeleteCollection(selectedCollection._id)}
                  className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>

              {selectedCollection.products.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {selectedCollection.products.map((product) => (
                    <Card key={product._id} type="product" data={product} />
                  ))}
                </div>
              ) : (
                <p className="flex flex-col mt-6 text-center text-gray-500">
                  This collection is empty.
                  <NavItem to="/shop" label="View products to add here" />
                </p>
              )}
            </>
          ) : (
            <p className="text-gray-600">Select a collection to view.</p>
          )}
        </main>
      </div>

      {/* Create Collection Modal */}
      <Modal isOpen={showCreateModal} onClose={() => setShowCreateModal(false)}>
        <div className="w-full max-w-full p-6 rounded-lg">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Create New Collection</h3>
          </div>
          <InputField
            label="Collection Name"
            placeholder="e.g. Summer Picks"
            value={newCollectionName}
            onChange={(e) => setNewCollectionName(e.target.value)}
          />
          <Button
            label="Create"
            className="w-full mt-4"
            onClick={handleCreateCollection}
            disabled={!newCollectionName.trim()}
            loading={loading}
          />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
      >
        <div className="w-full max-w-md p-6 bg-white rounded-lg">
          <h3 className="mb-4 text-lg font-semibold">Delete Collection</h3>
          <p className="mb-6 text-sm text-gray-600">
            Are you sure you want to delete this collection? This action cannot
            be undone.
          </p>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={() => setShowDeleteConfirm(false)}
              label="Cancel"
            />
            <Button
              className="bg-red-600"
              onClick={confirmDeleteCollection}
              loading={loading}
              label="Delete"
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Wishlist;
