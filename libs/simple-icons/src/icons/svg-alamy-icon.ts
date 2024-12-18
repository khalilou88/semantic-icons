import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-alamy-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Alamy</title>
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Zm.058-18.533c2.515 0 3.482 1.404 3.482 3.959v7.04c0 .78 0 1.21.193 1.872H13.47c-.406-.331-.503-1.072-.503-1.423-.464 1.111-1.102 1.618-2.224 1.618-1.354 0-2.476-1.014-2.476-3.257 0-2.626 1.618-3.566 2.956-4.343.937-.545 1.736-1.009 1.744-1.917 0-.858-.29-1.15-.909-1.15-.696 0-.987.468-.987 1.56v.429H8.5v-.37c0-2.614 1.006-4.018 3.559-4.018Zm-.213 10.667c.6 0 .948-.526 1.122-.8v-3.393c-.209.345-.544.621-.887.904-.608.5-1.24 1.023-1.24 1.983 0 .838.367 1.306 1.005 1.306Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAlamyIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}