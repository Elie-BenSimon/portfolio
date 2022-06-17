import './box.scss';
import PropTypes from 'prop-types';

const Box = ({ children }) => (
  <div className="box">
    <div className="box__header">Box Title</div>
    <div className="box__content">
      {children}
    </div>
  </div>
);

Box.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Box;
