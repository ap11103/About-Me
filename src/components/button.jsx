export const Button = ({ children, variant }) => (
  <button className={`px-4 py-2 rounded-md border ${variant === "outline" ? "border-gray-400" : "bg-blue-500 text-white"}`}>
    {children}
  </button>
);
