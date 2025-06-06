import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-direction-rtl-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.08484 20.063C4.92751 19.9255 4.82812 19.7233 4.82812 19.498C4.82812 19.2726 4.92757 19.0704 5.08498 18.9329L8.05007 15.9659C8.34287 15.6729 8.81774 15.6728 9.11073 15.9656C9.40371 16.2584 9.40387 16.7333 9.11107 17.0263L7.39042 18.748L19.0781 18.748C19.4923 18.748 19.8281 19.0838 19.8281 19.498C19.8281 19.9122 19.4923 20.248 19.0781 20.248L7.39032 20.248L9.11108 21.97C9.40387 22.263 9.40371 22.7378 9.11071 23.0306C8.81771 23.3234 8.34284 23.3232 8.05005 23.0302L5.08484 20.063Z"
      fill="#323544"
    />
    <svg:path
      d="M13.8281 13.4961V4H10.8281V13.4961C10.8281 13.9103 10.4923 14.2461 10.0781 14.2461C9.66391 14.2461 9.32812 13.9103 9.32812 13.4961V9.25H8.20312C6.33916 9.25 4.82812 7.73896 4.82812 5.875C4.82812 4.01104 6.33916 2.5 8.20312 2.5H19.0781C19.4923 2.5 19.8281 2.83579 19.8281 3.25C19.8281 3.66421 19.4923 4 19.0781 4H15.3281V13.4961C15.3281 13.9103 14.9923 14.2461 14.5781 14.2461C14.1639 14.2461 13.8281 13.9103 13.8281 13.4961ZM9.32812 7.75V4H8.20312C7.16759 4 6.32812 4.83947 6.32812 5.875C6.32812 6.91053 7.16759 7.75 8.20312 7.75H9.32812Z"
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
export class SiDirectionRtlIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('25');

  readonly viewBox = input<string>('0 0 25 25');

  readonly fill = input<string>('none');
}
