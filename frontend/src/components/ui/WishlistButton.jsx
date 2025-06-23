import { useState, useEffect } from "react";
import { Heart, Plus } from "lucide-react";
import Modal from "./Modal";
import Button from "./Button";
import InputField from "./InputField";
import {
  useWishlistCollection,
  useWishlistCollections,
} from "../../features/wishlist/wishlistHooks";
import Toast from "./Toast";
import Tooltip from "./Tooltip";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const WishlistButton = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);
  const [isLiked, setIsLiked] = useState(false);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  const {
    collections,
    createCollection,
    error: collectionsError,
    clearError: clearCollectionsError,
  } = useWishlistCollections();

  const {
    addProduct,
    error: collectionError,
    clearError: clearCollectionError,
  } = useWishlistCollection();

  //  Determine if product is already in any collection
  useEffect(() => {
    const found = collections?.some((col) =>
      col.products?.some?.((p) =>
        typeof p === "string" ? p === product._id : p._id === product._id
      )
    );
    setIsLiked(found);
  }, [collections, product._id]);

  //  Show errors from API
  useEffect(() => {
    if (collectionsError) {
      Toast.error(collectionsError.message || "Collection error");
      clearCollectionsError();
    }
  }, [collectionsError]);

  useEffect(() => {
    if (collectionError) {
      Toast.error(collectionError.message || "Wishlist action failed");
      clearCollectionError();
    }
  }, [collectionError]);

  const toggleLike = async () => {
    if (!isAuthenticated) {
      Toast.info("Please login to use wishlist");
      setTimeout(() => {
        navigate("/login");
      }, 1200);
      return;
    }

    try {
      setIsProcessing(true);
      const newLikeState = !isLiked;
      setIsLiked(newLikeState);

      if (newLikeState) {
        Toast.success("Added to wishlist");
        const sortedCollections = [...collections].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const latestCollection = sortedCollections[0];

        if (latestCollection) {
          await addProduct(latestCollection._id, product._id);
        }
        setShowModal(true);
      } else {
        // Remove from all collections
        for (const col of collections) {
          if (col.products?.includes?.(product._id)) {
            await removeFromCollection(col._id, product._id);
          }
        }
        Toast.info("Removed from wishlist");
      }
    } catch (err) {
      Toast.error("Failed to update wishlist");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreateCollection = async () => {
    if (!newCollectionName.trim()) {
      Toast.warning("Collection name required");

      return;
    }

    try {
      setIsProcessing(true);
      const payload = {
        name: newCollectionName,
        products: [product._id],
      };

      const result = await createCollection(payload);

      if (result?.type?.includes("/fulfilled")) {
        Toast.success("Collection created");

        setNewCollectionName("");
        if (result?.type?.includes("/rejected")) {
          Toast.error(result?.payload?.message || "Collection creation failed");
        }
      } else {
        if (result?.type?.includes("/rejected")) {
          Toast.error(result?.payload?.message || "Collection creation failed");
        }

        Toast.error("Collection creation failed");
      }
    } catch (err) {
      Toast.error("Failed to create collection");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddToCollection = async (collectionId) => {
    try {
      setIsProcessing(true);
      setSelectedCollectionId(collectionId);

      await addProduct(collectionId, product._id);
      Toast.success("Product added to collection");
      setShowModal(false);
    } catch (err) {
      Toast.error("Failed to add to collection");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleLike}
        disabled={isProcessing}
        className="absolute top-0 right-4 p-[6px] transition hover:scale-110"
        aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
      >
        {isProcessing ? (
          <span className="w-6 h-6 border-2 border-gray-300 rounded-full animate-spin border-t-black" />
        ) : isLiked ? (
          <Tooltip text="Remove from wishlist" position="bottom">
            <Heart className="w-6 h-6 text-red-500" fill="red" />
          </Tooltip>
        ) : (
          <Tooltip text="Add to wishlist" position="bottom">
            <Heart className="w-6 h-6 text-gray-400 hover:text-red-500" />
          </Tooltip>
        )}
      </button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6 bg-white rounded-lg">
          <h3 className="mb-4 text-lg font-semibold">Save to Collection</h3>

          {/* Existing collections */}
          <div className="mb-6">
            <h4 className="mb-2 font-medium">Your Collections</h4>
            {collections.length > 0 ? (
              <ul className="space-y-2 overflow-y-auto max-h-40">
                {collections.map((collection) => (
                  <li
                    key={collection._id}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50"
                  >
                    <span>{collection.name}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddToCollection(collection._id)}
                      loading={
                        isProcessing && selectedCollectionId === collection._id
                      }
                      label="Add"
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No collections yet.</p>
            )}
          </div>

          {/* New collection creation */}
          <div>
            <h4 className="mb-2 font-medium">Create New Collection</h4>
            <div className="flex gap-2">
              <InputField
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                placeholder="Collection name"
                className="flex-1"
                disabled={isProcessing}
              />
              <Button
                onClick={handleCreateCollection}
                disabled={!newCollectionName.trim() || isProcessing}
                loading={isProcessing}
                size="sm"
                label="Add"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WishlistButton;
