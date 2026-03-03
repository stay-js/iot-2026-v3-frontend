import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { FormInput, FormSelect } from '@/components/form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SelectGroup, SelectItem, SelectLabel } from '@/components/ui/select';
import { type CreateProductData } from '@/lib/products';
import { type Types } from '@/lib/types';

type CreateProductFormProps = {
  createProduct: (data: CreateProductData) => void;
  types: Types;
};

const formSchema = z.object({
  manufacturer: z
    .string()
    .min(1, { error: 'A gyártó neve kötelező!' })
    .max(45, { error: 'A gyártó neve max. 45 karakter lehet!' }),
  price: z.string().refine(
    (val) => {
      const num = Number(val);
      return Number.isInteger(num) && num > 0;
    },
    { error: 'Az ár csak pozitív egész szám lehet!' },
  ),
  product_name: z
    .string()
    .min(1, { error: 'A termék neve kötelező!' })
    .max(70, { error: 'A termék neve max. 70 karakter lehet!' }),
  stock: z.string().refine(
    (val) => {
      const num = Number(val);
      return Number.isInteger(num) && num > 0;
    },
    { error: 'A készlet csak pozitív egész szám lehet!' },
  ),
  type_id: z.string().refine(
    (val) => {
      const num = Number(val);
      return Number.isInteger(num) && num > 0;
    },
    { error: 'Kérem válasszon típust!' },
  ),
});

type FormSchema = z.infer<typeof formSchema>;

const defaultValues = {
  manufacturer: '',
  price: '',
  product_name: '',
  stock: '',
  type_id: '',
} satisfies FormSchema;

export function CreateProductForm({ createProduct, types }: CreateProductFormProps) {
  const { control, handleSubmit, reset } = useForm<FormSchema>({
    defaultValues,
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    createProduct({
      ...data,
      price: Number(data.price),
      stock: Number(data.stock),
      type_id: Number(data.type_id),
    });

    reset(defaultValues);
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Új IoT eszköz rögzítése</CardTitle>
      </CardHeader>

      <CardContent>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormInput
              control={control}
              label="Gyártó"
              name="manufacturer"
              placeholder="Pl.: Bosch, Honeywell"
            />

            <FormInput
              control={control}
              label="Termék neve"
              name="product_name"
              placeholder="Pl.: BME280 Hőmérséklet érzékelő"
            />

            <FormSelect
              control={control}
              label="Eszköz típusa"
              name="type_id"
              placeholder="Válasszon típust..."
            >
              <SelectGroup>
                <SelectLabel>Típusok</SelectLabel>

                {types.map((type) => (
                  <SelectItem key={type.id} value={type.id.toString()}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </FormSelect>

            <FormInput control={control} label="Készlet (db)" name="stock" placeholder="Pl.: 3" />

            <FormInput control={control} label="Ár (Ft)" name="price" placeholder="Pl.: 3000" />
          </div>

          <Button className="self-end" type="submit">
            Rögzítés
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
