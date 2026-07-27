import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number) {
  return `NT$${price.toLocaleString()}`;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-card-image-wrap">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-name">{product.name}</h3>
        <div className="product-card-prices">
          <span className="product-price-original">{formatPrice(product.originalPrice)}</span>
          <span className="product-price-sale">{formatPrice(product.salePrice)}</span>
        </div>
      </div>
    </Link>
  );
}
