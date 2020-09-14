import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-labels';
import styles from './Chart.module.css';

const Chart = ({ data }) => (
    <div className={styles.canvasContainer}>
      <Pie
        className={styles.pie}
        data= {data}
        options={{
          maintainAspectRatio: false,
          legend: {
            display: false,
          },
          plugins: {
            labels: {
              render: 'label',
              fontColor: 'white',
            },
          },
        }}
      />
    </div>
  );
  
  Chart.propTypes = {
    data: PropTypes.shape({
      labels: PropTypes.array,
      datasets: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
  };
  
  export default Chart;
