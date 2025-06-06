import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-shirt-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.83869 2.54502C6.24703 2.1934 6.768 2 7.30687 2H9.04152C9.40784 2 9.72057 2.26463 9.78118 2.62591C9.95961 3.68948 10.8859 4.5 12 4.5C13.1142 4.5 14.0405 3.68948 14.2189 2.62591C14.2795 2.26463 14.5922 2 14.9586 2H16.6932C17.2321 2 17.753 2.1934 18.1614 2.54502L22.2394 6.05667C22.5073 6.28735 22.5777 6.67378 22.4085 6.98414L20.5335 10.4216C20.4372 10.5981 20.2741 10.7286 20.0808 10.7837C19.8875 10.8389 19.6802 10.8141 19.5053 10.715L18.75 10.287V19.75C18.75 20.9926 17.7427 22 16.5 22H7.50004C6.2574 22 5.25004 20.9926 5.25004 19.75V10.287L4.4948 10.715C4.31991 10.8141 4.11255 10.8389 3.91925 10.7837C3.72594 10.7286 3.56287 10.5981 3.46661 10.4216L1.59161 6.98414C1.42233 6.67378 1.49276 6.28735 1.76064 6.05667L5.83869 2.54502ZM7.30687 3.5C7.12725 3.5 6.95359 3.56447 6.81748 3.68167L3.19865 6.79788L4.41845 9.03418L5.63028 8.34748C5.86246 8.21591 6.14707 8.21763 6.37765 8.352C6.60823 8.48636 6.75004 8.73313 6.75004 9V19.75C6.75004 20.1642 7.08582 20.5 7.50004 20.5H16.5C16.9143 20.5 17.25 20.1642 17.25 19.75V9C17.25 8.73313 17.3918 8.48636 17.6224 8.352C17.853 8.21763 18.1376 8.21591 18.3698 8.34748L19.5816 9.03418L20.8014 6.79788L17.1826 3.68167C17.0465 3.56447 16.8728 3.5 16.6932 3.5H15.5364C15.0215 4.95657 13.6332 6 12 6C10.3669 6 8.97856 4.95657 8.46364 3.5H7.30687Z"
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
export class SiShirt1Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
