"use strict";(self.webpackChunkcion_angular_16=self.webpackChunkcion_angular_16||[]).push([[804],{727:(T,L,o)=>{o.d(L,{h:()=>H});var _=o(2221),p=o(5312),f=o(177),e=o(4438),c=o(9417);class F{constructor(s){this.formBuilder=s,this.formGroup=this.formBuilder.group({remark:[null,[c.k0.required]],startDate:["",[c.k0.required]],type:[null,[c.k0.required]],endDate:["",[c.k0.required]],description:[""]})}}var b=o(2616),m=o(1626);let y=(()=>{class i{constructor(t,a){this.sharedService=t,this.http=a,this.leaveUrl=p.c.adminUrl+"/Employees"}getLeaveHistory(t){return this.sharedService.getRequest(this.leaveUrl+"/leaveList",t)}updateLeaveStatus(t,a){return this.sharedService.postRequest(this.leaveUrl+"/leaveStatus/"+t,a)}createLeaveRequest(t){return this.sharedService.postRequest(this.leaveUrl+"/leaveRequest",t)}getLeaveType(){return this.sharedService.getRequest(this.leaveUrl+"/leaveTypeDropdown")}getEmpoyeeList(){return this.sharedService.getRequest(p.c.adminUrl+"/Projects/employeeList")}static#e=this.\u0275fac=function(a){return new(a||i)(e.KVO(b.d),e.KVO(m.Qq))};static#t=this.\u0275prov=e.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var k=o(9818);function j(i,s){if(1&i){const t=e.RV6();e.j41(0,"div",26),e.EFF(1),e.j41(2,"button",27),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.closeAlert())}),e.k0s()()}if(2&i){const t=e.XpG();e.R7$(),e.SpI(" ",t.errorMessage," ")}}function I(i,s){1&i&&(e.j41(0,"div",28),e.EFF(1,"Remark is required."),e.k0s())}function D(i,s){1&i&&(e.j41(0,"div",28),e.EFF(1,"Start Date is required."),e.k0s())}function E(i,s){1&i&&(e.j41(0,"div",28),e.EFF(1,"End Date is required."),e.k0s())}function C(i,s){1&i&&(e.j41(0,"div",28),e.EFF(1,"Leave Type is required."),e.k0s())}let R=(()=>{class i{constructor(t,a,n){this.formBuilder=t,this.sharedService=a,this.leaveService=n,this.closeModal=new e.bkB,this.buttonDisable=!1,this.remarks=[],this.type=[]}ngOnInit(){this.addEditLeaveForm=new F(this.formBuilder),this.getLeaveDropdown()}closeModel(){this.closeModal.emit()}closeAlert(){this.errorMessage=null}createLeaveRequest(){const t=localStorage.getItem("userId");if(this.errorMessage=null,this.addEditLeaveForm.formGroup.valid){this.sharedService.isLoading=!0,this.buttonDisable=!0;const a={...this.addEditLeaveForm.formGroup.value,empId:t};this.leaveService.createLeaveRequest(a).subscribe(n=>{n.success&&(this.sharedService.isLoading=!1,this.buttonDisable=!1,this.closeModel())})}else this.errorMessage="Please fill out the required fields before submitting.",Object.keys(this.addEditLeaveForm.formGroup.controls).forEach(a=>{const n=this.addEditLeaveForm.formGroup.get(a);n?.markAsTouched(),n?.updateValueAndValidity()})}getLeaveDropdown(){this.leaveService.getLeaveType().subscribe(t=>{this.remarks=t.data.remark,this.type=t.data.type})}setMinDate(t){this.minDate=t.target.value}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(c.ok),e.rXU(b.d),e.rXU(y))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-add-leave"]],inputs:{ProjectDetails:"ProjectDetails"},outputs:{closeModal:"closeModal"},decls:47,vars:12,consts:[[1,"modal-content"],[1,"modal-toggle-wrapper","text-start","dark-sign-up"],[1,"row","align-items-center"],["type","button","aria-label","Close",1,"btn-close","position-absolute","top-0","end-0","m-2","close-btn",3,"click"],[1,"col-12"],[1,"modal-header","justify-content-center","border-0","pb-0","m-0"],[1,"modal-body"],["class","alert alert-danger d-flex justify-content-between align-items-center",4,"ngIf"],[1,"table-responsive","theme-scroollbar",3,"formGroup"],[1,"form-group","mb-3"],["for","remark",1,"form-label","btn-font"],[1,"font-danger"],["id","Title","bindLabel","name","bindValue","name","placeholder","select remark","formControlName","remark",3,"items","clearable"],["class","text text-danger mt-1",4,"ngIf"],[1,"justify-content-start","row","mx-0","mb-2"],[1,"form-group","col-md-6","mb-3"],["for","startDate",1,"form-label","btn-font"],["type","date","placeholder","start Date","autocomplete","off","formControlName","startDate","id","startDate",1,"form-control",3,"change"],["for","endDate",1,"form-label","btn-font"],["type","date","placeholder","end Date","autocomplete","off","formControlName","endDate","id","endDate",1,"form-control",3,"min"],["for","type",1,"form-label","btn-font"],["id","Title","bindLabel","name","bindValue","name","placeholder","select leave type","formControlName","type",3,"items","clearable"],["for","description",1,"form-label","btn-font"],["type","text","placeholder","reason","autocomplete","off","formControlName","description","id","description",1,"form-control"],[1,"d-flex","justify-content-center"],["type","submit",1,"btn","btn-primary","btn-block",3,"click","disabled"],[1,"alert","alert-danger","d-flex","justify-content-between","align-items-center"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"text","text-danger","mt-1"]],template:function(a,n){if(1&a&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"button",3),e.bIt("click",function(){return n.closeModel()}),e.k0s(),e.j41(4,"div",4)(5,"h3",5),e.EFF(6,"Leave Request"),e.k0s()()(),e.nrm(7,"hr"),e.j41(8,"div",6),e.DNE(9,j,3,1,"div",7),e.j41(10,"form",8)(11,"div",9)(12,"label",10),e.EFF(13,"Remark"),e.j41(14,"a",11),e.EFF(15,"*"),e.k0s()(),e.nrm(16,"ng-select",12),e.DNE(17,I,2,0,"div",13),e.k0s(),e.j41(18,"div",14)(19,"div",15)(20,"label",16),e.EFF(21,"Start Date"),e.j41(22,"a",11),e.EFF(23,"*"),e.k0s()(),e.j41(24,"input",17),e.bIt("change",function(l){return n.setMinDate(l)}),e.k0s(),e.DNE(25,D,2,0,"div",13),e.k0s(),e.j41(26,"div",15)(27,"label",18),e.EFF(28,"End Date"),e.j41(29,"a",11),e.EFF(30,"*"),e.k0s()(),e.nrm(31,"input",19),e.DNE(32,E,2,0,"div",13),e.k0s()(),e.j41(33,"div",9)(34,"label",20),e.EFF(35,"Leave Type"),e.j41(36,"a",11),e.EFF(37,"*"),e.k0s()(),e.nrm(38,"ng-select",21),e.DNE(39,C,2,0,"div",13),e.k0s(),e.j41(40,"div",9)(41,"label",22),e.EFF(42,"Reason"),e.k0s(),e.nrm(43,"input",23),e.k0s(),e.j41(44,"div",24)(45,"button",25),e.bIt("click",function(){return n.createLeaveRequest()}),e.EFF(46,"Request Leave"),e.k0s()()()()()()),2&a){let r,l,v,g;e.R7$(9),e.Y8G("ngIf",n.errorMessage),e.R7$(),e.Y8G("formGroup",n.addEditLeaveForm.formGroup),e.R7$(6),e.Y8G("items",n.remarks)("clearable",!1),e.R7$(),e.Y8G("ngIf",(null==(r=n.addEditLeaveForm.formGroup.get("remark"))?null:r.touched)&&(null==(r=n.addEditLeaveForm.formGroup.get("remark"))||null==r.errors?null:r.errors.required)),e.R7$(8),e.Y8G("ngIf",(null==(l=n.addEditLeaveForm.formGroup.get("startDate"))?null:l.touched)&&(null==(l=n.addEditLeaveForm.formGroup.get("startDate"))||null==l.errors?null:l.errors.required)),e.R7$(6),e.Y8G("min",n.minDate),e.R7$(),e.Y8G("ngIf",(null==(v=n.addEditLeaveForm.formGroup.get("endDate"))?null:v.touched)&&(null==(v=n.addEditLeaveForm.formGroup.get("endDate"))||null==v.errors?null:v.errors.required)),e.R7$(6),e.Y8G("items",n.type)("clearable",!1),e.R7$(),e.Y8G("ngIf",(null==(g=n.addEditLeaveForm.formGroup.get("type"))?null:g.touched)&&(null==(g=n.addEditLeaveForm.formGroup.get("type"))||null==g.errors?null:g.errors.required)),e.R7$(6),e.Y8G("disabled",n.buttonDisable)}},dependencies:[f.bT,c.qT,c.me,c.BC,c.cb,c.j4,c.JD,k.vr],styles:["input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{background:transparent;color:transparent;cursor:pointer;height:auto;inset:0;position:absolute;width:auto}.close-btn[_ngcontent-%COMP%]{z-index:3}.alert[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]})}return i})();var d=o(6536),G=o(7673),h=o(6911),u=o(7062),S=o(9652);function x(i,s){if(1&i){const t=e.RV6();e.j41(0,"div",13)(1,"div",14),e.nrm(2,"div",15),e.k0s(),e.j41(3,"div",16)(4,"div",17)(5,"button",18),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onRefreshData())}),e.EFF(6,"Refresh "),e.nrm(7,"i",19),e.k0s()(),e.j41(8,"div",17)(9,"button",18),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.openModal())}),e.EFF(10,"Add "),e.nrm(11,"i",20),e.k0s()()()()}}function M(i,s){1&i&&e.nrm(0,"hr")}function $(i,s){if(1&i){const t=e.RV6();e.j41(0,"div",21)(1,"div",22)(2,"label",23),e.EFF(3,"Select Employee"),e.k0s(),e.j41(4,"ng-select",24),e.mxI("ngModelChange",function(n){e.eBV(t);const r=e.XpG();return e.DH7(r.employeeId,n)||(r.employeeId=n),e.Njj(n)}),e.bIt("clear",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.onClearType())}),e.k0s()(),e.j41(5,"div",25),e.nrm(6,"br"),e.j41(7,"button",26),e.bIt("click",function(){e.eBV(t);const n=e.XpG();return e.Njj(n.getLeaveData())}),e.nrm(8,"i",27),e.k0s()()()}if(2&i){const t=e.XpG();e.R7$(4),e.Y8G("items",t.employeeList),e.R50("ngModel",t.employeeId)}}function w(i,s){1&i&&e.nrm(0,"hr")}function X(i,s){1&i&&(e.j41(0,"th"),e.EFF(1,"Action"),e.k0s())}function P(i,s){if(1&i&&(e.j41(0,"p",33),e.EFF(1),e.k0s()),2&i){const t=e.XpG().$implicit,a=e.XpG(2);e.R7$(),e.JRh(a.formatLeaveDate(t.dates[0].date.toString()))}}function N(i,s){if(1&i&&(e.j41(0,"p",33),e.EFF(1),e.k0s()),2&i){const t=e.XpG().$implicit,a=e.XpG(2);e.R7$(),e.SpI("- ",a.formatLeaveDate(t.dates[t.dates.length-1].date.toString()),"")}}function Y(i,s){if(1&i){const t=e.RV6();e.j41(0,"a",34),e.bIt("click",function(){e.eBV(t);const n=e.XpG().index,r=e.XpG(2);return e.Njj(r.toggleExpand(n))}),e.EFF(1),e.k0s()}if(2&i){const t=e.XpG().index,a=e.XpG(2);e.R7$(),e.SpI(" ",a.isExpanded[t]?"Show less":"Read more"," ")}}function z(i,s){if(1&i){const t=e.RV6();e.j41(0,"ul",36)(1,"button",37),e.bIt("click",function(){e.eBV(t);const n=e.XpG(2).$implicit,r=e.XpG(2);return e.Njj(r.changeLeaveStatus(n._id,"Approved"))}),e.nrm(2,"i",38),e.k0s(),e.j41(3,"button",39),e.bIt("click",function(){e.eBV(t);const n=e.XpG(2).$implicit,r=e.XpG(2);return e.Njj(r.changeLeaveStatus(n._id,"Rejected"))}),e.nrm(4,"app-feathericon",40),e.k0s()()}2&i&&(e.R7$(4),e.Y8G("icon","x"))}function A(i,s){if(1&i&&(e.j41(0,"td"),e.DNE(1,z,5,1,"ul",35),e.k0s()),2&i){const t=e.XpG().$implicit,a=e.XpG(2);e.R7$(),e.Y8G("ngIf",a.isPermission&&"Pending"===t.status&&a.UserLeaveId!==t.employee_id._id)}}function U(i,s){if(1&i&&(e.j41(0,"tr")(1,"td")(2,"p",29),e.EFF(3),e.k0s()(),e.j41(4,"td")(5,"div",30),e.DNE(6,P,2,1,"p",31)(7,N,2,1,"p",31),e.k0s()(),e.j41(8,"td")(9,"p",29),e.EFF(10),e.nI1(11,"slice"),e.DNE(12,Y,2,1,"a",32),e.k0s()(),e.j41(13,"td")(14,"p",29),e.EFF(15),e.k0s()(),e.j41(16,"td")(17,"p",29),e.EFF(18),e.k0s()(),e.DNE(19,A,2,1,"td",3),e.k0s()),2&i){const t=s.$implicit,a=s.index,n=e.XpG(2);e.R7$(3),e.JRh(t.employee_id.name),e.R7$(3),e.Y8G("ngIf",t.dates.length>0),e.R7$(),e.Y8G("ngIf",t.dates.length>1),e.R7$(3),e.SpI(" ",n.isExpanded[a]?t.description:e.brH(11,8,t.description,0,50)," "),e.R7$(2),e.Y8G("ngIf",t.description.length>50),e.R7$(3),e.JRh(t.dayCount),e.R7$(3),e.JRh(t.notes),e.R7$(),e.Y8G("ngIf",n.isPermission&&!n.isTeamModule)}}function V(i,s){if(1&i&&(e.qex(0),e.DNE(1,U,20,12,"tr",28),e.bVm()),2&i){const t=e.XpG();e.R7$(),e.Y8G("ngForOf",t.leaveHistoryData)}}function B(i,s){1&i&&(e.qex(0),e.j41(1,"tr")(2,"td",41),e.EFF(3,"No Record Found"),e.k0s()(),e.bVm())}function O(i,s){if(1&i&&(e.j41(0,"option",42),e.EFF(1),e.k0s()),2&i){const t=s.$implicit;e.Y8G("value",t.value),e.R7$(),e.JRh(t.description+" Items per page")}}let H=(()=>{class i{constructor(t,a,n,r,l){this.sharedService=t,this.leaveService=a,this.service=n,this.modalService=r,this.route=l,this.leaveHistoryData=[],this.pageIndex=p.k.page,this.pageSize=p.k.pageSize,this.imageFullPath=p.c.imageBaseUrl,this.isPermission=!1,this.paginationDisabled=!1,this.isTeamModule=!1,this.UserLeaveId="",this.isExpanded=[],this.validate=!1,this.active=1,this.isExpanded=new Array(this.leaveHistoryData.length).fill(!1)}ngOnInit(){this.UserLeaveId=localStorage.getItem("userId"),this.pageItemList=d.g1,this.checkPermission(),this.route.params.subscribe(t=>{t.id?(this.isTeamModule=!0,this.employeeId=t.id):this.sharedService.changeTitle("Leave List")}),this.getLeaveData(),this.getEmployeeList()}loadPage(t,a){this.pageSize=a,this.pageIndex=t,this.checkPermission(),this.getLeaveData()}getEmployeeList(){this.leaveService.getEmpoyeeList().subscribe(t=>{let a=[];for(let n of t.data.employee)a.push({_id:n._id,name:n.name+" ( Emp Id : "+n.id+")"});this.employeeList=a})}onClearType(){this.employeeId=null}toggleExpand(t){this.isExpanded[t]=!this.isExpanded[t]}onRefreshData(){this.service.page=p.k.page,this.service.pageSize=p.k.pageSize,this.pageIndex=p.k.page,this.pageSize=p.k.pageSize,this.isPermission&&(this.employeeId=null),this.checkPermission(),this.getLeaveData()}getLeaveData(){this.isPermission||(this.employeeId=localStorage.getItem("userId")||""),this.paginationDisabled=!1,this.sharedService.isLoading=!0,this.leaveService.getLeaveHistory({empId:this.employeeId||"",page:this.pageIndex,limit:this.pageSize}).subscribe(a=>{a.success&&(this.leaveHistoryData=a.data.leaveRequests,this.total$=(0,G.of)(a.data.pagination.totalRecords))},a=>{a&&a.error&&("Unauthorized access."===a.error.message?this.sharedService.logOut():this.sharedService.displayServerMessage(a.error.message,"error")),this.sharedService.isLoading=!1,this.paginationDisabled=!1},()=>{this.sharedService.isLoading=!1,this.paginationDisabled=!0})}formatLeaveDate(t){const a=parseInt(t.substring(0,4)),n=parseInt(t.substring(4,6))-1,r=parseInt(t.substring(6,8)),l=new Date(a,n,r);return`${l.getDate()}/${l.getMonth()+1}/${l.getFullYear()}`}checkPermission(){const t=localStorage.getItem("role");t&&(this.isPermission="Admin"===t)}changeLeaveStatus(t,a){void 0!==a&&void 0!==t&&this.sharedService.confirmBox("Are you sure?",`Do you really want to  ${"Approved"===a?"Approve ":"Reject"} this Leave Application?`).then(v=>{v&&this.leaveService.updateLeaveStatus(t,{status:a}).subscribe(g=>{g&&g.success&&(this.getLeaveData(),this.sharedService.displayServerMessage(g.message,"success"))},g=>{g.error&&this.sharedService.displayServerMessage(g.error.message,"error")})})}openModal(){this.onProjectDetailModal()}onProjectDetailModal(){const t=this.modalService.open(R,{size:"lg"});t.componentInstance.ProjectDetails="hi",t.componentInstance.closeModal.subscribe(()=>{this.getLeaveData(),t.close()})}static#e=this.\u0275fac=function(a){return new(a||i)(e.rXU(b.d),e.rXU(y),e.rXU(_.a),e.rXU(h.Bq),e.rXU(u.nX))};static#t=this.\u0275cmp=e.VBU({type:i,selectors:[["app-leave-list"]],features:[e.Jv_([_.a,f.QX])],decls:32,vars:20,consts:[[1,"card"],[1,"card-body"],["class","row justify-content-between mb-2",4,"ngIf"],[4,"ngIf"],["class","row justify-content-start mb-2",4,"ngIf"],[1,"table-responsive","theme-scroollbar"],[1,"table","table-responsive","table-striped","mt-3"],[2,"width","15rem"],[2,"width","20rem"],[1,"d-flex","justify-content-between","p-2"],["name","pageSize",1,"form-select",2,"width","auto",3,"change","ngModelChange","disabled","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"ms-3",3,"pageChange","collectionSize","page","pageSize","disabled","maxSize"],[1,"row","justify-content-between","mb-2"],[1,"mx-0","col-md-6","col-12","row"],[1,"col-md-3","mx-1"],[1,"col-md-6","col-12","row","justify-content-end"],[1,"btn-group","mb-2","mx-1","col-md-4","col-12"],[1,"btn","btn-outline-primary",3,"click"],[1,"icon-reload"],[1,"icon-plus"],[1,"row","justify-content-start","mb-2"],[1,"col-md-4"],["for","type"],["id","type","bindLabel","name","bindValue","_id","placeholder","Select Employee",1,"custom-select",3,"ngModelChange","clear","items","ngModel"],[1,"text-start","mb-2","mx-1","col-md-1","col-6"],["ngbTooltip","Search",1,"btn","btn-outline-primary","mt-2",3,"click"],[1,"icofont","icofont-search"],[4,"ngFor","ngForOf"],[1,"my-1"],[1,"d-flex"],["class","my-1 d-flex",4,"ngIf"],["href","javascript:void(0)",3,"click",4,"ngIf"],[1,"my-1","d-flex"],["href","javascript:void(0)",3,"click"],["class","action",4,"ngIf"],[1,"action"],["ngbTooltip","Approve",1,"btn-outline-success","btn-sm","mx-1",3,"click"],[1,"icon-check"],["ngbTooltip","Reject",1,"btn-outline-danger","btn-sm","mx-1",3,"click"],[3,"icon"],["colspan","7",1,"text-center"],[3,"value"]],template:function(a,n){1&a&&(e.j41(0,"div",0)(1,"div",1),e.DNE(2,x,12,0,"div",2)(3,M,1,0,"hr",3)(4,$,9,2,"div",4)(5,w,1,0,"hr",3),e.j41(6,"form",5)(7,"table",6)(8,"thead")(9,"tr")(10,"th"),e.EFF(11,"Name"),e.k0s(),e.j41(12,"th",7),e.EFF(13,"Date"),e.k0s(),e.j41(14,"th",8),e.EFF(15,"Reason"),e.k0s(),e.j41(16,"th"),e.EFF(17,"Leave Type and Days"),e.k0s(),e.j41(18,"th"),e.EFF(19,"Admin Response"),e.k0s(),e.DNE(20,X,2,0,"th",3),e.k0s()(),e.j41(21,"tbody"),e.DNE(22,V,2,1,"ng-container",3)(23,B,4,0,"ng-container",3),e.k0s()(),e.j41(24,"div",9)(25,"select",10),e.bIt("change",function(){return n.loadPage(n.service.page,n.service.pageSize)}),e.mxI("ngModelChange",function(l){return e.DH7(n.service.pageSize,l)||(n.service.pageSize=l),l}),e.DNE(26,O,2,2,"option",11),e.k0s(),e.j41(27,"span"),e.EFF(28),e.nI1(29,"async"),e.k0s(),e.j41(30,"ngb-pagination",12),e.nI1(31,"async"),e.mxI("pageChange",function(l){return e.DH7(n.service.page,l)||(n.service.page=l),l}),e.bIt("pageChange",function(){return n.loadPage(n.service.page,n.service.pageSize)}),e.k0s()()()()()),2&a&&(e.R7$(2),e.Y8G("ngIf",!n.isTeamModule),e.R7$(),e.Y8G("ngIf",!n.isTeamModule),e.R7$(),e.Y8G("ngIf",!n.isTeamModule&&n.isPermission),e.R7$(),e.Y8G("ngIf",!n.isTeamModule&&n.isPermission),e.R7$(15),e.Y8G("ngIf",n.isPermission&&!n.isTeamModule),e.R7$(2),e.Y8G("ngIf",n.leaveHistoryData.length>0),e.R7$(),e.Y8G("ngIf",0==n.leaveHistoryData.length),e.R7$(2),e.Y8G("disabled",!n.paginationDisabled),e.R50("ngModel",n.service.pageSize),e.R7$(),e.Y8G("ngForOf",n.pageItemList),e.R7$(2),e.SpI("Total: ",e.bMT(29,16,n.total$),""),e.R7$(2),e.Y8G("collectionSize",e.bMT(31,18,n.total$)),e.R50("page",n.service.page),e.Y8G("pageSize",n.service.pageSize)("disabled",!n.paginationDisabled)("maxSize",6))},dependencies:[f.Sq,f.bT,S.K,h.s5,h.md,c.qT,c.xH,c.y7,c.wz,c.BC,c.cb,c.vS,c.cV,k.vr,f.Jj,f.P9],styles:[".cdk-overlay-container{position:fixed;z-index:1060!important}  .mat-datepicker-content .mat-calendar{background-color:#fff!important}  .mat-mdc-form-field-flex{background-color:#fff!important;height:39px!important}.input-width[_ngcontent-%COMP%]{width:100%!important}  .mat-from-field{height:64px!important}  .mat-mdc-form-field-infix{padding-top:5px!important}  .mat-mdc-text-field-wrapper.mdc-text-field{border-radius:var(--bs-border-radius)!important;border:var(--bs-border-width) solid var(--bs-border-color)!important;background-color:#fff!important}  .mdc-line-ripple{display:none}  .mdc-text-field--focused{border:none;box-shadow:0 0 0 .25rem #0d6efd40!important;border-radius:var(--bs-border-radius)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;background-color:transparent!important}  .mat-calendar-controls button,   mat-datepicker-toggle{color:var(--theme-default)!important}  .success-icon .ng-select-container{padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right calc(.375em + .1875rem) center!important;background-size:calc(.75em + .375rem) calc(.75em + .375rem)!important}  .error-icon .ng-select-container{padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right calc(.375em + .1875rem) center!important;background-size:calc(.75em + .375rem) calc(.75em + .375rem)!important}  .error-shadow .ng-select-container{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)!important}  .success-shadow .ng-select-container{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)!important}  .custom-select .ng-select-container,   input .list-input,   .list-input{border:solid 1px #33bfbf!important;border-color:#33bfbf!important}.error-msg[_ngcontent-%COMP%]{width:100%;margin-top:.25rem;font-size:.875em;color:#f1523d!important}.mt-custom[_ngcontent-%COMP%]{margin-top:-16px!important}[_nghost-%COMP%]     select.form-select:focus{border-color:#33bfbf;box-shadow:0 0 0 .25rem #33bfbf80}.active-sort[_ngcontent-%COMP%]{color:#fffc!important}  .ng-select-container{max-height:40px!important;overflow-y:auto!important}  .ng-dropdown-panel{max-height:auto!important}.w-40[_ngcontent-%COMP%]{width:40%!important}"]})}return i})()},5804:(T,L,o)=>{o.r(L),o.d(L,{LeaveModule:()=>R});var _=o(177),p=o(9417),f=o(9631),e=o(6911),c=o(9818),F=o(7960),b=o(7062),m=o(4438),y=o(2616),k=o(7575);function j(d,G){1&d&&m.nrm(0,"mat-progress-bar",1)}const E=[{path:"",component:(()=>{class d{constructor(h,u){this.sharedService=h,this.cdref=u}get isLoading(){return this.sharedService.isLoading}ngAfterContentChecked(){this.cdref.detectChanges()}ngOnInit(){}static#e=this.\u0275fac=function(u){return new(u||d)(m.rXU(y.d),m.rXU(m.gRc))};static#t=this.\u0275cmp=m.VBU({type:d,selectors:[["app-leave"]],decls:2,vars:1,consts:[["mode","indeterminate","class","mb-3",4,"ngIf"],["mode","indeterminate",1,"mb-3"]],template:function(u,S){1&u&&(m.DNE(0,j,1,0,"mat-progress-bar",0),m.nrm(1,"router-outlet")),2&u&&m.Y8G("ngIf",S.isLoading)},dependencies:[_.bT,k.HM,b.n3]})}return d})(),children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:o(727).h,data:{title:"Leave Applications"}}]}];let C=(()=>{class d{static#e=this.\u0275fac=function(u){return new(u||d)};static#t=this.\u0275mod=m.$C({type:d});static#n=this.\u0275inj=m.G2t({imports:[b.iI.forChild(E),b.iI]})}return d})(),R=(()=>{class d{static#e=this.\u0275fac=function(u){return new(u||d)};static#t=this.\u0275mod=m.$C({type:d});static#n=this.\u0275inj=m.G2t({imports:[_.MD,F.G,e.c9,e.h_,p.YN,p.X1,e.UN,f.fS,c.MQ,e.Pv,C]})}return d})()}}]);