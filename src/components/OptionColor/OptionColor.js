import clsx from 'clsx';
import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
	const prepareColorClassName = (color) => {
		return styles[
			'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
		];
	};

	return (
		<div className={styles.colors}>
			<h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
				{colors.map((color) => {
					return (
						<li key={color}>
							<button
								className={clsx(
									prepareColorClassName(color),
									color === currentColor && styles.active
								)}
								onClick={(e) => {
									e.preventDefault();
									setCurrentColor(color);
								}}
							></button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

OptionColor.propTypes = {
	colors: PropTypes.array.isRequired,
	currentColor: PropTypes.string.isRequired,
	setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;