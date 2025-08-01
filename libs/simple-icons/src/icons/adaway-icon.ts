import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-adaway-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AdAway</svg:title>
    <svg:path
      d="M7.049 0 .014 7.016 0 16.951l7.016 7.035 9.935.014 7.035-7.015L24 7.049 16.984.014zm-1.87 6.52c.456-.046 2.886.98 5.768.99 1.48.091 2.039.52 2.455.956.932.878 1.135 1.324 2.315.755.48-.231 1.072-1.6 1.739-1.747.52-.076 1.283.58 1.474.77.21.205.399.396.598.487-.684.037-1.632 1.634-1.657 2.99.137 3.791-1.57 3.582-3.248 5.437-.535.51-.836 1.578-.836 2.553l-.705-.021c-.418.01-.895-.535-1.126-.899-.44-.735-.897.673-1.583-.48.031-.383-1.833-.457-.762-1.348 2.53-1.79 3.764-2.168 3.711-2.708-.062-.638-1.545-.06-2.884-.122-2.213-.102-1.97-1.504-2.166-2.157-1.857-1.034 1.428-1.52-.015-1.826-.705-.111-1.949.15-2.21-1.069.235.291 3.32-.304 2.077-.498-1.725-.783-2.21-.364-2.926-1.835-.124-.15-.124-.218-.019-.228Zm12.575 1.903a.261.261 0 0 0-.26.26.261.261 0 0 0 .26.262.261.261 0 0 0 .261-.261.261.261 0 0 0-.26-.261z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAdawayIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#B71C1C');
}
