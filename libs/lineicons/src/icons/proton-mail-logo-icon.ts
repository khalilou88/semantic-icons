import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-proton-mail-logo-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.11615 14.4659V12.4791C6.11615 11.664 6.58482 11.0222 7.53235 11.0222C7.68518 11.0222 7.838 11.0323 7.98064 11.0731V11.8882C7.86857 11.878 7.77687 11.878 7.73612 11.878C7.23688 11.878 7.02292 12.1123 7.02292 12.5708V14.4557H6.11615V14.4659ZM8.25573 12.7848C8.25573 11.7863 9.00968 11.0222 10.0591 11.0222C11.1085 11.0222 11.8625 11.7863 11.8625 12.7848C11.8625 13.7832 11.1085 14.5474 10.0591 14.5474C9.00968 14.5474 8.25573 13.7832 8.25573 12.7848ZM10.9659 12.7848C10.9659 12.2142 10.5889 11.8169 10.0591 11.8169C9.53948 11.8169 9.15232 12.2142 9.15232 12.7848C9.15232 13.3553 9.52929 13.7527 10.0591 13.7527C10.5889 13.7527 10.9659 13.3553 10.9659 12.7848ZM14.5013 11.8169H13.5232V13.07C13.5232 13.5081 13.676 13.7119 14.1345 13.7119C14.1752 13.7119 14.2873 13.7119 14.4198 13.7017V14.4455C14.2364 14.4964 14.0734 14.527 13.89 14.527C13.1258 14.527 12.6164 14.0685 12.6164 13.2025V11.8169H12.0051V11.0935H12.1579C12.4126 11.0935 12.6164 10.8897 12.6164 10.635V9.95236H13.5232V11.0935H14.5013V11.8169ZM14.7764 12.7848C14.7764 11.7863 15.5303 11.0222 16.5797 11.0222C17.6291 11.0222 18.3831 11.7863 18.3831 12.7848C18.3831 13.7832 17.619 14.5474 16.5797 14.5474C15.5303 14.5474 14.7764 13.7832 14.7764 12.7848ZM17.4763 12.7848C17.4763 12.2142 17.0993 11.8169 16.5695 11.8169C16.0499 11.8169 15.6628 12.2142 15.6628 12.7848C15.6628 13.3553 16.0397 13.7527 16.5695 13.7527C17.0993 13.7527 17.4763 13.3553 17.4763 12.7848ZM18.8518 14.4659V12.5504C18.8518 11.664 19.4223 11.0222 20.431 11.0222C21.4396 11.0222 22 11.664 22 12.5504V14.4659H21.0932V12.6217C21.0932 12.1225 20.8691 11.8169 20.4208 11.8169C19.9725 11.8169 19.7585 12.1225 19.7585 12.6217V14.4659H18.8518ZM2 13.1617V14.4659H2.91696V13.2229C2.91696 12.9682 3.12073 12.7644 3.37545 12.7644H4.31279C4.75089 12.7644 5.16862 12.5912 5.48446 12.2753C6.12634 11.6335 6.12634 10.584 5.48446 9.94217C5.16862 9.62633 4.75089 9.45312 4.31279 9.45312H2V11.0833H2.91696V10.3191H4.25166C4.67957 10.3191 5.03617 10.6656 5.03617 11.1037C5.03617 11.5316 4.68976 11.8882 4.25166 11.8882H3.28375C2.76414 11.8882 2.29547 12.204 2.10188 12.6829C2.03057 12.8255 2 12.9987 2 13.1617Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiProtonMailLogoIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
