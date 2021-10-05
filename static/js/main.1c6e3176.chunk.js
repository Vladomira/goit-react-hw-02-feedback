(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),r=(n(15),n(10)),o=n(2),l=n(3),u=n(5),b=n(4),d=(n(8),n(0));function j(e){var t=e.title,n=e.children;return Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h1",{className:"title__main",children:t}),n]})}var h=n(6),O=n.n(h),v=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.message;return Object(d.jsx)("section",{children:Object(d.jsx)("h3",{className:"title__notification",children:e})})}}]),n}(a.Component);v.defaultProps={title:O.a.string.isRequired};var f=v,m=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.positivePercentage;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("ul",{className:"statistics__list",children:[Object(d.jsxs)("li",{className:"statistics__item",children:["Good: ",t]}),Object(d.jsxs)("li",{className:"statistics__item",children:["Neutral: ",n]}),Object(d.jsxs)("li",{className:"statistics__item",children:["Bad: ",a]}),Object(d.jsxs)("li",{className:"statistics__item",children:["Total: ",c]}),Object(d.jsxs)("li",{className:"statistics__item",children:["Positive feedback: ",s,"%"]})]})})},p=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.options;return Object(d.jsx)("div",{className:"btn__block",children:t.map((function(t){return Object(d.jsx)("button",{type:"button",className:"btn__item",id:t,onClick:e.props.onLeaveFeedback,children:t},t)}))})}}]),n}(a.Component);p.defaultProps={options:O.a.array.isRequired};var x=p;n(19);function k(e){var t=e.children;return Object(d.jsx)("div",{className:"container",children:t})}var _=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleIncrementVote=function(t){var n=t.target;e.setState((function(e){return Object(r.a)({},n.textContent,e[n.textContent]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){var t=Math.round(e.state.good/e.countTotalFeedback()*100);return isNaN(t)?"there will be a":t},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),s=this.countPositiveFeedbackPercentage();return Object(d.jsxs)(k,{children:[Object(d.jsx)(j,{title:"Please leave feedback",children:Object(d.jsx)(x,{options:Object.keys(this.state),onLeaveFeedback:this.handleIncrementVote})}),Object(d.jsx)(j,{title:"Statistics",children:0===c?Object(d.jsx)(f,{message:"No feedback given"}):Object(d.jsx)(m,{good:t,neutral:n,bad:a,total:c,positivePercentage:s})})]})}}]),n}(a.Component),g=_;i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},8:function(e,t,n){}},[[20,1,2]]]);
//# sourceMappingURL=main.1c6e3176.chunk.js.map