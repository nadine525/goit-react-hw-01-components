import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Stat({ id, label, percentage }) {
  return (
    <li
      className={css.item}
      key={id}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Stat.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
