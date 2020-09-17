import React, { useState, useEffect, useCallback } from 'react';
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

const finance = useSelector((state) => state.finance);

useEffect(() => {
  
  const allExpenses = filterTransactions(finance.data, 'expense');
  const allIncome = filterTransactions(finance.data, 'income');

  setExpenses(allExpenses);
  setIncome(allIncome); 

  const years = finance.data
    .map(trans =>
      Number(moment(Date.parse(trans.transactionDate)).format('YYYY')),
    )
    .sort();

    const months = finance.data.map((trans) =>
      moment(Date.parse(trans.transactionDate)).format('MMMM'),
    );

    years.forEach((year, idx) =>
    years.indexOf(year) === idx
      ? setYear(y =>[...y,{ label: year, value: year }])
      : null,
  );

  months.forEach((month,idx) => 
  
    months.indexOf(month) === idx
    
      // calendarMonth === month && months.indexOf(month) === idx
        ? setMonth(m => [...m,{ label: month, value: month}])
        : null,
  );

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

  sortTransactions(finance.data, currentMonth, currentYear);
},[finance.data, currentMonth, currentYear])

useEffect(() => {
  const filterStatistics = () => {

    const categories = statistics.map(el => el.category);
    const costs = statistics.map(el => el.amount);


    data.datasets[0].data = costs;
    setData(d => ({...d, labels: categories, datasets: [...d.datasets]}))

  };
  filterStatistics();
},[statistics,])



const filterTransactions = (transaction, type) =>
    transaction.filter(trans => trans.type === type);

const getTotal = expenses =>
    expenses.reduce((acc, exp) => {
      acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
      return acc;
    }, {});

const formStatistics = useCallback((costs) => {
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
  },[data]);

const handleChange = ({ value }) => {
  setCurrentYear(cry => typeof value !== 'string' ? value : cry)
  setCurrentMonth(crm => typeof value === 'string' ? value : crm)
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
