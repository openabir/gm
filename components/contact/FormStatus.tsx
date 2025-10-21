import { motion } from "framer-motion";

interface FormStatusProps {
  status: {
    type: "success" | "error" | null;
    message: string;
  };
}

export function FormStatus({ status }: FormStatusProps) {
  if (!status.type) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg ${
        status.type === "success"
          ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
          : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
      }`}
    >
      {status.message}
    </motion.div>
  );
}
