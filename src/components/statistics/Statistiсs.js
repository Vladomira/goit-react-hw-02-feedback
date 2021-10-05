import React from "react";
import PropTypes from "prop-types";
import "../styles/statistics.scss";

// ===
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className="statistics__list">
        <li className="statistics__item">Good: {good}</li>
        <li className="statistics__item">Neutral: {neutral}</li>
        <li className="statistics__item">Bad: {bad}</li>
        <li className="statistics__item">Total: {total}</li>
        <li className="statistics__item">
          Positive feedback: {positivePercentage}%
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  // positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
// ==============
// class Statistics extends Component {
//   static defaultProps = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
//   };

//   render() {
//     return (
//       <>
//         <h2>Statistics</h2>
//         <ul className={st.statistics__list}>
//           {Object.entries(this.props).map(([key, value]) => (
//             <li className={st.statistics__item} id={key} key={key}>
//               {key}:<span className={st.statistics__vote}>{value}</span>
//             </li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

// ===============
///
//  {/* {Object.keys(this.props).map((el) => (
//             // const itemId = shortid.generate()
//             <li className={st.statistics__item} id={el} key={el}>
//               {el}:
//               <span className={st.statistics__vote}>{this.props.value}.</span>;
//             </li>
//           ))} */}
//           {/* <li> Total: <span>{}</span>   </li> */}
//           {/* {/* <li>Positive feedback: <span>{}%</span></li> */}
