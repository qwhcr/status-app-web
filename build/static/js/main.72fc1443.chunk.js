(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(213)},123:function(e,t,a){},124:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(10),i=a.n(o),s=(a(123),a(51)),r=a(52),c=a(59),u=a(53),p=a(60),d=(a(124),a(217)),m=a(37),h=a(17),g=a(216),v=a(214),E=a(215),f=a(54),b=a.n(f),y="http://localhost:5000/app/status-app/api";"dev"!==Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_SOURCE&&(y="https://creat-ive.net/app/status-app/api");var O=y,w=v.a.Title,D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={name:null,quietLevel:null,loading:!1},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;console.log("1234"),console.log(Object({NODE_ENV:"production",PUBLIC_URL:""}));var t,a={margin:"15px",display:"block",height:"30px",lineHeight:"30px"};return console.log(this.props.name),console.log(this.props.quietLevel),t=4===this.props.quietLevel?{backgroundColor:"rgb(46, 64, 89)"}:{},l.a.createElement("div",null,l.a.createElement(E.a,{loading:this.props.loading,style:t},l.a.createElement(m.a,{type:"flex",align:"middle"},l.a.createElement(h.a,{span:12},l.a.createElement(w,null,this.props.name)),l.a.createElement(h.a,{span:12},l.a.createElement(g.a.Group,{disabled:this.state.loading,buttonStyle:"solid",value:String(this.props.quietLevel),onChange:function(t){e.setState({loading:!0}),b.a.get(O+"/update?name="+e.props.name+"&status="+t.target.value).then(function(t){e.props.getData()}).then(e.setState({loading:!1}))}},l.a.createElement("div",null,l.a.createElement(g.a.Button,{value:"1",style:a},"Away")),l.a.createElement("div",null,l.a.createElement(g.a.Button,{value:"2",style:a},"Working")),l.a.createElement("div",null,l.a.createElement(g.a.Button,{value:"3",style:a},"Chilling")),l.a.createElement("div",null,l.a.createElement(g.a.Button,{value:"4",style:a},"Sleeping")))))))}}]),t}(n.Component),j=a(114),k=a.n(j),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).getData=function(){console.log("called"),b.a.get(O+"/init").then(function(e){a.setState({data:e.data})})},a.state={data:null},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval(function(){e.getData()},3e4)}},{key:"render",value:function(){return console.log("render"),console.log(this.state),null==this.state.data?(this.getData(),l.a.createElement("div",{className:"App"},l.a.createElement(D,{loading:!0}),l.a.createElement(D,{loading:!0}))):l.a.createElement("div",{className:"App"},l.a.createElement(D,{name:this.state.data[0].name,quietLevel:this.state.data[0].status,getData:this.getData}),l.a.createElement(D,{name:this.state.data[1].name,quietLevel:this.state.data[1].status,getData:this.getData}),l.a.createElement(m.a,{type:"flex",algin:"middle",style:{marginTop:"10px",minHeight:"50px"}},l.a.createElement(h.a,{span:12},"Last Updated:",l.a.createElement(k.a,{date:Date.now()})),l.a.createElement(h.a,{span:12},l.a.createElement(d.a,{shape:"round",icon:"reload",onClick:this.getData},"Refresh"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,1,2]]]);
//# sourceMappingURL=main.72fc1443.chunk.js.map