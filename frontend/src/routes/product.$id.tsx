import { useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { AlertTriangle } from 'lucide-react';

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

  return <div>{product.data.product_name}</div>;
}
