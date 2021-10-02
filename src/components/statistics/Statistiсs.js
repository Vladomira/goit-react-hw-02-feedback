import React, { Component } from "react";
// import ReactDOM from "react";
// import shortid from "shortid";
import st from "./Statistics.module.css";

class Statistics extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // }

  render() {
    // const { options } = this.props;
    // console.log(Object.values(this.props));
    // console.log(Object.keys(this.props));
    return (
      <div className={st.statistics}>
        <h2>Statistics</h2>
        <ul className={st.statistics__list}>
          {Object.keys(this.props).map((el) => (
            // const itemId = shortid.generate()
            <li className={st.statistics__item} id={el} key={el}>
              {el}:
              <span className={st.statistics__vote}>{this.props.value}.</span>;
            </li>
          ))}
          {/* <li> Total: <span>{}</span>   </li> */}
          {/* {/* <li>Positive feedback: <span>{}%</span></li> */}
        </ul>
      </div>
    );
  }
}
export default Statistics;

// ========
// const Statistics = ({ options }) => {
//   return (
//     <div className={st.statistics}>
//       <h2>Statistics</h2>
//       <ul className={st.statistics__list}>
//         {options.map((el) => (
//           // const itemId = shortid.generate()
//           <li className={st.statistics__item} id={el} key={el}>
//             {el}:<span className={st.statistics__vote}>{this.state.value}</span>
//           </li>
//         ))}
//         {/* <li> Total: <span>{}</span>   </li> */}
//         {/* {/* <li>Positive feedback: <span>{}%</span></li> */}
//       </ul>
//     </div>
//   );
// };
