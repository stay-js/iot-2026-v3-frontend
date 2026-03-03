type ProductDetailCardProps = {
  content: string;
  title: string;
};
export function ProductDetailCard({ content, title }: ProductDetailCardProps) {
  return (
    <div className="transition-hover flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg">
      <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">{title}</h3>
      <p className="text-2xl font-bold text-sky-900">{content}</p>
    </div>
  );
}
