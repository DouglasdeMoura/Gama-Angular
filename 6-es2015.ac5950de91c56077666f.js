(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{YkNJ:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(l,n,u,t){this.todoService=l,this.router=n,this.authService=u,this.activatedRoute=t,this.email="",this.todo={id:null,title:"",description:"",finished:!1,date:"",userId:""},this.isEdit=!1}ngOnInit(){this.activatedRoute.params.subscribe(l=>{l.id&&(this.isEdit=!0,this.todoService.getTodo(l.id).subscribe(l=>{this.todo=l}))}),this.authService.currentUser.subscribe(l=>{this.todo.userId=l.id})}enviarTodo(){this.isEdit?this.todoService.updateTodo(this.todo.id,this.todo).subscribe(()=>{alert("To-do atualizado com sucesso"),this.router.navigateByUrl("/todo")}):this.todoService.adicionarTodo(this.todo).subscribe(()=>{alert("To-do adicionado com sucesso"),this.router.navigateByUrl("/todo")})}}class o{constructor(l,n){this.todoService=l,this.authService=n,this.todos=[]}ngOnInit(){this.authService.currentUser.subscribe(l=>{console.log(l),this.authService.currentUser.subscribe(l=>{this.todoService.getTodos(l.id).subscribe(l=>{this.todos=l})})})}onDeleteItem(l){console.log(l),this.todoService.deleteTodo(l).subscribe(n=>{alert("To-do apagado com sucesso"),this.todos=this.todos.filter(n=>n.id!==l)})}}class i{}var a=u("pMnS");class d{transform(l,...n){return l?"Sim":"N\xe3o"}}var s=u("SVse");class r{constructor(l){this.router=l,this.deleteEvent=new t.m}ngOnInit(){}editar(){this.router.navigateByUrl("/todo/"+this.data.id)}apagar(){this.deleteEvent.emit(this.data.id)}}var b=u("iInd"),c=t.lb({encapsulation:0,styles:[["span[_ngcontent-%COMP%]{background:navy;color:#fff}"]],data:{}});function g(l){return t.Cb(0,[t.wb(0,d,[]),t.wb(0,s.e,[t.s]),(l()(),t.nb(2,0,null,null,26,"div",[],null,null,null,null,null)),(l()(),t.nb(3,0,null,null,21,"p",[],null,null,null,null,null)),(l()(),t.nb(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["ID:"])),(l()(),t.Ab(6,null,[" ",""])),(l()(),t.nb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["T\xedtulo:"])),(l()(),t.Ab(10,null,[" ",""])),(l()(),t.nb(11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["Descri\xe7\xe3o:"])),(l()(),t.Ab(14,null,[" ",""])),(l()(),t.nb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(16,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["Finalizado:"])),(l()(),t.Ab(18,null,[" ",""])),t.xb(19,1),(l()(),t.nb(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(21,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Ab(-1,null,["Data:"])),(l()(),t.Ab(23,null,[" "," "])),t.xb(24,2),(l()(),t.nb(25,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.editar()&&t),t},null,null)),(l()(),t.Ab(-1,null,["Editar"])),(l()(),t.nb(27,0,null,null,1,"button",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.apagar()&&t),t},null,null)),(l()(),t.Ab(-1,null,["Apagar"]))],null,function(l,n){var u=n.component;l(n,6,0,u.data.id),l(n,10,0,u.data.title),l(n,14,0,u.data.description);var e=t.Bb(n,18,0,l(n,19,0,t.vb(n,0),u.data.finished));l(n,18,0,e);var o=t.Bb(n,23,0,l(n,24,0,t.vb(n,1),u.data.date,"dd/MM/yyyy"));l(n,23,0,o)})}var v=u("hl1e"),p=u("qXBG"),h=t.lb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,1,"app-todo-item",[],null,[[null,"deleteEvent"]],function(l,n,u){var t=!0;return"deleteEvent"===n&&(t=!1!==l.component.onDeleteItem(u)&&t),t},g,c)),t.mb(2,114688,null,0,r,[b.k],{data:[0,"data"]},{deleteEvent:"deleteEvent"})],function(l,n){l(n,2,0,n.context.$implicit)},null)}function C(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,m)),t.mb(2,278528,null,0,s.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.todos)},null)}function f(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,1,"app-lista-todos",[],null,null,null,C,h)),t.mb(1,114688,null,0,o,[v.a,p.a],null,null)],function(l,n){l(n,1,0)},null)}var y=t.jb("app-lista-todos",o,f,{},{},[]),k=u("s7LF"),T=t.lb({encapsulation:0,styles:[["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:2px solid red}input.ng-valid.ng-touched[_ngcontent-%COMP%]{border:2px solid green}"]],data:{}});function S(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,40,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.vb(l,2).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.vb(l,2).onReset()&&e),e},null,null)),t.mb(1,16384,null,0,k.p,[],null,null),t.mb(2,4210688,[["form",4]],0,k.k,[[8,null],[8,null]],null,null),t.yb(2048,null,k.c,null,[k.k]),t.mb(4,16384,null,0,k.j,[[4,k.c]],null,null),(l()(),t.Ab(5,null,[" "," "])),t.wb(0,s.g,[]),(l()(),t.nb(7,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),t.nb(8,0,null,null,7,"input",[["name","title"],["placeholder","T\xedtulo"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.vb(l,9)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,9).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,9)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,9)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.todo.title=u)&&e),e},null,null)),t.mb(9,16384,null,0,k.d,[t.B,t.k,[2,k.a]],null,null),t.mb(10,16384,null,0,k.m,[],{required:[0,"required"]},null),t.yb(1024,null,k.f,function(l){return[l]},[k.m]),t.yb(1024,null,k.g,function(l){return[l]},[k.d]),t.mb(13,671744,[["titulo",4]],0,k.l,[[2,k.c],[6,k.f],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.yb(2048,null,k.h,null,[k.l]),t.mb(15,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.nb(16,0,null,null,8,"p",[],null,null,null,null,null)),(l()(),t.nb(17,0,null,null,7,"input",[["name","description"],["placeholder","Descri\xe7\xe3o"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.vb(l,18)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,18).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,18)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,18)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.todo.description=u)&&e),e},null,null)),t.mb(18,16384,null,0,k.d,[t.B,t.k,[2,k.a]],null,null),t.mb(19,16384,null,0,k.m,[],{required:[0,"required"]},null),t.yb(1024,null,k.f,function(l){return[l]},[k.m]),t.yb(1024,null,k.g,function(l){return[l]},[k.d]),t.mb(22,671744,[["descricao",4]],0,k.l,[[2,k.c],[6,k.f],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.yb(2048,null,k.h,null,[k.l]),t.mb(24,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.nb(25,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),t.nb(26,0,null,null,5,"input",[["name","finished"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var e=!0,o=l.component;return"change"===n&&(e=!1!==t.vb(l,27).onChange(u.target.checked)&&e),"blur"===n&&(e=!1!==t.vb(l,27).onTouched()&&e),"ngModelChange"===n&&(e=!1!==(o.todo.finished=u)&&e),e},null,null)),t.mb(27,16384,null,0,k.b,[t.B,t.k],null,null),t.yb(1024,null,k.g,function(l){return[l]},[k.b]),t.mb(29,671744,[["finalizado",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.yb(2048,null,k.h,null,[k.l]),t.mb(31,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.nb(32,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),t.nb(33,0,null,null,5,"input",[["name","date"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0,o=l.component;return"input"===n&&(e=!1!==t.vb(l,34)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.vb(l,34).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.vb(l,34)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.vb(l,34)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.todo.date=u)&&e),e},null,null)),t.mb(34,16384,null,0,k.d,[t.B,t.k,[2,k.a]],null,null),t.yb(1024,null,k.g,function(l){return[l]},[k.d]),t.mb(36,671744,[["data",4]],0,k.l,[[2,k.c],[8,null],[8,null],[6,k.g]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.yb(2048,null,k.h,null,[k.l]),t.mb(38,16384,null,0,k.i,[[4,k.h]],null,null),(l()(),t.nb(39,0,null,null,1,"button",[],[[8,"disabled",0]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.enviarTodo()&&t),t},null,null)),(l()(),t.Ab(-1,null,["Enviar"]))],function(l,n){var u=n.component;l(n,10,0,""),l(n,13,0,"title",u.todo.title),l(n,19,0,""),l(n,22,0,"description",u.todo.description),l(n,29,0,"finished",u.todo.finished),l(n,36,0,"date",u.todo.date)},function(l,n){var u=n.component;l(n,0,0,t.vb(n,4).ngClassUntouched,t.vb(n,4).ngClassTouched,t.vb(n,4).ngClassPristine,t.vb(n,4).ngClassDirty,t.vb(n,4).ngClassValid,t.vb(n,4).ngClassInvalid,t.vb(n,4).ngClassPending),l(n,5,0,t.Bb(n,5,0,t.vb(n,6).transform(u.todo))),l(n,8,0,t.vb(n,10).required?"":null,t.vb(n,15).ngClassUntouched,t.vb(n,15).ngClassTouched,t.vb(n,15).ngClassPristine,t.vb(n,15).ngClassDirty,t.vb(n,15).ngClassValid,t.vb(n,15).ngClassInvalid,t.vb(n,15).ngClassPending),l(n,17,0,t.vb(n,19).required?"":null,t.vb(n,24).ngClassUntouched,t.vb(n,24).ngClassTouched,t.vb(n,24).ngClassPristine,t.vb(n,24).ngClassDirty,t.vb(n,24).ngClassValid,t.vb(n,24).ngClassInvalid,t.vb(n,24).ngClassPending),l(n,26,0,t.vb(n,31).ngClassUntouched,t.vb(n,31).ngClassTouched,t.vb(n,31).ngClassPristine,t.vb(n,31).ngClassDirty,t.vb(n,31).ngClassValid,t.vb(n,31).ngClassInvalid,t.vb(n,31).ngClassPending),l(n,33,0,t.vb(n,38).ngClassUntouched,t.vb(n,38).ngClassTouched,t.vb(n,38).ngClassPristine,t.vb(n,38).ngClassDirty,t.vb(n,38).ngClassValid,t.vb(n,38).ngClassInvalid,t.vb(n,38).ngClassPending),l(n,39,0,t.vb(n,2).invalid)})}function M(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,1,"app-add-todo",[],null,null,null,S,T)),t.mb(1,114688,null,0,e,[v.a,b.k,p.a,b.a],null,null)],function(l,n){l(n,1,0)},null)}var I=t.jb("app-add-todo",e,M,{},{},[]),E=u("IheW");u.d(n,"TodoModuleNgFactory",function(){return A});var A=t.kb(i,[],function(l){return t.tb([t.ub(512,t.j,t.X,[[8,[a.a,y,I]],[3,t.j],t.v]),t.ub(4608,s.n,s.m,[t.s,[2,s.t]]),t.ub(4608,k.o,k.o,[]),t.ub(4608,E.h,E.n,[s.d,t.z,E.l]),t.ub(4608,E.o,E.o,[E.h,E.m]),t.ub(5120,E.a,function(l){return[l]},[E.o]),t.ub(4608,E.k,E.k,[]),t.ub(6144,E.i,null,[E.k]),t.ub(4608,E.g,E.g,[E.i]),t.ub(6144,E.b,null,[E.g]),t.ub(4608,E.f,E.j,[E.b,t.p]),t.ub(4608,E.c,E.c,[E.f]),t.ub(1073742336,s.c,s.c,[]),t.ub(1073742336,k.n,k.n,[]),t.ub(1073742336,k.e,k.e,[]),t.ub(1073742336,E.e,E.e,[]),t.ub(1073742336,E.d,E.d,[]),t.ub(1073742336,b.m,b.m,[[2,b.r],[2,b.k]]),t.ub(1073742336,i,i,[]),t.ub(256,E.l,"XSRF-TOKEN",[]),t.ub(256,E.m,"X-XSRF-TOKEN",[]),t.ub(1024,b.i,function(){return[[{path:"",component:o},{path:"add",component:e},{path:":id",component:e}]]},[])])})}}]);