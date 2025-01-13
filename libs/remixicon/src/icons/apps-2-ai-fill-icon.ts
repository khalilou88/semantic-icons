import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-apps-2-ai-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.5 7C2.5 9.48528 4.51472 11.5 7 11.5C9.48528 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48528 2.5 7 2.5C4.51472 2.5 2.5 4.51472 2.5 7ZM2.5 17C2.5 19.4853 4.51472 21.5 7 21.5C9.48528 21.5 11.5 19.4853 11.5 17C11.5 14.5147 9.48528 12.5 7 12.5C4.51472 12.5 2.5 14.5147 2.5 17ZM12.5 17C12.5 19.4853 14.5147 21.5 17 21.5C19.4853 21.5 21.5 19.4853 21.5 17C21.5 14.5147 19.4853 12.5 17 12.5C14.5147 12.5 12.5 14.5147 12.5 17ZM17.5252 11.155L17.8026 10.5186C18.297 9.38398 19.1876 8.48059 20.2988 7.98638L21.1534 7.60631C21.6155 7.4008 21.6155 6.7284 21.1534 6.52289L20.3467 6.16406C19.2068 5.65713 18.3002 4.72031 17.8143 3.54712L17.5295 2.85945C17.3309 2.38018 16.669 2.38018 16.4705 2.85945L16.1856 3.54712C15.6997 4.72031 14.7932 5.65713 13.6534 6.16406L12.8466 6.52289C12.3845 6.7284 12.3845 7.4008 12.8466 7.60631L13.7011 7.98638C14.8124 8.48059 15.7029 9.38398 16.1974 10.5186L16.4748 11.155C16.6778 11.6209 17.3222 11.6209 17.5252 11.155Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiApps2AiFillIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
