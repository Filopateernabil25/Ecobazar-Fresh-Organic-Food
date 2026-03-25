import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ إضافة منتج
  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ حذف
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ زيادة
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  const applyCoupon = () => {
    if (coupon === "SALE10") {
      setDiscount(0.1);
    } else if (coupon === "SALE20") {
      setDiscount(0.2);
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  const total = subtotal - subtotal * discount;

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // عشان تتمسح كمان من التخزين
  };

  // متنساش تضيفها في الـ return بتاع الـ Provider
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        subtotal,
        total,
        coupon,
        setCoupon,
        applyCoupon,
        discount,
        clearCart // <--- ضيف دي هنا
      }}
    >
      {children}
    </CartContext.Provider>
  );
}