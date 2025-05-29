import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-mn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:mask id="a">
      <svg:circle cx="256" cy="256" r="256" fill="#fff" />
    </svg:mask>
    <svg:g mask="url(#a)">
      <svg:path
        fill="#a2001d"
        d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"
      />
      <svg:path fill="#0052b4" d="M167 0h178v512H167z" />
      <svg:g fill="#ffda44">
        <svg:path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z" />
        <svg:circle cx="89" cy="289.4" r="22.3" />
        <svg:circle cx="89" cy="211.5" r="11.1" />
        <svg:path
          d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15 7.9 24.3L89 182l-20.6 15 7.9-24.3-20.6-15h25.5z"
        />
      </svg:g>
    </svg:g>
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
export class SiMnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('512');

  readonly height = input<string | number>('512');

  readonly viewBox = input<string>('0 0 512 512');
}
