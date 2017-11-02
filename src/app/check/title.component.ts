import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'NgModules';
}