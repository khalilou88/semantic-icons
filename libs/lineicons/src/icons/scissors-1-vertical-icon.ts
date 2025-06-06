import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-scissors-1-vertical-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16.397 15.3123C16.7088 15.2095 17.0421 15.1538 17.3883 15.1538C19.1345 15.1538 20.5501 16.5694 20.5501 18.3156C20.5501 20.0618 19.1345 21.4773 17.3883 21.4773C15.6421 21.4773 14.2266 20.0618 14.2266 18.3156C14.2266 17.4573 14.5686 16.6788 15.1238 16.1091L12.9615 13.0213L10.8164 16.0848C11.3857 16.6566 11.7376 17.445 11.7376 18.3156C11.7376 20.0618 10.322 21.4773 8.57582 21.4773C6.82963 21.4773 5.41406 20.0618 5.41406 18.3156C5.41406 16.5694 6.82963 15.1538 8.57582 15.1538C8.90975 15.1538 9.23159 15.2056 9.53375 15.3015L12.0459 11.7137L6.79196 4.21064C6.55437 3.87134 6.63682 3.40368 6.97612 3.16609C7.31542 2.9285 7.78308 3.01095 8.02067 3.35025L16.397 15.3123ZM8.57582 16.6538C7.65806 16.6538 6.91406 17.3978 6.91406 18.3156C6.91406 19.2333 7.65806 19.9773 8.57582 19.9773C9.49358 19.9773 10.2376 19.2333 10.2376 18.3156C10.2376 17.3978 9.49358 16.6538 8.57582 16.6538ZM15.7266 18.3156C15.7266 19.2333 16.4706 19.9773 17.3883 19.9773C18.3061 19.9773 19.0501 19.2333 19.0501 18.3156C19.0501 17.3978 18.3061 16.6538 17.3883 16.6538C16.4706 16.6538 15.7266 17.3978 15.7266 18.3156Z"
      fill="#323544"
    />
    <svg:path
      d="M19.1672 4.15876L14.7189 10.5116L13.8033 9.20402L17.9384 3.2984C18.176 2.95909 18.6437 2.87663 18.983 3.11422C19.3223 3.3518 19.4047 3.81946 19.1672 4.15876Z"
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
export class SiScissors1VerticalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
