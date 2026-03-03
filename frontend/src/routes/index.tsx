import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

import { ProductsTable } from '@/components/products-table';
import { getProducts } from '@/lib/products';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: products, isLoading } = useQuery(getProducts());

  return (
    <div className="container flex flex-col gap-6 py-12">
      <h1 className="text-2xl font-bold">Termékek</h1>

      <ProductsTable isLoading={isLoading} products={products?.data} />
    </div>
  );
}
