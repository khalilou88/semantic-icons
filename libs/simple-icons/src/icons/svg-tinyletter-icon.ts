import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-tinyletter-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>TinyLetter</title>
      <path
        d="M19.069 18.202h-4.913v3.207l-4.22-3.207H4.93a.643.643 0 01-.643-.642v-1.69l3.987-3.028L12 15.672l3.725-2.83 3.987 3.03v1.688a.643.643 0 01-.643.642zM7.213 12.035l-2.925 2.222V9.813zm12.499-2.222v4.444l-2.925-2.222zM4.932 5.61h2.735L12 9.128l4.338-3.518h2.73c.355 0 .644.288.644.642v1.946L12 14.058l-7.712-5.86V6.252c0-.354.289-.642.643-.642zm3.407-3.772c.356-.356.83-.553 1.335-.553.504 0 .978.197 1.334.553L12 2.83l.992-.992c.356-.356.83-.553 1.334-.553.505 0 .979.197 1.335.553.357.357.553.83.553 1.335 0 .494-.188.959-.53 1.313L12 7.473 8.317 4.486a1.89 1.89 0 01.022-2.648zm10.73 2.486h-1.787A3.167 3.167 0 0016.57.93C15.97.33 15.174 0 14.326 0c-.847 0-1.644.33-2.243.93L12 1.011 11.917.93C11.317.33 10.521 0 9.674 0 8.826 0 8.029.33 7.43.93a3.176 3.176 0 00-.711 3.394H4.93a1.93 1.93 0 00-1.928 1.928V17.56a1.93 1.93 0 001.928 1.928h4.572L15.44 24v-4.512h3.628a1.93 1.93 0 001.928-1.928V6.252a1.93 1.93 0 00-1.928-1.928"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTinyletterIcon {
  readonly class = input<string>('');
}
