import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { AlertTriangle } from 'lucide-react';

import { ProductDetailCard } from '@/components/product-detail-card';
import { Button } from '@/components/ui/button';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { getProduct } from '@/lib/products';

export const Route = createFileRoute('/product/$id')({
  component: RouteComponent,
  errorComponent: () => (
    <div className="grid h-full min-h-screen place-content-center">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <AlertTriangle />
          </EmptyMedia>
          <EmptyTitle>Nem található</EmptyTitle>
          <EmptyDescription>A keresett termék nem található!</EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button asChild>
            <Link to="/">Vissza a főoldalra</Link>
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  ),
});

function RouteComponent() {
  const { id } = Route.useParams();

  const { data: product } = useSuspenseQuery(getProduct(id));
  if (!product) throw new Error('Not found');

  const stock = product.data.stock > 0 ? `${product.data.stock} db` : 'Nincs készleten';

  return (
    <div className="container flex flex-col gap-6 px-6 py-12">
      <h1 className="text-2xl font-bold">{product.data.product_name}</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <ProductDetailCard content={product.data.manufacturer} title="Gyártó" />
        <ProductDetailCard content={product.data.type.name} title="Típus" />
        <ProductDetailCard content={stock} title="Készlet" />
        <ProductDetailCard
          content={`${product.data.price.toLocaleString('hu-HU')} Ft`}
          title="Ár"
        />
      </div>
    </div>
  );
}
