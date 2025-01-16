'use client';

import IProduct from '@/types/products';
import Image from 'next/image';

export default function ProductList({ products }: { products: IProduct[] }) {
  const handleClick = (product: IProduct) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '{}');
    if (cart[product.name]) {
      cart[product.name] = {
        ...cart[product.name],
        quantity: cart[product.name].quantity + 1,
      };
    } else {
      cart[product.name] = { ...product, quantity: 1 };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className='flex justify-center gap-4 flex-wrap'>
      {products.map((product) => (
        <div key={product.name} className='border rounded'>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
          />
          <div className='flex justify-between p-2 items-center'>
            <p>{product.name}</p>
            <button
              onClick={() => handleClick(product)}
              className='p-3 border rounded'
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
