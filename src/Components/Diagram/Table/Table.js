import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styles from './Table.module.css';

const {
  stateless,
  statelessSelect,
  statelessSelectGroup,
  statelessHeader,
  statelessListTablet,
  statelessList,
  statelessListItem,
  statelessIcone,
  statelessTitle,
  statelessAmount,
  statelessLine,
  statelessLineLast,
  statelessFooter,
  tableExpenses,
  tableSpan,
} = styles


const Table = ({
    data,
    handleChange,
    expenses,
    income,
    year,
    month,
    currentMonth,
    currentYear,
  }) => (
      <div className={stateless}>
        <div className={statelessSelect}>
          <div className={statelessSelectGroup}>
            <Select
              onChange={handleChange}
              options={month}
              defaultValue={{ label: currentMonth, value: currentMonth }}
            />
          </div>
          <div className={statelessSelectGroup}>
            <Select
              onChange={handleChange}
              options={year}
              defaultValue={{ label: currentYear, value: currentYear }}
            />
          </div>
        </div>
        <div className={statelessHeader}>
          <p>Category</p>
          <p>Amount</p>
        </div>
        <div>
        <ul className={statelessListTablet}>
          {data.map(d => (
            <li className = {statelessList} key={d.id}>
              <span className={statelessListItem}>
                <div>
                  <span
                    className={statelessIcone}
                    style={{ backgroundColor: `${d.color}` }}
                  />
                  <span className={statelessTitle}>{d.category}</span>
                </div>
                <span className={statelessAmount}>{d.amount.toFixed(2)}</span>
              </span>
              <div className={statelessLine} />
            </li>
          ))}
        </ul>
      </div>
      <div className={statelessLineLast} />
      <div className={statelessFooter}>
        <p className={tableExpenses}>
          <span className={tableSpan}>Expenses: </span>
          <span style={{ color: '#ff6c00' }}>{expenses.toFixed(2)} UAH</span>
        </p>
        <p className={tableExpenses}>
          <span className={tableSpan}>Incoming:</span>
          <span style={{ color: '#415b7d' }}>{income.toFixed(2)} UAH</span>
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