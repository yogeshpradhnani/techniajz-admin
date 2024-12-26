import { AfterViewInit, Component } from '@angular/core';
import { AddPageForm } from '../addpage';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AddpageService } from   '../addpage.service';
import { ActivatedRoute ,ParamMap } from '@angular/router';
@Component({
  selector: 'app-addpage-list',
  templateUrl: './addpage-list.component.html',
  styleUrls: ['./addpage-list.component.scss']
})
export class AddpageListComponent implements AfterViewInit {
  paramValue: string | null = null;

  title = 'editor';
  addPageForm: AddPageForm;
  editorContent: string = 'Start typing here...';
  froalaEditorInstance: any; // Variable to store Froala Editor instance
  params :any;
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private addpageService : AddpageService,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addPageForm = new AddPageForm(this.formBuilder);
    this.getData();
  }

  getData(){
    this.paramValue = this.route.snapshot.paramMap.get('id');
    if(this.paramValue){
      this.params = new HttpParams().set("id",this.paramValue)
       const url = "http://localhost:3001/user/getPageData/"+this.paramValue; 
       this.http.get(url).subscribe((response:any) =>{
            const data = response.Data
            if(data){
              this.addPageForm.formGroup.patchValue({
                title: data.title,
                slug: data.slug
              });              
            this.editorContent = data.content;
            if (this.froalaEditorInstance) {
              this.froalaEditorInstance.destroy(); // Destroy existing instance if any
            }
            //@ts-ignore
            this.froalaEditorInstance = new FroalaEditor("#editor", {
                events: {
                initialized: () => {
                   this.froalaEditorInstance.html.set(this.editorContent);
                  }
                }
              })
            } 
         },(error) =>{
           console.log("you data can-not send",error)
         })
    }


  }

  ngAfterViewInit(): void {
    
    if (this.froalaEditorInstance) {
      this.froalaEditorInstance.destroy(); // Destroy existing instance if any
    }else{

      //@ts-ignore
      this.froalaEditorInstance = new FroalaEditor("#editor", {
        events: {
          contentChanged: () => {
            this.editorContent ="";  
            // Update editorContent when content changes
            this.editorContent = this.froalaEditorInstance.html.get();
            
          }
        }
      });
      
    }
  }
  
  onSubmit(): void {
    
    console.log("this.editorContent",this.editorContent)
    const formData  = new FormData;
    formData.append("title",this.addPageForm.formGroup.value.title);
    formData.append("slug",this.addPageForm.formGroup.value.slug)
    formData.append("content",this.editorContent);
    if(this.params){
      const url ="http://localhost:3001/user/editPageData/"+this.paramValue; 
      console.log("url =",url)
      this.http.post(url,formData).subscribe(
        (response) =>{
          console.log("your data is succefully send")
        },(error) =>{
          console.log("you data can-not send")
        }
      );
    }else{
      this.addpageService.formData(formData).subscribe(
        (response) =>{
          console.log("your data is succefully send")
        },(error) =>{
          console.log("you data can-not send")
        }
      );
    }
  }
}
