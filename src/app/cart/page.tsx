'use client';

import IProduct from '@/types/products';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CartPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    const items = Object.values(cart) as IProduct[];
    setProducts(items);
  }, []);

  return (
    <div className='flex flex-col p-5 gap-2'>
      {products.map((product) => (
        <div key={product.name} className='flex gap-5 border'>
          <Image
            src={product.image}
            alt={product.name}
            height={100}
            width={100}
          />
          <p className='text-2xl'>{product.name}</p>
          <p className='text-lg'>{product.quantity}</p>
          <p>{(product?.quantity || 1) * product.price}</p>
        </div>
      ))}
    </div>
  );
}
