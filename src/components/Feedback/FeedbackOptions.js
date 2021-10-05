import PropTypes from "prop-types";
// [option]: state[option] + 1,
import "../styles/statistics.scss";
import React, { Component } from "react";

class FeedbackOptions extends Component {
  static defaultProps = {
    options: PropTypes.array.isRequired,
    // good: PropTypes.number.isRequired,
    // neutral: PropTypes.number.isRequired,
    // bad: PropTypes.number.isRequired,
  };
  render() {
    const { options } = this.props;
    return (
      <div className="btn__block">
        {options.map((el) => (
          <button
            type="button"
            className="btn__item"
            id={el}
            key={el}
            onClick={this.props.onLeaveFeedback}
          >
            {el}
          </button>
        ))}
      </div>
    );
  }
}
export default FeedbackOptions;
// render() {
//   const { options } = this.props;
//   return (
//     <div>
//       <h1>Please leave feedback</h1>
//       {options.map((el) => (
//         //  btnId = shortid.generate()

//         <button
//           type="button"
//           className={st.btn}
//           id={el}
//           key={el}
//           onClick={this.handleIncrementVote}
//         >
//           {el}
//         </button>
//       ))}
//       {/* <Statistics
//         good={this.state.good}
//         neutral={this.state.neutral}
//         bad={this.state.bad}
//       /> */}

//       {/* <div className={st.statistics}>
//         <h2>Statistics</h2>
//         <ul className={st.statistics__list}>
//           {options.map((el) => (
//             // const itemId = shortid.generate()
//             <li className={st.statistics__item} id={el} key={el}>
//               {el}:
//               <span className={st.statistics__vote}>{this.state.value}.</span>
//             </li>
//           ))} */}
//       {/* <li> Total: <span>{}</span>   </li> */}
//       {/* {/* <li>Positive feedback: <span>{}%</span></li> */}
//       {/* </ul>
//       </div> */}
//     </div>
//   );
// }

// =============
// / onAction = () => {
//   document.querySelectorAll(".statistics__item").map((el) => {
//     console.log(this.state);
//     // if (el === this.state){
//     //   el.textContent = this.state.value
//     // }
//   });
// };
// const { target } = evt;
// return this.setState((prevState) => {
//   Object.entries(this.state).map(([key, value]) => {
//     // console.log(key, "k");
//     // console.log(value, "v");
//     if (target.textContent === key) {
//       return (prevState += 1);
//     }
//     return value;
//   });
// });

//  this.setState((prevState) => {
//   [target.textContent]: prevState[target.textContent] + 1
// if (target.textContent === 'good'){
//   this.state. += 1
// }
// Object.entries(this.state).map(([key, value]) => {
//   if (target.textContent === key) {
//     return (value += 1);
//   }
//   return value;
// });
// });
//   return this.setState((prevState) => {
//     Object.entries(this.state).map(([key, value]) => {
//       if (target.textContent === key) {
//         return (value += 1);
//       }
//       return value;
//     });
// });
// x = () =>
// this.setState((option) => {
// option:
// console.log(Object.values(prevState));
// console.log(target.textContent);
// if (target === Object.keys(prevState)) {
//   this.state.good.value += 1;
// }
// return {
// if(target === Object.keys(prevState))
//   if(target.textContent === Object.keys(prevState)){
//   ?  (Object.values(prevState) +=1 )
// : console.log(target.textContent)};}
// }
// });
// };

// onClick = (el) => {
//   this.setState({state[key] + 1});
//   console.log(this + 1);
// };
