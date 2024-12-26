import { ChangeDetectorRef, Component, ViewEncapsulation } from "@angular/core";
import { ClassicEditor, AccessibilityHelp, Autoformat, Autosave, BlockQuote, Bold, Essentials, FullPage, GeneralHtmlSupport, Heading, HtmlComment, HtmlEmbed, Indent, IndentBlock, Italic, Link, Paragraph, SelectAll, ShowBlocks, SourceEditing, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Underline, Undo, type EditorConfig, InlineEditor } from "ckeditor5";
import { TeamsService } from "../teams.service";
import { SharedService } from "src/app/shared/shared.service";
import { error } from "console";
import { ActivatedRoute } from "@angular/router";
import { style, test2 } from "./editor-interegation";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
@Component({
  selector: "app-editor-interigation",
  templateUrl: "./editor-interigation.component.html",
  styleUrl: "./editor-interigation.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class EditorInterigationComponent {
  constructor(private changeDetector: ChangeDetectorRef, private teamsService: TeamsService, private sharedService: SharedService, private route: ActivatedRoute) {}

  public isLayoutReady = false;
  // public Editor = ClassicEditor;
  public Editor = InlineEditor;
  public config: EditorConfig = {}; // CKEditor needs the DOM tree before calculating the configuration.
  public ngAfterViewInit(): void {
    this.config = {
      toolbar: {
        items: ["undo", "redo", "|", "sourceEditing", "showBlocks", "|", "heading", "|", "bold", "italic", "underline", "|", "link", "insertTable", "blockQuote", "htmlEmbed", "|", "outdent", "indent"],
        shouldNotGroupWhenFull: false,
      },
      plugins: [AccessibilityHelp, Autoformat, Autosave, BlockQuote, Bold, Essentials, FullPage, GeneralHtmlSupport, Heading, HtmlComment, HtmlEmbed, Indent, IndentBlock, Italic, Link, Paragraph, SelectAll, ShowBlocks, SourceEditing, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, Underline, Undo],
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
          {
            model: "heading3",
            view: "h3",
            title: "Heading 3",
            class: "ck-heading_heading3",
          },
          {
            model: "heading4",
            view: "h4",
            title: "Heading 4",
            class: "ck-heading_heading4",
          },
          {
            model: "heading5",
            view: "h5",
            title: "Heading 5",
            class: "ck-heading_heading5",
          },
          {
            model: "heading6",
            view: "h6",
            title: "Heading 6",
            class: "ck-heading_heading6",
          },
        ],
      },
      htmlSupport: {
        allow: [
          {
            name: /^.*$/,
            styles: true,
            attributes: true,
            classes: true,
          },
        ],
      },
      link: {
        addTargetToExternalLinks: true,
        defaultProtocol: "https://",
        decorators: {
          toggleDownloadable: {
            mode: "manual",
            label: "Downloadable",
            attributes: {
              download: "file",
            },
          },
        },
      },
      placeholder: "Type or paste your content here!",
      table: {
        contentToolbar: ["tableColumn", "tableRow", "mergeTableCells", "tableProperties", "tableCellProperties"],
      },
    };

    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }
  codeId: string = "";
  data2: string = ``;

  editor = InlineEditor;
  data: string;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params["id"]) {
        this.getCode(params["id"]);
      } else {
        this.data = test2;
        // this.data = this.beforeTable1 + this.table1 + this.table2 + this.table3 + this.table4 + this.AfterTable1;
      }
    });
  }

  getCode(code: any): void {
    this.teamsService.getCode(code).subscribe(
      (result) => {
        if (result.success) {
          this.data = result.data.editorData.message;
        }
      },
      (error) => {
        if (error.error.message === "Unauthorized access.") {
          this.sharedService.logOut();
        } else if (error?.status !== 400) {
          this.sharedService.displayServerMessage(error?.error?.message ?? "An error occurred", "error");
        }
      }
    );
  }

  sendCode(): void {
    let payload = {
      sender: "test",
      message: this.data,
      title: "2024-11-06",
    };

    this.teamsService.storeCode(payload).subscribe(
      (result) => {
        if (result.success) {
          this.sharedService.displayServerMessage(result.message, "success");
          this.codeId = result.data.Data._id;
          this.data = test2;
        }
      },
      (error) => {
        if (error.error.message === "Unauthorized access.") {
          this.sharedService.logOut();
        } else if (error?.status !== 400) {
          this.sharedService.displayServerMessage(error?.error?.message ?? "An error occurred", "error");
        }
      }
    );
  }

  // downloadPDF() {
  //   // Create a temporary container to render HTML content
  //   const tempContainer = document.createElement('div');
  //   tempContainer.innerHTML = `${style} ${this.data}` // Insert HTML string
  //   document.body.appendChild(tempContainer); // Append to DOM temporarily

  //   html2canvas(tempContainer).then(canvas => {
  //       const imgWidth = 208; // PDF width in mm
  //       const imgHeight = canvas.height * imgWidth / canvas.width; // Scale height proportionally
  //       const contentDataURL = canvas.toDataURL('image/jpeg');
  //       const pdf = new jsPDF('p', 'mm', 'a4');
  //       const position = 0; // Top of the PDF

  //       pdf.addImage(contentDataURL, 'PNG', 0, position, 510, 300);
  //       pdf.save('MYPdf.pdf');

  //       // Clean up by removing the temporary element
  //       document.body.removeChild(tempContainer);
  //   });
}

// }
