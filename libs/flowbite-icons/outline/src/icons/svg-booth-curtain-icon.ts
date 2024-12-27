import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-booth-curtain-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M5 5v14m14 0V8h2M3 8h6m0-2v8.5858c0 .8909 1.0771 1.3371 1.7071.7071l.5858-.5858c.3905-.3905 1.0237-.3905 1.4142 0l.5858.5858c.3905.3905 1.0237.3905 1.4142 0l.5858-.5858c.3905-.3905 1.0237-.3905 1.4142 0l.5858.5858c.63.63 1.7071.1838 1.7071-.7071V6c0-.55228-.4477-1-1-1h-8c-.55229 0-1 .44772-1 1Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgBoothCurtainIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}
