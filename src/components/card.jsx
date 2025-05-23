export const Card = ({ children }) => (
  <div className="border border-gray-300 rounded-xl shadow-md mb-4">
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);
