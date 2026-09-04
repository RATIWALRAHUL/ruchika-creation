"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CustomerProfile {
  id: string;
  name: string;
  mobile: string;
  mobileVerified: boolean;
  createdAt: string;
  email?: string;
}

export interface OrderItem {
  productId: string;
  productName: string;
  productImage: string;
  size: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
}

export type OrderStatus =
  | "ORDER_REQUESTED"
  | "CONFIRMED"
  | "PREPARING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

export interface OrderRecord {
  id: string; // e.g. "RC10001"
  date: string;
  customerName: string;
  customerMobile: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  createdAt: string;
}

interface ShopContextType {
  // Cart
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (product: Product, size?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;

  // Wishlist
  wishlist: Product[];
  wishlistCount: number;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;

  // Search & Quick View
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  // Customer Profile
  customer: CustomerProfile | null;
  isProfileOpen: boolean;
  setIsProfileOpen: (open: boolean) => void;
  profileInitialTab: "profile" | "setup" | "verify" | "orders" | "query";
  setProfileInitialTab: (tab: "profile" | "setup" | "verify" | "orders" | "query") => void;
  updateCustomer: (profile: CustomerProfile) => void;
  logoutCustomer: () => void;

  // Order Management
  orders: OrderRecord[];
  selectedOrder: OrderRecord | null;
  setSelectedOrder: (order: OrderRecord | null) => void;
  createOrderRequest: (
    cust: CustomerProfile,
    items: CartItem[],
    subtotal: number,
    shipping: number,
    total: number
  ) => OrderRecord;

  // Toasts
  toastMessage: string | null;
  showToast: (msg: string) => void;

  freeShippingThreshold: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

// Initial starter demo orders for verified profiles
const DEFAULT_DEMO_ORDERS: OrderRecord[] = [
  {
    id: "RC10001",
    date: "28 Aug 2026",
    customerName: "Rahul",
    customerMobile: "7340368544",
    status: "DELIVERED",
    createdAt: "2026-08-28T10:30:00.000Z",
    subtotal: 3497,
    shipping: 0,
    total: 3497,
    items: [
      {
        productId: "1",
        productName: "Black Embroidered Kurti",
        productImage: "/images/kurti-black-front.jpg",
        size: "M",
        quantity: 1,
        unitPrice: 1499,
        lineTotal: 1499,
      },
      {
        productId: "2",
        productName: "Maroon Embroidered Kurti",
        productImage: "/images/kurti-maroon-festive.jpg",
        size: "L",
        quantity: 1,
        unitPrice: 1299,
        lineTotal: 1299,
      },
      {
        productId: "4",
        productName: "Olive Printed Kurti",
        productImage: "/images/kurti-olive-printed.jpg",
        size: "M",
        quantity: 1,
        unitPrice: 699,
        lineTotal: 699,
      },
    ],
  },
];

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Customer Profile state
  const [customer, setCustomer] = useState<CustomerProfile | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [profileInitialTab, setProfileInitialTab] = useState<
    "profile" | "setup" | "verify" | "orders" | "query"
  >("profile");

  // Orders State
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);

  const freeShippingThreshold = 999;

  // Restore persisted state from localStorage
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("rc_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("rc_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));

      const savedCustomer = localStorage.getItem("rc_customer");
      if (savedCustomer) {
        const parsedCust: CustomerProfile = JSON.parse(savedCustomer);
        setCustomer(parsedCust);
      }

      const savedOrders = localStorage.getItem("rc_orders");
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      } else {
        // Starter demo order for instant preview
        setOrders(DEFAULT_DEMO_ORDERS);
        localStorage.setItem("rc_orders", JSON.stringify(DEFAULT_DEMO_ORDERS));
      }
    } catch {
      // Storage unavailable in SSR
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem("rc_cart", JSON.stringify(newCart));
    } catch {}
  };

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    try {
      localStorage.setItem("rc_wishlist", JSON.stringify(newWishlist));
    } catch {}
  };

  const updateCustomer = (profile: CustomerProfile) => {
    const customerWithFlag: CustomerProfile = {
      ...profile,
      mobileVerified: true,
    };
    setCustomer(customerWithFlag);
    try {
      localStorage.setItem("rc_customer", JSON.stringify(customerWithFlag));
    } catch {}
    showToast(`Hello, ${profile.name}! Details saved.`);
  };

  const logoutCustomer = () => {
    setCustomer(null);
    try {
      localStorage.removeItem("rc_customer");
    } catch {}
    showToast("Profile disconnected");
  };

  const createOrderRequest = (
    cust: CustomerProfile,
    items: CartItem[],
    subtotal: number,
    shipping: number,
    total: number
  ): OrderRecord => {
    const nextOrderNum = 10000 + orders.length + 1;
    const now = new Date();
    const dateFormatted = now.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newOrder: OrderRecord = {
      id: `RC${nextOrderNum}`,
      date: dateFormatted,
      customerName: cust.name,
      customerMobile: cust.mobile,
      status: "ORDER_REQUESTED",
      createdAt: now.toISOString(),
      subtotal,
      shipping,
      total,
      items: items.map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        productImage: item.product.image || "/images/kurti-black-front.jpg",
        size: item.size,
        quantity: item.quantity,
        unitPrice: item.product.price,
        lineTotal: item.product.price * item.quantity,
      })),
    };

    const updated = [newOrder, ...orders];
    setOrders(updated);
    try {
      localStorage.setItem("rc_orders", JSON.stringify(updated));
    } catch {}

    return newOrder;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3200);
  };

  const addToCart = (
    product: Product,
    size: string = "M",
    quantity: number = 1
  ) => {
    const existingIndex = cart.findIndex(
      (item) => item.product.id === product.id && item.size === size
    );

    let newCart: CartItem[];
    if (existingIndex > -1) {
      newCart = [...cart];
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart = [...cart, { product, quantity, size }];
    }
    saveCart(newCart);
    showToast(`Added "${product.name}" to Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    const newCart = cart.filter(
      (item) => !(item.product.id === productId && item.size === size)
    );
    saveCart(newCart);
  };

  const updateQuantity = (
    productId: string,
    size: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }
    const newCart = cart.map((item) => {
      if (item.product.id === productId && item.size === size) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some((item) => item.id === product.id);
    let newWishlist: Product[];
    if (exists) {
      newWishlist = wishlist.filter((item) => item.id !== product.id);
      showToast(`Removed "${product.name}" from Wishlist`);
    } else {
      newWishlist = [...wishlist, product];
      showToast(`Saved "${product.name}" to Wishlist`);
    }
    saveWishlist(newWishlist);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.id === productId);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const wishlistCount = wishlist.length;

  return (
    <ShopContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        wishlist,
        wishlistCount,
        isWishlistOpen,
        setIsWishlistOpen,
        toggleWishlist,
        isInWishlist,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        customer,
        isProfileOpen,
        setIsProfileOpen,
        profileInitialTab,
        setProfileInitialTab,
        updateCustomer,
        logoutCustomer,
        orders,
        selectedOrder,
        setSelectedOrder,
        createOrderRequest,
        toastMessage,
        showToast,
        freeShippingThreshold,
      }}
    >
      {children}
      {/* Refined Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#4B151A] text-[#FCFAF7] px-5 py-3 rounded-lg shadow-xl border border-[#B18A52]/40 text-sm animate-bounce-short transition-all">
          <span className="w-2 h-2 rounded-full bg-[#B18A52]"></span>
          <span>{toastMessage}</span>
        </div>
      )}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
