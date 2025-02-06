import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  enableIndexedDbPersistence,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import PageTemplate from "components/templates/PageTemplate";
import PageSentence from "components/molecules/PageSentence";
import Image from "next/image";
import firebase_app from "firebaseConfig";
import { formatRupiah } from "utils";
const db = getFirestore(firebase_app);

const cartAtom = atomWithStorage("cart", []);

const Sewa = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [products, setProducts] = useState<Tool[]>([]);
  const [sizes, setSizes] = useState({});
  const [categories, setCategories] = useState([
    { id: 1, name: "Semua Kategori" },
  ]);
  const [isLoading, setisLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const fetchSizes = async () => {
    try {
      const docRef = doc(collection(db, "lists"), "ukuran"); // Replace "array" with actual document ID
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        setSizes(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      alert("Error fetching sizes");
      console.error("Error fetching categories:", error);
    }
  };
  const fetchCategory = async () => {
    try {
      const docRef = doc(collection(db, "lists"), "array"); // Replace "array" with actual document ID
      const docSnap = await getDoc(docRef);

      console.log("docSnap", docSnap);
      if (docSnap.exists()) {
        const data = docSnap.data();
        const categoryArray = data?.category || []; // Ensure 'category' exists
        setCategories([
          { id: 1, name: "Semua Kategori" },
          ...categoryArray.map((name: string, index: number) => ({
            id: index + 2,
            name,
          })),
        ]);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      alert("Error fetching categories");
      console.error("Error fetching categories:", error);
    }
  };

  const fetchTools = async () => {
    setisLoading(true);
    try {
      const q = query(collection(db, "tools"), orderBy("createdAt", "desc")); // Sort by createdAt in descending order
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("data", data);
      setProducts(data as Tool[]);
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchCategory();
    fetchTools();
    fetchSizes();
  }, []);

  const handleSizeSelect = (id: string, size: string) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      product.selectedSize = size;
    }
    setProducts([...products]);
  };

  return (
    <PageTemplate title="Sewa - Safa-Outdoor">
      <section className="w-full -mb-20 mt-20">
        <div className="overflow-x-auto flex gap-4 p-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`whitespace-nowrap px-4 py-2 border ${
                selectedCategory === category.id
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              } rounded-full transition duration-300`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
      <section className="place-items-center ">
        <div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-row lg:flex-col flex group bg-slate-50 p-4 transition-all duration-300 hover:border-red-600 hover:border-2 hover:shadow-lg hover:bg-white rounded-md"
              >
                <Image
                  width={300}
                  height={300}
                  alt={product.imageUrl[0]}
                  src={product.imageUrl[0]}
                  className=" object-cover object-center group-hover:opacity-75"
                />
                <div className="flex flex-col gap-2 w-full">
                  <h3 className="mt-4 text-sm text-gray-700">
                    {product?.toolsName}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-green-700">
                    {formatRupiah(product.toolsRentPrice)}
                  </p>

                  {/* Size Selection Dropdown */}
                  <div className="mt-2">
                    <label
                      className="text-gray-700"
                      htmlFor={`size-${product.id}`}
                    >
                      Select Size:
                    </label>
                    <select
                      id={`size-${product.id}`}
                      value={product.selectedSize || ""}
                      onChange={(e) => {
                        handleSizeSelect(product.id, e.target.value);
                      }}
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    >
                      <option value="" disabled>
                        Select size
                      </option>
                      {sizes[product.category.toLowerCase()].map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Conditional Display of Increase/Decrease Buttons */}

                  <div className="mt-4 flex items-center gap-2">
                    {/* Decrease Button */}
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => {}}
                    >
                      -
                    </button>

                    {/* Display Quantity */}
                    <span>{product.quantity || 0}</span>

                    {/* Increase Button */}
                    <button
                      className="px-3 py-1 bg-gray-300 rounded"
                      onClick={() => {}}
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="mt-2 w-full px-3 py-2 bg-blue-500 text-white rounded"
                    onClick={() => {}}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Sewa;
