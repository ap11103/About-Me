export const Button = ({ children, variant = "default", className = "", ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-md border ${
      variant === "outline" ? "border-gray-400" : "bg-blue-500 text-white"
    } ${className}`}
  >
    {children}
  </button>
);