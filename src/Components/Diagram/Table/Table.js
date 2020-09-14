import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './Table.module.css';


const Table = ({
    data,
    // handleChange,
    expenses,
    income,
    year,
    month,
    currentMonth,
    currentYear,
  }) => (
      <div className={styles.stateless}>
        <div className={styles.statelessSelect}>
          <div className={styles.statelessSelectGroup}>
            <Select
              // onChange={handleChange}
              options={month}
              defaultValue={{ label: currentMonth, value: currentMonth }}
            />
          </div>
          <div className={styles.statelessSelectGroup}>
            <Select
            //   onChange={handleChange}
              options={year}
              defaultValue={{ label: currentYear, value: currentYear }}
            />
          </div>
        </div>
        <div className={styles.statelessHeader}>
          <p>Category</p>
          <p>Amount</p>
        </div>
        <div>
        <ul className={styles.statelessListTablet}>
          {data.map(d => (
            <li key={d.id}>
              <span className={styles.statelessListItem}>
                <div>
                  <span
                    className={styles.statelessIcone}
                    style={{ backgroundColor: `${d.color}` }}
                  />
                  <span className={styles.statelessTitle}>{d.category}</span>
                </div>
                <span className={styles.statelessAmount}>{d.amount}</span>
              </span>
              <div className={styles.statelessLine} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.statelessLineLast} />
      <div className={styles.statelessFooter}>
        <p className={styles.tableExpenses}>
          <span className={styles.tableSpan}>Expenses: </span>
          <span style={{ color: '#3a5374' }}>{expenses} UAH</span>
        </p>
        <p className={styles.tableExpenses}>
          <span className={styles.tableSpan}>Incoming:</span>
          <span style={{ color: '#ff6c00' }}>{income} UAH</span>
        </p>
      </div>
    </div>
    );
  
  Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
    handleChange: PropTypes.func.isRequired,
    expenses: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
  };
  
  export default Table;