import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod';

import { createApiResponseSchema, GET } from '@/lib/api';

export const typeSchema = z.object({
  id: z.number().int().positive(),
  name: z.string().max(35),
});
const typeResonseSchema = createApiResponseSchema(typeSchema);

const typesSchema = z.array(typeSchema);
const typesResonseSchema = createApiResponseSchema(typesSchema);

export function getType(id: number) {
  return queryOptions({
    queryFn: () => GET(`/api/types/${id}`, typeResonseSchema),
    queryKey: ['types', 'show', { id }],
  });
}

export function getTypes() {
  return queryOptions({
    queryFn: () => GET('/api/types', typesResonseSchema),
    queryKey: ['types', 'index'],
  });
}
