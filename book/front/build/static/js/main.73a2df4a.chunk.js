(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{33:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(30),s=a.n(o),l=a(14),i=a(12),c=(a(38),a(7)),u=a(8),m=a(11),h=a(9),p=a(10),d=(a(39),a(5)),b=a.n(d),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={books:[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.defaults.headers.common.Authorization=localStorage.getItem("jwtToken"),b.a.get("/book").then((function(t){e.setState({books:t.data})})).catch((function(t){401===t.response.status&&e.props.history.push("/login")}))}},{key:"logout",value:function(){localStorage.removeItem("jwtToken"),window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h3",null,"List of Books"),r.a.createElement("button",{class:"btn btn-primary btn-large logoutbtn",onClick:this.logout},"Logout")),r.a.createElement("div",{class:"panel-body"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Description"))),r.a.createElement("tbody",null,this.state.books.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.author),r.a.createElement("td",null,e.description),r.a.createElement("hr",null))})))))),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/addBook"},r.a.createElement("button",{className:"btn btn-primary btn-large addbtn"},"Add Books"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(16),f=(a(62),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;b.a.post("/auth/login",{username:n,password:r}).then((function(t){401!==t.status?(localStorage.setItem("jwtToken",t.data.token),console.log(t.data.token),e.props.history.push("/")):console.log("Error")})).catch((function(t){401===t.response.status&&(console.log("Error from here"),e.setState({message:"Login failed. You are not authorised "}))}))},e.state={username:"",password:"",message:""},e.onSubmit=e.onSubmit.bind(Object(E.a)(e)),e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password,n=e.message;return r.a.createElement("div",{class:"container"},r.a.createElement("form",{onSubmit:this.onSubmit},""!==n&&r.a.createElement("div",{class:"alert alert-warning alert-dismissible",role:"alert"},n),r.a.createElement("h1",{class:"form-signin-headin"},"Please Login"),r.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email Address"),r.a.createElement("input",{type:"email",class:"form-control",placeholder:"Enter Email Address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{class:"btn btn-large btn-primary btn-block",type:"submit"},"Login"),r.a.createElement("p",null,"Not a member?",r.a.createElement(l.b,{to:"/register"},"Register"))))}}]),t}(n.Component)),v=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.password;b.a.post("/auth/register",{username:n,password:r}).then((function(t){e.props.history.push("/login")}))},e.state={username:"",password:""},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{class:"container"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h2",{class:"form-signin-headin"},"Please Register"),r.a.createElement("label",{for:"inputEmail",class:"sr-only"},"Email Address"),r.a.createElement("input",{type:"email",class:"form-control",placeholder:"Enter Email Address",name:"username",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPassword",class:"sr-only"},"Password"),r.a.createElement("input",{type:"text",class:"form-control",placeholder:"Enter Password",name:"password",value:a,onChange:this.onChange,required:!0}),r.a.createElement("button",{class:"btn btn-large btn-primary btn-block",type:"submit"},"Register")))}}]),t}(n.Component),y=(a(63),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).onChange=function(e){var t=a.state;t[e.target.name]=e.target.value,a.setState(t)},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.title,r=t.author,o=t.description,s=t.published_date,l=t.publisher,i=t.update_date;b.a.post("/book",{title:n,author:r,description:o,published_date:s,publisher:l,update_date:i}).then((function(e){401!==e.status?(a.setState({message:"Insertion Successful"}),setTimeout((function(){a.props.history.push("/")}),3e3)):console.log("Error")})).catch((function(e){401===e.response.status&&a.setState({message:"You are not authorised "})}))},a.state={title:"",author:"",description:"",published_date:Date.now,publisher:"",update_date:Date.now,message:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.defaults.headers.common.Authorization=localStorage.getItem("jwtToken"),b.a.get("/book").then((function(e){})).catch((function(t){401===t.response.status&&e.props.history.push("/login")}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.author,n=e.description,o=e.published_date,s=e.publisher,l=e.update_date,i=e.message;return r.a.createElement("div",{class:"container"},r.a.createElement("form",{onSubmit:this.onSubmit},""!==i&&r.a.createElement("div",{class:"alert alert-warning alert-dismissible",role:"alert"},i),r.a.createElement("h2",{class:"form-signin-headin"},"Enter Book Details"),r.a.createElement("label",{for:"inputTitle",class:"sr-only"},"Book Title"),r.a.createElement("input",{type:"string",class:"form-control",placeholder:"Enter Book Title",name:"title",value:t,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputAuthor",class:"sr-only"},"Author"),r.a.createElement("input",{type:"string",class:"form-control",placeholder:"Enter Author's Name",name:"author",value:a,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputDescription",class:"sr-only"},"Description"),r.a.createElement("input",{type:"string",class:"form-control",placeholder:"Enter Book Description",name:"description",value:n,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPublishedDate",class:"sr-only"},"Published Date"),r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Enter date of Publishion",name:"published_date",value:o,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputPublisher",class:"sr-only"},"Publisher"),r.a.createElement("input",{type:"string",class:"form-control",placeholder:"Enter name of Publisher",name:"publisher",value:s,onChange:this.onChange,required:!0}),r.a.createElement("label",{for:"inputUpdateDate",class:"sr-only"},"Update Date"),r.a.createElement("input",{type:"date",class:"form-control",placeholder:"Enter date of Updation",name:"update_date",value:l,onChange:this.onChange}),r.a.createElement("button",{class:"btn btn-primary btn-block",type:"submit"},"Submit")))}}]),t}(n.Component));s.a.render(r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i.a,{exact:!0,path:"/",component:g}),r.a.createElement(i.a,{exact:!0,path:"/login",component:f}),r.a.createElement(i.a,{exact:!0,path:"/register",component:v}),r.a.createElement(i.a,{exact:!0,path:"/addBook",component:y}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.73a2df4a.chunk.js.map