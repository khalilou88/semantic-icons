import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-grammarly-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 22C17.5227 22 22 17.5227 22 12C22 6.47729 17.5227 2 12 2C6.47732 2 2 6.47729 2 12C2 17.5227 6.47732 22 12 22ZM14.1325 14.6671C13.7968 14.6671 13.4865 14.4457 13.4272 14.123C13.4087 14.0261 13.4122 13.9265 13.4374 13.8311C13.4625 13.7357 13.5089 13.647 13.573 13.5713C13.6371 13.4955 13.7175 13.4345 13.8083 13.3928C13.8991 13.351 13.9982 13.3294 14.0985 13.3296H17.8065V17.1375C17.8061 17.236 17.7837 17.3332 17.7408 17.4222C17.698 17.5113 17.6357 17.5899 17.5584 17.6526C17.4811 17.7154 17.3907 17.7606 17.2936 17.7852C17.1965 17.8098 17.0951 17.8131 16.9966 17.7948C16.6666 17.7365 16.4405 17.4325 16.4405 17.1049V16.4691L16.5691 15.7653C16.0155 16.3913 15.331 16.8927 14.5622 17.2352C13.7934 17.5776 12.9584 17.7532 12.1142 17.7497C8.72852 17.7497 6.0071 15.008 6.20355 11.6484C6.37316 8.76226 8.75819 6.40155 11.705 6.2079C12.7647 6.13465 13.8249 6.34281 14.7745 6.81055C15.724 7.27829 16.5279 7.98839 17.1019 8.86639C17.1876 9.01081 17.2143 9.18184 17.1765 9.34484C17.1387 9.50787 17.0393 9.65068 16.8984 9.74445C16.5882 9.95477 16.1613 9.84371 15.9465 9.54035C15.1366 8.42632 13.7247 7.50381 12.1142 7.50381C9.0239 7.50381 6.653 10.5378 7.89816 13.7162C8.44726 15.1162 9.74752 16.1193 11.2612 16.3518C13.1205 16.6371 14.8207 15.9901 15.8002 14.5838L15.1882 14.6671H14.1325Z"
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
export class SiGrammarlyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
