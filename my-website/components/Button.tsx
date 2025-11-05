 interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', href, onClick }: ButtonProps) {
  const baseClass = "px-6 py-3 rounded-lg font-medium transition transform hover:scale-105";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
  };

  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variants[variant]} inline-block`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {children}
    </button>
  );
}