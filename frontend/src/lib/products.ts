import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { createApiResponseSchema, GET, POST } from '@/lib/api';
import { typeSchema } from '@/lib/types';

export const createProductSchema = z.object({
  manufacturer: z
    .string()
    .min(1, { error: 'A gyártó neve kötelező!' })
    .max(45, { error: 'A gyártó neve max. 45 karakter lehet!' }),
  price: z
    .number({ error: 'Az ár csak pozitív egész szám lehet!' })
    .int({ error: 'Az ár csak pozitív egész szám lehet!' })
    .nonnegative({ error: 'Az ár csak pozitív egész szám lehet!' }),
  product_name: z
    .string()
    .min(1, { error: 'A termék neve kötelező!' })
    .max(70, { error: 'A termék neve max. 70 karakter lehet!' }),
  stock: z
    .number({ error: 'A készlet  csak pozitív egész szám lehet!' })
    .int({ error: 'A készlet  csak pozitív egész szám lehet!' })
    .nonnegative({ error: 'A készlet  csak pozitív egész szám lehet!' }),
  type_id: z.number().int().positive(),
});
type CreateProductData = z.infer<typeof createProductSchema>;

const productSchema = z.object({
  id: z.number().int().positive(),
  manufacturer: z.string().max(45),
  price: z.number().int().nonnegative(),
  product_name: z.string().max(70),
  stock: z.number().int().nonnegative(),
  type: typeSchema,
});
const productResponseSchema = createApiResponseSchema(productSchema);

const productsSchema = z.array(productSchema);
const productsResponseSchema = createApiResponseSchema(productsSchema);

export type Products = z.infer<typeof productsSchema>;

export function createProduct() {
  return mutationOptions({
    mutationFn: (data: CreateProductData) => POST('/api/products', data, productResponseSchema),
  });
}

export function getProduct(id: string) {
  return queryOptions({
    queryFn: () => GET(`/api/products/${id}`, productResponseSchema),
    queryKey: ['products', 'show', { id }],
  });
}

export function getProducts() {
  return queryOptions({
    queryFn: () => GET('/api/products', productsResponseSchema),
    queryKey: ['products', 'index'],
  });
}
