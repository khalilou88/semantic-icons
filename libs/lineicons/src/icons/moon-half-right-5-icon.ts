import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-moon-half-right-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M13.7437 3.16931C13.5722 3.45567 13.6105 3.82095 13.8378 4.06542C15.0419 5.36059 15.7773 7.09456 15.7773 9.00196C15.7773 13.0071 12.5305 16.2539 8.52539 16.2539C6.61799 16.2539 4.88402 15.5185 3.58886 14.3144C3.34438 14.0871 2.97911 14.0487 2.69275 14.2203C2.40639 14.3918 2.26788 14.732 2.35295 15.0548C3.48212 19.3396 7.38274 22.5 12.0234 22.5C17.5463 22.5 22.0234 18.0229 22.0234 12.5C22.0234 7.85931 18.863 3.95868 14.5782 2.82951C14.2554 2.74444 13.9153 2.88296 13.7437 3.16931ZM16.4225 5.22521C18.881 6.71513 20.5234 9.41634 20.5234 12.5C20.5234 17.1944 16.7179 21 12.0234 21C8.93977 21 6.23857 19.3575 4.74865 16.8991C5.89214 17.4469 7.17321 17.7539 8.52539 17.7539C13.359 17.7539 17.2773 13.8355 17.2773 9.00196C17.2773 7.64977 16.9704 6.36871 16.4225 5.22521Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoonHalfRight5Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
