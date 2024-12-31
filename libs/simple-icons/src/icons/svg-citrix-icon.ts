import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-citrix-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Citrix</title>
      <path
        d="M11.983 0a1.78 1.78 0 0 0-1.78 1.78 1.78 1.78 0 0 0 1.78 1.78 1.78 1.78 0 0 0 1.78-1.78A1.78 1.78 0 0 0 11.983 0zM5.17 5.991a1.026 1.026 0 0 0-1.095 1.027c0 .308.136.616.376.822l6.162 7.086-6.401 7.258a1.084 1.084 0 0 0-.309.787c0 .582.48 1.027 1.062 1.027.342 0 .684-.17.89-.444l6.128-7.19 6.162 7.19c.205.274.547.444.89.444.582.035 1.062-.445 1.062-1.027a1.14 1.14 0 0 0-.309-.787l-6.402-7.258 6.162-7.086c.24-.206.377-.514.377-.822v-.034c0-.582-.513-1.027-1.095-.993-.343 0-.65.171-.856.445l-5.957 7.018L6.06 6.436a1.07 1.07 0 0 0-.855-.445z"
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
export class SvgCitrixIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}
