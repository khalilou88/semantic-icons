import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-git-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M21.8377 11.6774L12.2893 2.09677C12.1603 1.96774 11.8377 1.96774 11.6442 2.09677L8.999 4.74194L11.4506 7.19355C11.6442 7.09677 11.87 7.06452 12.0958 7.06452C12.999 7.06452 13.6764 7.80645 13.6764 8.64516C13.6764 8.87097 13.6442 9.09677 13.5474 9.29032L15.5151 11.2581C15.7087 11.1613 15.9345 11.129 16.1603 11.129C17.0635 11.129 17.7409 11.871 17.7409 12.7097C17.7409 13.6129 16.999 14.2903 16.1603 14.2903C15.2571 14.2903 14.5797 13.5484 14.5797 12.7097C14.5797 12.4839 14.6119 12.2581 14.7087 12.0645L12.7409 10.0968H12.7087V13.8065C13.2893 14.0645 13.7087 14.6129 13.7087 15.2903C13.7087 16.1935 12.9667 16.871 12.128 16.871C11.2248 16.871 10.5474 16.129 10.5474 15.2903C10.5474 14.6129 10.9667 14.0323 11.5474 13.8065V10.1935C10.9667 9.93548 10.5474 9.3871 10.5474 8.70968C10.5474 8.48387 10.5797 8.25806 10.6764 8.06452L8.22481 5.6129L2.12802 11.6774C1.99899 11.8065 1.99899 12.129 2.12802 12.3226L11.7087 21.9032C11.8377 22.0323 12.1603 22.0323 12.3538 21.9032L21.9022 12.3226C21.999 12.129 21.999 11.871 21.8377 11.6774Z"
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
export class SiGitIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
