import { featuredProducts } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductsSection() {
  return (
    <section className="products-section">
      <div className="section-container">
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
