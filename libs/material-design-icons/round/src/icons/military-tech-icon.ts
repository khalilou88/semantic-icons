import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-military-tech-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M17 10.43V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v7.43c0 .35.18.68.49.86l4.18 2.51-.99 2.34-2.22.19c-.46.04-.64.59-.3.88l1.69 1.46-.51 2.18c-.1.43.37.77.75.54L12 20.23l1.91 1.15c.38.23.85-.11.75-.54l-.51-2.18 1.69-1.46c.33-.29.16-.84-.29-.88l-2.22-.19-.99-2.34 4.18-2.51c.3-.17.48-.49.48-.85zm-4 1.8-1 .6-1-.6V3h2v9.23z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMilitaryTechIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
