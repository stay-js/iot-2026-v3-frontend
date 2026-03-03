import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';

import { ProductsTable } from '@/components/products-table';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/products';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: products } = useSuspenseQuery(getProducts());

  return (
    <div className="container flex flex-col gap-6 px-6 py-12">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Termékek</h1>

        <Button asChild size="sm">
          <Link to="/products/create">Új termék</Link>
        </Button>
      </div>

      {products && <ProductsTable products={products.data} />}
    </div>
  );
}
