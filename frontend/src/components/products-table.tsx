import { Link } from '@tanstack/react-router';

import { Button } from '@/components/ui/button';
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

const COLUMNS = ['Gyártó', 'Termék neve', 'Típus', 'Készlet', 'Ár'];

export function ProductsTable({ products }: { products: Products }) {
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
        {products.map((product, index) => (
          <TableRow
            className={cn(index % 2 === 0 ? 'bg-sky-100' : 'bg-indigo-100')}
            key={product.id}
          >
            <TableCell className="p-3">{product.manufacturer}</TableCell>
            <TableCell className="p-3">
              <Button asChild className="h-fit p-0" variant="link">
                <Link params={{ id: String(product.id) }} to="/products/$id">
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
