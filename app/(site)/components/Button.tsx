'use client'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const Button = ({ children, onClick, className = '', type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                  bg-slate-800 text-white hover:bg-slate-700 shadow-lg shadow-slate-800/10
                  ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
