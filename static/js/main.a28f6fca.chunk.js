(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(7),s=t.n(i),o=(t(15),t(8)),r=t(1),l=t(2),m=t(4),u=t(3),h=t(5),g=(t(16),[{name:"Andy",img:"../../assets/images/andy.jpeg",clicked:!1},{name:"Angela",img:"../../assets/images/angela.jpeg",clicked:!1},{name:"Dwight",img:"../../assets/images/dwight.jpeg",clicked:!1},{name:"Jim",img:"../../assets/images/jim.jpeg",clicked:!1},{name:"Kevin",img:"../../assets/images/kevin.jpeg",clicked:!1},{name:"Michael",img:"../../assets/images/michael.jpeg",clicked:!1},{name:"Pam",img:"../../assets/images/pam.jpeg",clicked:!1},{name:"Stanley",img:"../../assets/images/stanley.jpeg",clicked:!1},{name:"Toby",img:"../../assets/images/toby.jpeg",clicked:!1}]),d=function(e){return c.a.createElement("div",{className:"coolPic",onClick:function(a){return e._handleClick(e.name)}},c.a.createElement("img",{src:e.img}),c.a.createElement("p",null,e.name))},p=(n.Component,t(17),t(18),function(e){function a(){return Object(r.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar navbar-light bg-light background"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},'Do You Remember "The Office"?'),c.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Score: ",this.props.score," | Top Score: ",this.props.topScore))}}]),a}(n.Component)),f=(t(19),t(20),function(){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Office Clicky Game!"),c.a.createElement("h2",null,"Click on any image to earn a point, but don't click on the same image more than once."))}),k=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(c)))).state={clickedImages:[],score:0,topScore:0,chars:[]},t.handleIncorrect=function(){t.setState({clickedImages:[],score:0})},t.handleTopScore=function(){var e=t.state,a=e.score;a>e.topScore&&t.setState({topScore:a})},t.shuffleData=function(e){for(var a=e.length-1;a>0;){var n=Math.floor(Math.random()*(a+1)),c=e[a];e[a]=e[n],e[n]=c,a--}return t.setState({chars:e}),e},t._handleClick=function(e){t.state.clickedImages.includes(e)?t.handleIncorrect():t.setState({clickedImages:[].concat(Object(o.a)(t.state.clickedImages),[e]),score:t.state.score+1},function(){t.handleTopScore(),t.shuffleData(t.state.chars)})},t}return Object(h.a)(a,e),Object(l.a)(a,[{key:"componentWillMount",value:function(){this.setState({chars:g})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(p,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(f,null),this.state.chars?this.state.chars.map(function(a,t){return c.a.createElement("div",null,c.a.createElement(d,{key:t,img:a.img,_handleClick:e._handleClick,name:a.name}))}):c.a.createElement("h1",null,"Nope"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.a28f6fca.chunk.js.map