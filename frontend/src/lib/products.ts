import { mutationOptions, queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { createApiResponseSchema, GET, POST } from '@/lib/api';
import { typeSchema } from '@/lib/types';

export type CreateProductData = z.infer<typeof createProductSchema>;
export type Products = z.infer<typeof productsSchema>;

export const createProductSchema = z.object({
  manufacturer: z.string().min(1).max(45),
  price: z.number().int().nonnegative(),
  product_name: z.string().min(1).max(70),
  stock: z.number().int().nonnegative(),
  type_id: z.number().int().positive(),
});

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
