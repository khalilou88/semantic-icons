import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fi-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Fi</title>
      <path
        d="M14.908 4.621c0-1.749 1.472-3.162 3.286-3.162 1.813 0 3.287 1.416 3.287 3.162s-1.472 3.162-3.287 3.162c-1.816 0-3.286-1.414-3.286-3.162zM24 17.077h-.735c-1.507 0-2.267-1.069-2.267-2.753v-3.162h-5.569v4.482c0 4.869 3.228 6.913 6.353 6.913H24ZM5.578 18.581c0-1.628.901-2.369 2.731-2.369h4.541v-5.064H5.578V9.057c0-1.654 1.427-2.552 3.132-2.552h4.133V1.443H7.289C2.925 1.443 0 3.753 0 8.594v13.95h5.578Z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgFiIcon {
  readonly class = input<string>('');
}
