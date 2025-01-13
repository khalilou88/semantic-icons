import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nodejs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M11.9031 22C11.645 22 11.3547 21.9678 11.1289 21.7742L8.67726 20.3226C8.32245 20.0968 8.48373 20.0645 8.64501 20C9.12888 19.871 9.22566 19.7742 9.74179 19.5161C9.77404 19.4839 9.87082 19.4839 9.93532 19.5484L11.8063 20.6774C11.8386 20.7097 11.9353 20.7097 12.0321 20.6774L19.3547 16.4516C19.3869 16.4193 19.4837 16.3226 19.4837 16.2581V7.77419C19.4837 7.67741 19.4515 7.64516 19.3547 7.58066L11.9999 3.41936C11.9676 3.3871 11.8708 3.3871 11.774 3.41936L4.48371 7.64516C4.45145 7.67741 4.35468 7.77419 4.35468 7.83872V16.2581C4.35468 16.3548 4.38694 16.3871 4.48371 16.4516L6.48373 17.5807C7.58051 18.129 8.25791 17.4839 8.25791 16.8064V8.54837C8.25791 8.41934 8.3547 8.32259 8.48373 8.32259H9.4192C9.54823 8.32259 9.64501 8.41934 9.64501 8.54837V16.871C9.64501 18.3226 8.87082 19.129 7.51598 19.129C7.06435 19.129 6.80629 19.129 5.83857 18.6774L3.93533 17.6129C3.48371 17.3548 3.16113 16.8387 3.16113 16.2581V7.77419C3.16113 7.22581 3.4192 6.74194 3.93533 6.41934L11.1934 2.19355C11.645 1.93548 12.2902 1.93548 12.7418 2.19355L20.0644 6.45163C20.516 6.70969 20.8386 7.22581 20.8386 7.80644V16.2258C20.8386 16.7742 20.5805 17.2581 20.0644 17.5807L12.774 21.7742C12.4515 21.9678 12.1934 22 11.9031 22ZM17.8063 13.6774C17.8063 12.0968 16.774 11.6774 14.4837 11.3548C12.1934 11.0322 11.9999 10.9032 11.9999 10.3548C11.9999 9.90322 12.1934 9.32259 13.8708 9.32259C15.3547 9.32259 15.9031 9.64516 16.1289 10.6774C16.1611 10.7742 16.2257 10.8064 16.3547 10.8064H17.2902C17.3224 10.8064 17.4192 10.7742 17.4192 10.7742C17.4192 10.7742 17.4515 10.6774 17.4515 10.6452C17.3224 8.87097 16.1289 8.09678 13.8386 8.09678C11.7418 8.09678 10.4837 8.96775 10.4837 10.4516C10.4837 12.0323 11.7418 12.4839 13.7095 12.6774C16.0966 12.9032 16.2902 13.2581 16.2902 13.7097C16.2902 14.5161 15.645 14.8387 14.1289 14.8387C12.1934 14.8387 11.774 14.3548 11.645 13.3871C11.6128 13.2903 11.5482 13.1936 11.4192 13.1936H10.5482C10.4192 13.1936 10.3224 13.2903 10.3224 13.4193C10.3224 14.6452 10.9676 16.129 14.1611 16.129C16.4837 16.1936 17.8063 15.2903 17.8063 13.6774Z"
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
export class SiNodejsIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
