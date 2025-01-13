import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-rotate-90-degrees-cw-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.86 18.46c2.65 3.45 7.11 4.37 10.74 2.79.61-.27.74-1.09.27-1.56l-.05-.05c-.29-.29-.72-.35-1.1-.19-2.96 1.24-6.59.37-8.58-2.62-1.58-2.37-1.55-5.37.05-7.73C6.6 7.03 8.8 6.03 11 6.03v1.76c0 .45.54.67.86.36l2.79-2.79c.2-.2.2-.51 0-.71l-2.8-2.79a.495.495 0 0 0-.85.35v1.8c-2.76 0-5.52 1.25-7.34 3.78-2.28 3.17-2.2 7.58.2 10.67z"
    />
    <svg:path
      d="M17.7 7.71a.996.996 0 0 0-1.41 0l-4.59 4.58a.996.996 0 0 0 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41L17.7 7.71z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRotate90DegreesCwIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
