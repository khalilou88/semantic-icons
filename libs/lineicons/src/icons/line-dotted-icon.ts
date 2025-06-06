import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-line-dotted-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.25156 11.0996C2.75451 11.0996 2.35156 11.5026 2.35156 11.9996C2.35156 12.4967 2.75451 12.8996 3.25156 12.8996C3.74862 12.8996 4.15166 12.4967 4.15166 11.9996C4.15166 11.5026 3.74862 11.0996 3.25156 11.0996Z"
      fill="#323544"
    />
    <svg:path
      d="M10.651 11.0996C10.1539 11.0996 9.75098 11.5026 9.75098 11.9996C9.75098 12.4967 10.1539 12.8996 10.651 12.8996C11.148 12.8996 11.5511 12.4967 11.5511 11.9996C11.5511 11.5026 11.148 11.0996 10.651 11.0996Z"
      fill="#323544"
    />
    <svg:path
      d="M13.4507 11.9996C13.4507 11.5026 13.8536 11.0996 14.3507 11.0996C14.8477 11.0996 15.2508 11.5026 15.2508 11.9996C15.2508 12.4967 14.8478 12.8996 14.3508 12.8996C13.8537 12.8996 13.4507 12.4967 13.4507 11.9996Z"
      fill="#323544"
    />
    <svg:path
      d="M6.95127 11.0996C6.45421 11.0996 6.05127 11.5026 6.05127 11.9996C6.05127 12.4967 6.45421 12.8996 6.95127 12.8996C7.44833 12.8996 7.85137 12.4967 7.85137 11.9996C7.85137 11.5026 7.44833 11.0996 6.95127 11.0996Z"
      fill="#323544"
    />
    <svg:path
      d="M17.1504 11.9996C17.1504 11.5026 17.5533 11.0996 18.0504 11.0996C18.5474 11.0996 18.9505 11.5026 18.9505 11.9996C18.9505 12.4967 18.5475 12.8996 18.0505 12.8996C17.5534 12.8996 17.1504 12.4967 17.1504 11.9996Z"
      fill="#323544"
    />
    <svg:path
      d="M21.7506 11.0996C21.2535 11.0996 20.8506 11.5026 20.8506 11.9996C20.8506 12.4967 21.2535 12.8996 21.7506 12.8996C22.2476 12.8996 22.6507 12.4967 22.6507 11.9996C22.6507 11.5026 22.2476 11.0996 21.7506 11.0996Z"
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
export class SiLineDottedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
