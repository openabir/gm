export default function Loading() {
  return (
    <div className="w-full py-12 flex items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-orange-200 dark:border-orange-900" />
        <div className="absolute inset-0 rounded-full border-4 border-t-orange-600 dark:border-t-orange-400 animate-spin" />
      </div>
    </div>
  );
}
