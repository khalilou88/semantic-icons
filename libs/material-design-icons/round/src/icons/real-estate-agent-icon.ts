import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-real-estate-agent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 22c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2s-2 .9-2 2v7c0 1.1.9 2 2 2zm8.37-5.57 1.47.51c.11.04.22.06.33.06H20c1.11 0 2 .89 2.01 2l-7.39 2.77c-.4.15-.84.17-1.25.05L7 20.02V11h1.6c.24 0 .48.04.7.13l6.93 2.59a1.182 1.182 0 0 1-.41 2.29h-2.63c-.12 0-.24-.02-.36-.07l-1.12-.43c-.26-.1-.55.04-.64.3-.09.25.04.53.3.62zM20.16 5.9l-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V9h1.61c.25 0 .51.05.74.14l7.79 3.11C18.26 12.71 19 13.79 19 15h2V7.53c0-.65-.31-1.25-.84-1.63zM13 10c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm2 2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zm0-2c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5z"
    />
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
export class SiRealEstateAgentIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}
