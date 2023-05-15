import { Component } from '@angular/core';
import { FilesService } from 'src/app/services/files/files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-import-comprobantes',
  templateUrl: './import-comprobantes.component.html',
  styleUrls: ['./import-comprobantes.component.css'],
})
export class ImportComprobantesComponent {
  currentFile?: File;
  progress = 0;
  message = '';
  requiredFileType = '.csv';

  fileName = 'Sin archivo seleccionado';

  constructor(
    private fileService: FilesService,
    public dialogRef: MatDialogRef<ImportComprobantesComponent>
  ) {}

  selectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.currentFile = event.target.files[0] as File;

      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Sin archivo seleccionado';
    }
  }

  upload() {
    if (this.currentFile) {
      this.fileService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            console.log('progress');
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            console.log('response');
            this.message = event.body.message;
            console.log(this.message);
          }
        },
        error: (err: any) => {
          console.log(err);
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        },
      });
    }
  }
}
