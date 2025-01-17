import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-ticket-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M490.18 181.4l-44.13-44.13a20 20 0 00-27-1 30.81 30.81 0 01-41.68-1.6 30.81 30.81 0 01-1.6-41.67 20 20 0 00-1-27L330.6 21.82a19.91 19.91 0 00-28.13 0l-70.35 70.34a39.87 39.87 0 00-9.57 15.5 7.71 7.71 0 01-4.83 4.83 39.78 39.78 0 00-15.5 9.58l-180.4 180.4a19.91 19.91 0 000 28.13L66 374.73a20 20 0 0027 1 30.69 30.69 0 0143.28 43.28 20 20 0 001 27l44.13 44.13a19.91 19.91 0 0028.13 0l180.4-180.4a39.82 39.82 0 009.58-15.49 7.69 7.69 0 014.84-4.84 39.84 39.84 0 0015.49-9.57l70.34-70.35a19.91 19.91 0 00-.01-28.09zm-228.37-29.65a16 16 0 01-22.63 0l-11.51-11.51a16 16 0 0122.63-22.62l11.51 11.5a16 16 0 010 22.63zm44 44a16 16 0 01-22.62 0l-11-11a16 16 0 1122.63-22.63l11 11a16 16 0 01.01 22.66zm44 44a16 16 0 01-22.63 0l-11-11a16 16 0 0122.63-22.62l11 11a16 16 0 01.05 22.67zm44.43 44.54a16 16 0 01-22.63 0l-11.44-11.5a16 16 0 1122.68-22.57l11.45 11.49a16 16 0 01-.01 22.63z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTicketIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}
