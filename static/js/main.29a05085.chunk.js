(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),c=a(8),i=a.n(c),r=(a(15),a(3)),o=a(4),l=a(6),b=a(5),j=a(10),u=a(2),d=a.n(u),h=a(0),p=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={total:0,positivePercentage:0},t}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:d.a.statistics,children:[Object(h.jsx)("h2",{children:"Statistics"}),Object(h.jsx)("ul",{className:d.a.statistics__list,children:Object.entries(this.props).map((function(t){var e=Object(j.a)(t,2),a=e[0],s=e[1];return Object(h.jsxs)("li",{className:d.a.statistics__item,id:a,children:[a,":",Object(h.jsx)("span",{className:d.a.statistics__vote,children:s})]},a)}))})]})}}]),a}(s.Component),v=p,_=a(9),O=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).handleIncrementVote=function(e){var a=e.target;t.setState((function(t){return Object(_.a)({},a.textContent,t[a.textContent]+1)})),t.props.onLeaveFeedback(t.state)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.props.options;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Please leave feedback"}),e.map((function(e){return Object(h.jsx)("button",{type:"button",className:d.a.btn,id:e,onClick:t.handleIncrementVote,children:e},e)}))]})}}]),a}(s.Component),f=O,m=function(t){Object(l.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(r.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.handleData=function(t){console.log(t)},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,s=t.bad,n=t.total;return Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{options:Object.keys(this.state),onLeaveFeedback:this.handleData}),Object(h.jsx)(v,{good:e,neutral:a,bad:s,total:n,positivePercentage:this.state.positivePercentage})]})}}]),a}(s.Component),x=m;i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))},2:function(t,e,a){t.exports={statistics:"Statistics_statistics__xyKbB",statistics__list:"Statistics_statistics__list__28sG1",statistics__item:"Statistics_statistics__item__1yo44",statistics__vote:"Statistics_statistics__vote__2UGEv"}}},[[17,1,2]]]);
//# sourceMappingURL=main.29a05085.chunk.js.map