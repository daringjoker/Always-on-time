(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,a){t.exports=a(22)},18:function(t,e,a){},21:function(t,e,a){},22:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(10),i=a.n(o),l=(a(18),a(6)),c=a(1),s=a(2),p=a(4),u=a(3),d=a(5),m=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).style=function(){return{margin:"auto 0px",background:a.props.todo.completed?"#567":"#999",borderBottom:"2px dashed black",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo.completed;return r.a.createElement("div",{style:this.style()},r.a.createElement("input",{type:"checkbox",style:{float:"left"},onChange:this.props.mainapp.toggled.bind(this,this.props.todo.id),checked:t}),r.a.createElement("p",null,this.props.todo.title),r.a.createElement("button",{onClick:this.props.mainapp.del.bind(this,this.props.todo.id),style:{borderRadius:"50%",float:"right",backgroundColor:"#ff0000"}},"x"))}}]),e}(r.a.Component),h=function(t){function e(){return Object(c.a)(this,e),Object(p.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.list.map(function(e,a){return r.a.createElement(m,{todo:e,mainapp:t.props.mainapp,key:a})})}}]),e}(r.a.Component),f=a(11),b=a.n(f),g=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={title:""},a.changed=function(t){a.setState({title:t.target.value})},a.save=function(t){if(t.preventDefault(),""!==a.state.title){var e={title:a.state.title,id:b()(),completed:!1};a.setState({title:""}),a.props.mainapp.setState({data:[].concat(Object(l.a)(a.props.mainapp.state.data),[e])}),a.props.mainapp.savestate()}},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.save,style:{display:"flex"}},r.a.createElement("input",{type:"text",name:"title",placeholder:"Title For the new Todo",value:this.state.title,onChange:this.changed,style:{flex:"10",padding:"5px"}}),r.a.createElement("input",{type:"submit",value:"Add Todo",style:{flex:"1",padding:"5px"}}))}}]),e}(r.a.Component),y=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).headerstyle={background:"#89a",margin:"0px",padding:"10px",textAlign:"center"},a.h1style={margin:"0px"},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("header",{style:this.headerstyle},r.a.createElement("h1",{style:this.h1style},"Always On Time"),r.a.createElement("p",null,r.a.createElement("em",null,"A Very compact in browser Todo app.")))}}]),e}(r.a.Component),v=function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).footerstyle={textAlign:"center",background:"#89a",margin:"0px",padding:"10px",position:"fixed",left:"0px",right:"0px",bottom:"0"},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{height:"20%",paddingTop:"100px"}}),r.a.createElement("footer",{style:this.footerstyle},r.a.createElement("p",{style:{margin:"0px",flex:"10",textAlign:"center"}},r.a.createElement("strong",null,"Made by:"),r.a.createElement("em",null," Pukar Giri (Daring Joker)"))))}}]),e}(r.a.Component),O=(a(21),function(t){function e(){var t,a;Object(c.a)(this,e);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={data:[]},a.savestate=function(){console.log("saving data to local storage"),setTimeout(function(){localStorage.setItem("data",JSON.stringify(a.state.data))},1e3)},a.toggled=function(t){a.setState({data:a.state.data.map(function(e){return e.id===t&&(e.completed=!e.completed),e})}),a.savestate()},a.del=function(t){a.setState({data:Object(l.a)(a.state.data.filter(function(e){return e.id!==t}))}),a.savestate()},a}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("data"));t||(t=[]),this.setState({data:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(g,{mainapp:this}),r.a.createElement(h,{list:this.state.data,mainapp:this}),r.a.createElement(v,null))}}]),e}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2ac152c0.chunk.js.map