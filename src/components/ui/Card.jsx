import  'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'lucide-react';

const Card = ({
  title,
  description,
  icon: Icon,
  footer,
  onClick,
  variant = 'default',
  isHoverable = false,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variants = {
    default: 'bg-white shadow-sm hover:shadow-md',
    outlined: 'border border-gray-200 hover:border-indigo-500',
    elevated: 'bg-white shadow-md hover:shadow-xl',
    flat: 'bg-gray-50 hover:bg-gray-100'
  };

  const clickableStyles = onClick ? 'cursor-pointer' : '';
  const hoverStyles = isHoverable ? 'transform hover:-translate-y-1' : '';

  return (
    <div
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${clickableStyles}
        ${hoverStyles}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...props}
    >
      {(Icon || title) && (
        <div className="p-6 border-b border-gray-100">
          {Icon && (
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-indigo-600" />
            </div>
          )}
          {title && (
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          )}
          {description && (
            <p className="mt-2 text-gray-600">{description}</p>
          )}
        </div>
      )}

      <div className="p-6">
        {children}
      </div>

      {footer && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl">
          {typeof footer === 'string' ? (
            <div className="flex items-center justify-between text-sm text-gray-600">
              {footer}
              <ChevronRight className="w-4 h-4" />
            </div>
          ) : (
            footer
          )}
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.elementType,
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated', 'flat']),
  isHoverable: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  title: null,
  description: null,
  icon: null,
  footer: null,
  onClick: null,
  variant: 'default',
  isHoverable: false,
  className: '',
  children: null,
};

// Sous-composants
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`p-6 border-b border-gray-100 ${className}`} {...props}>
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardHeader.defaultProps = {
  className: '',
};

const CardBody = ({ children, className = '', ...props }) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
);

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardBody.defaultProps = {
  className: '',
};

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-xl ${className}`} {...props}>
    {children}
  </div>
);

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.defaultProps = {
  className: '',
};

// Attacher les sous-composants
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;