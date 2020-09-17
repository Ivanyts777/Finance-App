import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Table from './Table/Table';
import Chart from './Chart/Chart';
import styles from './Diagram.module.css';
import Balance from "../Balance/Balance";
import CurrencyExchage from "../CurrencyExchage/CurrencyExchage";
import Menu from "../Menu/Menu";


const {
  diagram,
  chartBlock,
  chartBlockHeader,
  diagramHeader,
  wrapper,
  mainGlobal,
  showTabletDesktop
} = styles;

const colors = [
  '#ecb22a',
  '#e28b20',
  '#d25925',
  '#67b7d0',
  '#5593d7',
  '#3e6ba8',
  '#9cc254',
  '#73ad57',
  '#507c3a',
];

const calendarMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


const Diagram = () => {
  Diagram.ropTypes = {
    finance: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };

const [expenses, setExpenses] = useState([25]);
const [income, setIncome] = useState([15]);
const [statistics, setStatistics] = useState([]);
const [currentYear, setCurrentYear] = useState(Number(moment(moment()).format('YYYY')));
const [currentMonth, setCurrentMonth] = useState(moment(moment()).format('MMMM'));
const [month, setMonth] = useState([{ label: 'All months', value: '' }]);
const [year, setYear] = useState([{ label: 'All years', value: 0 }]);
const [data, setData] = useState({
  labels: [],
  datasets: [
    {
      data: [],
      backgroundColor: colors,
      color: ['#ffffff'],
    },
  ],
},);

// const pickColor = state => state.data.datasets[0].backgroundColor;

// const dispach = useDispatch;
const finance = useSelector((state) => state.finance);

useEffect(() => {
  const allExpenses = filterTransactions(finance.data, 'expense');
  const allIncome = filterTransactions(finance.data, 'income');

  setExpenses(allExpenses);
  setIncome(allIncome);

  sortTransactions(finance.data, currentMonth, currentYear);

  const years = finance.data
    .map(trans =>
      Number(moment(Date.parse(trans.transactionDate)).format('YYYY')),
    )
    .sort();

    const months = finance.data.map((trans) =>
      moment(Date.parse(trans.transactionDate)).format('MMMM'),
    );

    years.forEach((yea, idx) =>
    years.indexOf(yea) === idx
      ? setYear([{ label: yea, value: year },...year])
      : null,
  );

  calendarMonths.forEach(calendarMonth => {
    months.forEach((mont, idx) =>
      calendarMonth === mont && months.indexOf(mont) === idx
        ? setMonth([{ label: calendarMonth, value: calendarMonth },...month])
        : null,
    );
  });
}, [currentMonth,currentYear,finance])

// useEffect(() => {
//   sortTransactions(finance.data, currentMonth, currentYear);
// }, [currentMonth,currentYear,statistics])


useEffect(() => {
  
  filterStatistics();
}, [currentMonth,currentYear,statistics])


const filterTransactions = (transaction, type) =>
    transaction.filter(trans => trans.type === type);

const getTotal = expenses =>
    expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

const formStatistics = costs => {
  let counter = 0;
  const arr = [];
  const stateCopy = { ...data.datasets[0].backgroundColor };

  Object.keys(costs).forEach(key => {
    arr.push({
      id: counter,
      category: key,
      amount: costs[key],
      color: stateCopy[counter],
    });
    counter += 1;
  });
  setStatistics(arr)
  };

  const filterStatistics = () => {

    const categories = statistics.map(el => el.category);
    const costs = statistics.map(el => el.amount);

    const stateCopy = { ...data };

    stateCopy.datasets[0].data = costs;

    setData({...data,labels: categories,
      datasets: [...stateCopy.datasets]})
  };

  const sortTransactions = (transactions) => {
    const sorted = transactions.filter(trans => {
      const date = moment(Date.parse(trans.transactionDate)).format(
        'YYYY MMMM',
      );
      const byMonth = date.includes(currentMonth);
      const byYear = date.includes(currentYear);
      return byMonth && byYear;
    });

    const allExpenses = filterTransactions(sorted, 'expense');
    const allIncome = filterTransactions(sorted, 'income');

    setExpenses(allExpenses);
    setIncome(allIncome);
    const totalCosts = getTotal(allExpenses);
    return formStatistics(totalCosts);
  }

const handleChange = ({ value }) => {
  setCurrentYear(typeof value !== 'string' ? value : currentYear)
  setCurrentMonth(typeof value === 'string' ? value : currentMonth)
};

  const getSum = transaction =>
    transaction.reduce((acc, trans) => acc + trans.amount, 0);



  return (
    <div>
        <div className={mainGlobal}>
        <div>
          <Menu />
          <div className={showTabletDesktop}>
            <Balance />
            <CurrencyExchage />
          </div>
        </div>
      <div className={diagram}>
        <div className={diagramHeader}>
          <h2>Statistics</h2>
        </div>
        <div className={wrapper}>
          <div className={chartBlock}>
            <div className={chartBlockHeader}>
              <h2>Statistics</h2>
            </div>

            {statistics.length > 0 ? (
              <Chart data={data} />
            ) : (
              'No transactions during this period'
            )}
          </div>

          <Table
            year={year}
            month={month}
            data={statistics}
            handleChange={handleChange}
            expenses={getSum(expenses)}
            income={getSum(income)}
            currentYear={currentYear}
            currentMonth={currentMonth}
          />
        </div>
      </div>
      </div>
      </div>
  );
};

export default Diagram;
