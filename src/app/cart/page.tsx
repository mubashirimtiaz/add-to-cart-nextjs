'use client';

import { useEffect } from 'react';

export default function CartPage() {
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    console.log({ cart });
  }, []);
  return <div>Cart</div>;
}
