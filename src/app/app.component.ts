import { Component } from '@angular/core';
import { EditorComponent, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EditorComponent],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  init: EditorComponent['init'] = {
    plugins: 'lists link image table code help wordcount',
    base_url: '/tinymce', // Root for resources
    suffix: '.min',
  };
}
