import { Link } from '@tanstack/react-router';

import { Skeleton } from '@/components/ui/skeleton';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { type Products } from '@/lib/products';
import { cn } from '@/lib/utils';

import { Button } from './ui/button';

export type ProductsTableProps = {
  isLoading: boolean;
  products: Products | undefined;
};

const COLUMNS = ['Gyártó', 'Termék neve', 'Típus', 'Készlet', 'Ár'];

export function ProductsTable({ isLoading, products }: ProductsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {COLUMNS.map((col) => (
            <TableHead key={col}>{col}</TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading &&
          Array.from({ length: 5 }).map((_, index) => (
            <TableRow className={cn(index % 2 === 0 ? 'bg-sky-100' : 'bg-indigo-100')} key={index}>
              {COLUMNS.map((col) => (
                <TableCell className="p-3" key={col}>
                  <Skeleton className="h-4 w-24" />
                </TableCell>
              ))}
            </TableRow>
          ))}

        {products?.map((product, index) => (
          <TableRow
            className={cn(index % 2 === 0 ? 'bg-sky-100' : 'bg-indigo-100')}
            key={product.id}
          >
            <TableCell className="p-3">{product.manufacturer}</TableCell>
            <TableCell className="p-3">
              <Button asChild className="h-fit p-0" variant="link">
                <Link params={{ id: String(product.id) }} to="/product/$id">
                  {product.product_name}
                </Link>
              </Button>
            </TableCell>
            <TableCell className="p-3">
              <span className="bg-sky-700 p-2 text-white">{product.type.name}</span>
            </TableCell>
            <TableCell className="p-3">{product.stock}</TableCell>
            <TableCell className="p-3">{product.price.toLocaleString('hu-HU')} Ft</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
