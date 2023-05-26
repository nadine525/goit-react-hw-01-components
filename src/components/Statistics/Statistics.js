import PropTypes from 'prop-types';
import { Stat } from './Stat';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}
      <ul className={css.stat}>
        {stats.map(stat => (
          <Stat key={stat.id} label={stat.label} percentage={stat.percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
