import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example/example.component';

@Component({
  standalone: true,
  imports: [RouterModule, ExampleComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-example />
  `,
  styles: '',
})
export class AppComponent {
  title = 'showcase';
}
