import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { toast } from 'sonner';

import { CreateProductForm } from '@/components/create-product-form';
import { createProduct } from '@/lib/products';
import { getTypes } from '@/lib/types';

export const Route = createFileRoute('/products/create')({
  component: RouteComponent,
});

function RouteComponent() {
  const router = useRouter();

  const { mutate } = useMutation({
    ...createProduct(),
    onError: () => {
      toast.error('Váratlan hiba történt a termék rögzítése során. Próbálja újra később!');
    },
    onSuccess: () => router.navigate({ to: '/' }),
  });

  const { data: types } = useSuspenseQuery(getTypes());

  return (
    <div className="container flex flex-col items-center gap-8 px-6 py-12">
      <h1 className="text-center text-2xl font-bold">Termék rögzítése</h1>

      {types && <CreateProductForm createProduct={mutate} types={types.data} />}
    </div>
  );
}
