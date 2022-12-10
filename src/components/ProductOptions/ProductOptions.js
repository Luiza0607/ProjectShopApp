import Button from '../Button/Button';
import styles from './ProductOptions.module.scss';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductOptions = ({
	sizes,
	currentSize,
	setCurrentSize,
	colors,
	currentColor,
	setCurrentColor,
	getSummary,
}) => {
	return (
		<form>
			<OptionSize
				sizes={sizes}
				currentSize={currentSize}
				setCurrentSize={setCurrentSize}
			></OptionSize>
			<OptionColor
				colors={colors}
				currentColor={currentColor}
				setCurrentColor={setCurrentColor}
			></OptionColor>
			<Button action={getSummary} className={styles.button}>
				<span className='fa fa-shopping-cart' />
			</Button>
		</form>
	);
};

ProductOptions.propTypes = {
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	setCurrentSize: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
	currentColor: PropTypes.string.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
	getSummary: PropTypes.func.isRequired,
};

export default ProductOptions;