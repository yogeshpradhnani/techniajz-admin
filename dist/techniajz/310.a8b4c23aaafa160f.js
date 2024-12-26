"use strict";(self.webpackChunkcion_angular_16=self.webpackChunkcion_angular_16||[]).push([[310,221],{310:(G,C,a)=>{a.r(C),a.d(C,{InventoryModule:()=>Q});var h=a(177),c=a(9417),T=a(9631),p=a(6911),k=a(9818),E=a(7960),v=a(7062),t=a(4438),b=a(2616),F=a(7575);function w(i,u){1&i&&t.nrm(0,"mat-progress-bar",1)}let j=(()=>{class i{constructor(n,e){this.sharedService=n,this.cdref=e}get isLoading(){return this.sharedService.isLoading}ngAfterContentChecked(){this.cdref.detectChanges()}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||i)(t.rXU(b.d),t.rXU(t.gRc))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["app-inventory"]],decls:2,vars:1,consts:[["mode","indeterminate","class","mb-3",4,"ngIf"],["mode","indeterminate",1,"mb-3"]],template:function(e,r){1&e&&(t.DNE(0,w,1,0,"mat-progress-bar",0),t.nrm(1,"router-outlet")),2&e&&t.Y8G("ngIf",r.isLoading)},dependencies:[h.bT,v.n3,F.HM]})}return i})();var S=a(7673),L=a(6536),_=a(2221),d=a(5312),m=a(1626);let l=(()=>{class i{constructor(n,e){this.sharedService=n,this.http=e,this.inventoryUrl=d.c.adminUrl+"/asset"}addInventory(n){return this.sharedService.postRequest(this.inventoryUrl+"/addAsset",n)}editInventory(n,e){return this.sharedService.putRequest(this.inventoryUrl+"/editAsset/"+e,n)}getInventoryList(n){return this.sharedService.getRequest(this.inventoryUrl+"/getAssetList",n)}getInventory(n){return this.sharedService.getRequest(this.inventoryUrl+"/getAsset/"+n)}deleteInventory(n){return this.http.delete(this.inventoryUrl+"/deleteAsset/"+n)}static#t=this.\u0275fac=function(e){return new(e||i)(t.KVO(b.d),t.KVO(m.Qq))};static#e=this.\u0275prov=t.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();const g=()=>["/","admin","inventory","add-inventory"],y=i=>["/","admin","inventory","edit-inventory",i];function I(i,u){if(1&i){const n=t.RV6();t.j41(0,"button",28),t.bIt("click",function(){t.eBV(n);const r=t.XpG().$implicit,o=t.XpG();return t.Njj(o.openLinkInNewTab(o.imageFullPath+r.image))}),t.nrm(1,"i",29),t.k0s()}}function M(i,u){if(1&i){const n=t.RV6();t.j41(0,"tr")(1,"td"),t.nrm(2,"ngb-highlight",21),t.k0s(),t.j41(3,"td"),t.nrm(4,"ngb-highlight",21),t.k0s(),t.j41(5,"td"),t.nrm(6,"ngb-highlight",21),t.k0s(),t.j41(7,"td"),t.nrm(8,"ngb-highlight",21),t.k0s(),t.j41(9,"td"),t.nrm(10,"ngb-highlight",21),t.k0s(),t.j41(11,"td")(12,"ul",22)(13,"button",23),t.nrm(14,"i",24),t.k0s(),t.j41(15,"button",25),t.bIt("click",function(){const r=t.eBV(n).$implicit,o=t.XpG();return t.Njj(o.confirmDeleteAsset(r._id))}),t.nrm(16,"i",26),t.k0s(),t.DNE(17,I,2,0,"button",27),t.k0s()()()}if(2&i){const n=u.$implicit,e=t.XpG();t.R7$(2),t.Y8G("result",n.assetName)("term",e.service.searchTerm),t.R7$(2),t.Y8G("result",n.assetType)("term",e.service.searchTerm),t.R7$(2),t.Y8G("result",n.quantity.toString())("term",e.service.searchTerm),t.R7$(2),t.Y8G("result",n.status)("term",e.service.searchTerm),t.R7$(2),t.Y8G("result",n.remark)("term",e.service.searchTerm),t.R7$(3),t.Y8G("routerLink",t.eq3(12,y,null==n?null:n._id)),t.R7$(4),t.Y8G("ngIf",(null==n?null:n.image)&&""!==n.image)}}function f(i,u){1&i&&(t.j41(0,"tr",16)(1,"td",30),t.EFF(2,"No records found"),t.k0s()())}function x(i,u){if(1&i&&(t.j41(0,"option",31),t.EFF(1),t.k0s()),2&i){const n=u.$implicit;t.Y8G("value",n.value),t.R7$(),t.JRh(n.description+" Items per page")}}let $=(()=>{class i{onRefreshData(){this.service.page=d.k.page,this.service.pageSize=d.k.pageSize,this.pageIndex=d.k.page,this.pageSize=d.k.pageSize,this.getInventoryList()}constructor(n,e,r,o){this.service=n,this.sharedService=e,this.modalService=r,this.inventoryService=o,this.imageFullPath=d.c.imageBaseUrl,this.pageIndex=d.k.page,this.pageSize=d.k.pageSize,this.paginationDisabled=!1}ngOnInit(){this.pageItemList=L.g1,this.sharedService.changeTitle("Inventory List"),this.getInventoryList()}loadPage(n,e){this.pageSize=e,this.pageIndex=n,this.getInventoryList()}openLinkInNewTab(n){n?window.open(n,"_blank"):console.error("Link parameter is required")}getInventoryList(){this.sharedService.isLoading=!0,this.paginationDisabled=!1,this.inventoryService.getInventoryList({page:this.pageIndex,limit:this.pageSize,search:this.searchTerm||""}).subscribe(e=>{e.success&&(this.tableData$=(0,S.of)(e.data.assetList),this.total$=(0,S.of)(e.data.total))},e=>{e&&e.error&&(this.tableData$=(0,S.of)([]),"Unauthorized access."===e.error.message?this.sharedService.logOut():"Asset list not found"!==e.error.message&&this.sharedService.displayServerMessage(e.error.message,"error")),this.sharedService.isLoading=!1,this.paginationDisabled=!1},()=>{this.sharedService.isLoading=!1,this.paginationDisabled=!0})}confirmDeleteAsset(n){n&&this.sharedService.confirmBox("Are you sure?","Do you really want to delete this Asset?").then(o=>{o&&this.inventoryService.deleteInventory(n).subscribe(s=>{"Asset deleted successfully"===s.message&&(this.sharedService.displayServerMessage(s.message,"success"),this.getInventoryList())},s=>this.sharedService.displayServerMessage(s.error.message,"error"))})}static#t=this.\u0275fac=function(e){return new(e||i)(t.rXU(_.a),t.rXU(b.d),t.rXU(p.Bq),t.rXU(l))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["app-inventory-list"]],features:[t.Jv_([_.a,h.QX])],decls:47,vars:19,consts:[[1,"card"],[1,"card-body"],[1,"row","justify-content-between","mb-2"],[1,"mx-0","row",2,"width","60%"],[1,"text-start","input-group","pb-1",2,"width","70%"],["type","text","placeholder","Search for Asset name and type.",1,"form-control","list-input",3,"ngModelChange","keyup.enter","ngModel"],[1,"input-group-text","list-input",3,"click"],[1,"icofont","icofont-search"],[1,"w-40","text-end"],[1,"btn-group","text-start","mb-2","mx-1"],[1,"btn","btn-outline-primary",3,"click"],[1,"icon-reload"],[1,"btn","btn-outline-primary",3,"routerLink"],[1,"icon-plus"],[1,"table-responsive","theme-scroollbar"],[1,"table","table-responsive","table-striped"],[1,"odd"],[1,"d-flex","justify-content-between","p-2","mb-3"],["name","pageSize",1,"form-select",2,"width","auto","cursor","pointer",3,"change","ngModelChange","disabled","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"ms-3",3,"pageChange","collectionSize","page","pageSize","disabled","maxSize"],[3,"result","term"],[1,"action"],["ngbTooltip","Edit",1,"btn-sm","btn-outline-primary","mx-1",3,"routerLink"],["ps-2","","sweet-5","",1,"icofont","icofont-pencil-alt-2"],["ngbTooltip","Delete","type","button",1,"btn-sm","btn-outline-danger","mx-1",3,"click"],[1,"fa","fa-trash-o","px-1","icon_size"],["class","btn-sm btn-outline-warning mx-1","ngbTooltip","Image",3,"click",4,"ngIf"],["ngbTooltip","Image",1,"btn-sm","btn-outline-warning","mx-1",3,"click"],[1,"fa","fa-file-image-o"],["colspan","10",1,"dataTables_empty",2,"text-align","center"],[3,"value"]],template:function(e,r){1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"input",5),t.mxI("ngModelChange",function(s){return t.DH7(r.searchTerm,s)||(r.searchTerm=s),s}),t.bIt("keyup.enter",function(){return r.getInventoryList()}),t.k0s(),t.j41(6,"a",6),t.bIt("click",function(){return r.getInventoryList()}),t.nrm(7,"i",7),t.k0s()()(),t.j41(8,"div",8)(9,"div",9)(10,"button",10),t.bIt("click",function(){return r.onRefreshData()}),t.EFF(11,"Refresh "),t.nrm(12,"i",11),t.k0s()(),t.j41(13,"div",9)(14,"button",12),t.EFF(15,"Add "),t.nrm(16,"i",13),t.k0s()()()(),t.nrm(17,"hr"),t.j41(18,"form",14)(19,"table",15)(20,"thead")(21,"tr")(22,"th"),t.EFF(23,"Asset Name"),t.k0s(),t.j41(24,"th"),t.EFF(25,"Asset Type"),t.k0s(),t.j41(26,"th"),t.EFF(27,"Quantity"),t.k0s(),t.j41(28,"th"),t.EFF(29,"Status"),t.k0s(),t.j41(30,"th"),t.EFF(31,"Remark"),t.k0s(),t.j41(32,"th"),t.EFF(33,"Action"),t.k0s()()(),t.j41(34,"tbody"),t.Z7z(35,M,18,14,"tr",null,t.fX1,!1,f,3,0,"tr",16),t.nI1(38,"async"),t.k0s()(),t.j41(39,"div",17)(40,"select",18),t.bIt("change",function(){return r.loadPage(r.service.page,r.service.pageSize)}),t.mxI("ngModelChange",function(s){return t.DH7(r.service.pageSize,s)||(r.service.pageSize=s),s}),t.DNE(41,x,2,2,"option",19),t.k0s(),t.j41(42,"span"),t.EFF(43),t.nI1(44,"async"),t.k0s(),t.j41(45,"ngb-pagination",20),t.nI1(46,"async"),t.mxI("pageChange",function(s){return t.DH7(r.service.page,s)||(r.service.page=s),s}),t.bIt("pageChange",function(){return r.loadPage(r.service.page,r.service.pageSize)}),t.k0s()()()()()),2&e&&(t.R7$(5),t.R50("ngModel",r.searchTerm),t.R7$(9),t.Y8G("routerLink",t.lJ4(18,g)),t.R7$(21),t.Dyx(t.bMT(38,12,r.tableData$)),t.R7$(5),t.Y8G("disabled",!r.paginationDisabled),t.R50("ngModel",r.service.pageSize),t.R7$(),t.Y8G("ngForOf",r.pageItemList),t.R7$(2),t.SpI("Total: ",t.bMT(44,14,r.total$),""),t.R7$(2),t.Y8G("collectionSize",t.bMT(46,16,r.total$)),t.R50("page",r.service.page),t.Y8G("pageSize",r.service.pageSize)("disabled",!r.paginationDisabled)("maxSize",6))},dependencies:[h.Sq,h.bT,v.Wk,p.s5,p.md,p.Qr,c.qT,c.xH,c.y7,c.me,c.wz,c.BC,c.cb,c.vS,c.cV,h.Jj],styles:[".w-40[_ngcontent-%COMP%]{width:40%!important}"]})}return i})();class A{constructor(u){this.formBuilder=u,this.formGroup=this.formBuilder.group({assetName:["",c.k0.required],assetType:["",c.k0.required],quantity:[""],status:["inStock"],image:[""],remark:[""]})}}const O=[{_id:"inStock",name:"In Stock"},{_id:"outOfStock",name:"Out Of Stock"},{_id:"lowStock",name:"Low Stock"}];var z=a(5794);const P=i=>({hidediv:i}),U=i=>({show:i}),B=i=>({"was-validated":i});function N(i,u){1&i&&(t.j41(0,"div",32),t.EFF(1,"Please provide an asset name."),t.k0s())}function Y(i,u){1&i&&(t.j41(0,"div",32),t.EFF(1,"Please provide asset type."),t.k0s())}let D=(()=>{class i{constructor(n,e,r,o,s,R,J){this.formBuilder=n,this.route=e,this.router=r,this.sharedService=o,this.toastrService=s,this.datePipe=R,this.inventoryService=J,this.isError=!1,this.validate=!1,this.btnDissable=!1,this.isEditMode=!1}ngOnInit(){this.statusList=O,this.addEditInventoryForm=new A(this.formBuilder),this.sharedService.changeTitle("Add Inventory"),this.route.params.subscribe(n=>{n.id&&(this.isEditMode=!0,this.assetId=n.id,this.sharedService.changeTitle("Edit Inventory"),this.getAssetDeatilsById(this.assetId))})}getAssetDeatilsById(n){this.inventoryService.getInventory(n).subscribe(e=>{if(e?.success&&e.data){const r=e.data.asset||{};this.assetData=r,this.addEditInventoryForm.formGroup?.patchValue({...r})}this.sharedService.isLoading=!1},e=>{this.sharedService.isLoading=!1,e.error&&this.sharedService.displayServerMessage(e.error.message,"error")})}errorMsgShowed(n){const e=this.addEditInventoryForm.formGroup?.get(n);return{"error-icon":e?.hasError("required")&&this.validate,"success-icon":!e?.hasError("required")&&this.validate,"error-shadow":e?.hasError("required")&&this.validate,"success-shadow":!e?.hasError("required")&&this.validate}}changePayloadDateFormat(n){const e=n.slice(0,4),r=n.slice(5,7);return`${n.slice(8,10)}-${r}-${e}`}close(){this.isError=!1}goBack(){this.sharedService.goBack()}onFileSelected(n){const e=n.target.files;if(e&&e.length>0){this.selectedFiles=[];for(let r=0;r<e.length;r++){const o=e[r],s=new FileReader;s.onload=R=>{this.selectedFiles.push(o)},s.readAsDataURL(o)}}else this.selectedFiles=null}transformDate(n){return this.datePipe.transform(n,"yyyy-MM-dd")||""}onSubmit(){this.validate=!0;const n=this.addEditInventoryForm.formGroup;if(n.valid){this.validate=!1;const e=new FormData;Object.keys(this.addEditInventoryForm.formGroup.controls).forEach(s=>{n.value[s]&&e.append(s,n.value[s])}),this.selectedFiles&&this.selectedFiles.forEach(s=>{e.append("image",s)}),this.sharedService.isError=!1,this.sharedService.isLoading=!0,this.btnDissable=!0;const r=s=>{s.success&&(this.sharedService.isLoading=!1,this.btnDissable=!1,this.sharedService.goBack())},o=s=>{s.error&&(this.errorMessage=s.error.message),this.btnDissable=!1,this.sharedService.isLoading=!1};this.isEditMode?this.inventoryService.editInventory(this.assetId,e).subscribe(r,o):this.inventoryService.addInventory(e).subscribe(r,o)}else this.validate=!0,Object.keys(this.addEditInventoryForm.formGroup.controls).forEach(e=>{const r=this.addEditInventoryForm.formGroup.get(e);r?.markAsTouched(),r?.updateValueAndValidity()})}static#t=this.\u0275fac=function(e){return new(e||i)(t.rXU(c.ok),t.rXU(v.nX),t.rXU(v.Ix),t.rXU(b.d),t.rXU(z.tw),t.rXU(h.vh),t.rXU(l))};static#e=this.\u0275cmp=t.VBU({type:i,selectors:[["app-add-edit-inventory"]],features:[t.Jv_([h.vh])],decls:52,vars:16,consts:[[1,"container-fluid"],[1,"card"],[1,"row","justify-content-between","m-3"],[1,"col-md-4","d-flex","justify-content-start"],[1,"col-md-2","btn-group","text-end"],[1,"btn","btn-outline-primary",3,"click"],[1,"icofont","icofont-arrow-left"],[1,"card-body"],[1,"card-body","toast-rtl",3,"ngClass"],[1,"toast","default-show-toast","align-items-center","text-light","bg-danger","border-0","fade",3,"ngClass"],[1,"d-flex","justify-content-between"],[1,"toast-body"],["type","button",1,"btn-close","btn-close-white","me-2","m-auto",3,"click"],["novalidate","",1,"row","g-3","needs-validation","custom-input",3,"formGroup","ngClass"],[1,"col-md-6"],["for","assetName",1,"form-label"],[1,"text-danger"],["id","assetName","type","text","placeholder","Asset Name","formControlName","assetName","required","",1,"form-control"],["class","error-msg",4,"ngIf"],["for","assetType",1,"form-label"],["id","assetType","type","text","placeholder","Asset Type","formControlName","assetType","required","",1,"form-control"],["for","quantity",1,"form-label"],["id","quantity","type","number","placeholder","Quantity","formControlName","quantity",1,"form-control"],["for","status",1,"form-label"],["id","status","bindLabel","name","bindValue","_id","placeholder","Select Status","formControlName","status",1,"",3,"items","ngClass"],["for","image",1,"form-label"],["id","Image","placeholder","Image","type","file","accept",".jpg, .jpeg, .png",1,"form-control",3,"change"],["for","remark",1,"form-label"],["id","remark","type","text","placeholder","Remark","formControlName","remark",1,"form-control"],[1,"mt-3","d-flex","justify-content-end"],[1,"col-md-1","mx-1","text-end"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"error-msg"]],template:function(e,r){if(1&e&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.nrm(4,"h3"),t.k0s(),t.j41(5,"div",4)(6,"button",5),t.bIt("click",function(){return r.goBack()}),t.nrm(7,"i",6),t.EFF(8," Back"),t.k0s()()(),t.nrm(9,"hr"),t.j41(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11),t.EFF(15),t.k0s(),t.j41(16,"button",12),t.bIt("click",function(){return r.close()}),t.k0s()()()(),t.j41(17,"form",13)(18,"div",14)(19,"label",15),t.EFF(20,"Asset Name "),t.j41(21,"a",16),t.EFF(22,"*"),t.k0s()(),t.nrm(23,"input",17),t.DNE(24,N,2,0,"div",18),t.k0s(),t.j41(25,"div",14)(26,"label",19),t.EFF(27,"Asset Type "),t.j41(28,"a",16),t.EFF(29,"*"),t.k0s()(),t.nrm(30,"input",20),t.DNE(31,Y,2,0,"div",18),t.k0s(),t.j41(32,"div",14)(33,"label",21),t.EFF(34,"Quantity"),t.k0s(),t.nrm(35,"input",22),t.k0s(),t.j41(36,"div",14)(37,"label",23),t.EFF(38,"Status"),t.k0s(),t.nrm(39,"ng-select",24),t.k0s(),t.j41(40,"div",14)(41,"label",25),t.EFF(42,"Asset Image"),t.k0s(),t.j41(43,"input",26),t.bIt("change",function(s){return r.onFileSelected(s)}),t.k0s()(),t.j41(44,"div",14)(45,"label",27),t.EFF(46,"Remark"),t.k0s(),t.nrm(47,"input",28),t.k0s(),t.j41(48,"div",29)(49,"div",30)(50,"button",31),t.bIt("click",function(){return r.onSubmit()}),t.EFF(51),t.k0s()()()()()()()),2&e){let o,s;t.R7$(11),t.Y8G("ngClass",t.eq3(10,P,!r.isError)),t.R7$(),t.Y8G("ngClass",t.eq3(12,U,r.isError)),t.R7$(3),t.JRh(r.errorMessage),t.R7$(2),t.Y8G("formGroup",r.addEditInventoryForm.formGroup)("ngClass",t.eq3(14,B,r.validate)),t.R7$(7),t.Y8G("ngIf",(null==(o=r.addEditInventoryForm.formGroup.get("assetName"))?null:o.touched)&&(null==(o=r.addEditInventoryForm.formGroup.get("assetName"))?null:o.hasError("required"))),t.R7$(7),t.Y8G("ngIf",(null==(s=r.addEditInventoryForm.formGroup.get("assetType"))?null:s.touched)&&(null==(s=r.addEditInventoryForm.formGroup.get("assetType"))?null:s.hasError("required"))),t.R7$(8),t.Y8G("items",r.statusList)("ngClass",r.errorMsgShowed("status")),t.R7$(12),t.JRh(r.isEditMode?"Update":"Save")}},dependencies:[h.YU,h.bT,c.qT,c.me,c.Q0,c.BC,c.cb,c.YS,c.j4,c.JD,k.vr],styles:[".cdk-overlay-container{position:fixed;z-index:1060!important}  .mat-datepicker-content .mat-calendar{background-color:#fff!important}  .mat-mdc-form-field-flex{background-color:#fff!important;height:39px!important}.input-width[_ngcontent-%COMP%]{width:100%!important}  .mat-from-field{height:64px!important}  .mat-mdc-form-field-infix{padding-top:5px!important}  .mat-mdc-text-field-wrapper.mdc-text-field{border-radius:var(--bs-border-radius)!important;border:var(--bs-border-width) solid var(--bs-border-color)!important;background-color:#fff!important}  .mdc-line-ripple{display:none}  .mdc-text-field--focused{border:none;box-shadow:0 0 0 .25rem #0d6efd40!important;border-radius:var(--bs-border-radius)!important;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out!important;background-color:transparent!important}  .mat-calendar-controls button,   mat-datepicker-toggle{color:var(--theme-default)!important}  .success-icon .ng-select-container{padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right calc(.375em + .1875rem) center!important;background-size:calc(.75em + .375rem) calc(.75em + .375rem)!important}  .error-icon .ng-select-container{padding-right:calc(1.5em + .75rem)!important;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")!important;background-repeat:no-repeat!important;background-position:right calc(.375em + .1875rem) center!important;background-size:calc(.75em + .375rem) calc(.75em + .375rem)!important}  .error-shadow .ng-select-container{box-shadow:0 0 0 .25rem rgba(var(--bs-danger-rgb),.25)!important}  .success-shadow .ng-select-container{box-shadow:0 0 0 .25rem rgba(var(--bs-success-rgb),.25)!important}  .custom-select .ng-select-container,   input .list-input,   .list-input{border:solid 1px #33bfbf!important;border-color:#33bfbf!important}.error-msg[_ngcontent-%COMP%]{width:100%;margin-top:.25rem;font-size:.875em;color:#f1523d!important}.mt-custom[_ngcontent-%COMP%]{margin-top:-16px!important}[_nghost-%COMP%]     select.form-select:focus{border-color:#33bfbf;box-shadow:0 0 0 .25rem #33bfbf80}.active-sort[_ngcontent-%COMP%]{color:#fffc!important}  .ng-select-container{max-height:40px!important;overflow-y:auto!important}  .ng-dropdown-panel{max-height:auto!important}.aling-center[_ngcontent-%COMP%]{align-items:center}.w-40[_ngcontent-%COMP%]{width:40%!important}.fix-width[_ngcontent-%COMP%]{width:auto;height:100%}.lead-Card[_ngcontent-%COMP%]{border:1px black solid}.img-bg[_ngcontent-%COMP%]{background-color:#fff}.card-height[_ngcontent-%COMP%]{min-height:30rem}.icon[_ngcontent-%COMP%]{font-size:large;color:green}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.imageSize[_ngcontent-%COMP%]{height:8rem;width:13rem}.img_delete[_ngcontent-%COMP%]{display:inline-flex;position:absolute;right:1px;top:4px;padding:4px 9px;border-radius:20px}.img_div[_ngcontent-%COMP%]{border:1px solid black;width:16rem;height:13rem}.img_hr[_ngcontent-%COMP%]{border-top:2px solid black!important;margin-bottom:.5rem}.hidediv[_ngcontent-%COMP%]{display:none}input[type=date][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{background:transparent;color:transparent;cursor:pointer;height:auto;inset:0;position:absolute;width:auto}"]})}return i})();const X=[{path:"",component:j,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:$,data:{title:"Inventory Listing"}},{path:"add-inventory",component:D,data:{title:"Add Inventory",breadcrumb:"Add Inventory"}},{path:"edit-inventory/:id",component:D,data:{title:"Edit Inventory",breadcrumb:"Edit Inventory"}}]}];let V=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=t.$C({type:i});static#n=this.\u0275inj=t.G2t({imports:[v.iI.forChild(X),v.iI]})}return i})(),Q=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=t.$C({type:i});static#n=this.\u0275inj=t.G2t({imports:[h.MD,V,E.G,p.c9,p.h_,c.YN,c.X1,p.UN,T.fS,k.MQ,p.Pv]})}return i})()},2221:(G,C,a)=>{a.d(C,{a:()=>_});var h=a(4412),c=a(1413),T=a(7673);const p=[];var k=a(8141),E=a(152),v=a(5558),t=a(1986),b=a(5312),F=a(4438),w=a(177);let _=(()=>{class d{constructor(l){this.pipe=l,this._loading$=new h.t(!0),this._search$=new c.B,this._data$=new h.t([]),this._total$=new h.t(0),this._state={page:b.k.page,pageSize:b.k.pageSize,searchTerm:"",sortColumn:"",sortDirection:""},this._search$.pipe((0,k.M)(()=>this._loading$.next(!0)),(0,E.B)(200),(0,v.n)(()=>this._search()),(0,t.c)(200),(0,k.M)(()=>this._loading$.next(!1))).subscribe(g=>{this._data$.next(g.Details),this._total$.next(g.total)}),this._search$.next()}get supportdata$(){return this._data$.asObservable()}get total$(){return this._total$.asObservable()}get loading$(){return this._loading$.asObservable()}get page(){return this._state.page}get pageSize(){return this._state.pageSize}get searchTerm(){return this._state.searchTerm}set page(l){this._set({page:l})}set pageSize(l){this._set({pageSize:l})}set searchTerm(l){this._set({searchTerm:l})}set sortColumn(l){this._set({sortColumn:l})}set sortDirection(l){this._set({sortDirection:l})}_set(l){Object.assign(this._state,l),this._search$.next()}_search(){const{sortColumn:l,sortDirection:g,pageSize:y,page:I,searchTerm:M}=this._state;let f=function S(d,m,l){return""===l||""===m?d:[...d].sort((g,y)=>{const I=((d,m)=>d<m?-1:d>m?1:0)(g[m],y[m]);return"asc"===l?I:-I})}(p,l,g);f=f.filter($=>function L(d,m,l){return d.name.toLowerCase().includes(m.toLowerCase())||d.position.toLowerCase().includes(m.toLowerCase())||l.transform(d.salary).includes(m)||d.office.toLowerCase().includes(m.toLowerCase())||l.transform(d.extn).includes(m)||d.email.toLowerCase().includes(m.toLowerCase())}($,M,this.pipe));const x=f.length;return f=f.slice((I-1)*y,(I-1)*y+y),(0,T.of)({Details:f,total:x})}static#t=this.\u0275fac=function(g){return new(g||d)(F.KVO(w.QX))};static#e=this.\u0275prov=F.jDH({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()}}]);