
import { Link, useLocation } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

const CustomLinks = ({ children, to, ...props }: LinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <div>
      <Link
        style={{
          padding: '5px',
          color: isActive ? 'blue' : '',
          transition: 'background-color 0.3s',
          borderRadius: '0.35rem',
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLinks;
