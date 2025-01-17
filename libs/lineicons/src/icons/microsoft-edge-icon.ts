import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-microsoft-edge-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.4628 17.1936C20.4306 17.1613 20.3661 17.1613 20.3338 17.1936C20.0757 17.3226 19.7532 17.4517 19.4628 17.5484C18.4951 17.9033 17.5596 18.0968 16.5596 18.0968C14.6564 18.0968 12.8822 17.4517 11.4628 16.3226C10.0434 15.1291 9.26925 13.5807 9.26925 11.9678C9.26925 11.6129 9.36602 11.1936 9.49506 10.871C7.07569 12.9678 6.62408 16.6129 8.59183 19.2259C9.04344 19.9033 9.62409 20.4517 10.3338 20.871C11.5918 21.6452 13.0757 21.9033 14.5273 21.6452C14.7531 21.613 14.9789 21.5484 15.1725 21.4517L15.2693 21.4194C17.3983 20.6775 19.2693 19.1936 20.4628 17.2904C20.5596 17.2581 20.5596 17.1936 20.4628 17.1936Z"
      fill="#323544"
    />
    <svg:path
      d="M10.2043 21.2258C10.172 21.1935 10.1075 21.1935 10.0753 21.129C9.39783 20.6774 8.81718 20.129 8.33331 19.4516C7.30105 18.0322 6.88169 16.258 7.13976 14.4838C7.39782 12.7096 8.36557 11.2258 9.78493 10.1613C9.78493 10.1613 9.81719 10.129 9.8817 10.129C10.0107 10.0322 10.2043 9.90319 10.3978 9.80641C10.5269 9.70964 10.6559 9.67738 10.8172 9.5806H10.8494C11.1075 9.45157 11.5914 9.25802 12.1075 9.25802C12.8495 9.25802 13.5269 9.5806 14.0107 10.0322C13.9785 9.93544 13.914 9.90319 13.8817 9.80641C13.4624 9.12899 12.8817 8.25802 11.5269 7.54834C10.1075 6.8064 8.55912 6.77414 8.26879 6.77414C5.17201 6.77414 2.59136 8.67738 2.13974 11.1935C2.04297 11.4193 2.04297 11.6451 2.04297 11.8709C2.04297 13.3871 2.36555 14.8709 3.01071 16.2258C4.55911 19.5484 7.78492 21.6452 11.2365 21.9677C11.4946 22 11.7849 22 12.043 22H12.0753C11.8495 21.9677 11.6559 21.9032 11.4301 21.8065C11.0107 21.6774 10.5914 21.4516 10.2043 21.2258Z"
      fill="#323544"
    />
    <svg:path
      d="M21.2363 7.19356L21.2041 7.09679C19.5589 3.96775 16.0428 2 12.0427 2C7.65563 2 3.88143 4.90323 2.55885 8.87099C2.52659 9.00002 2.46207 9.19357 2.42982 9.3226C2.55885 9.0968 2.7524 8.87099 2.91369 8.64518C3.23627 8.3226 3.55885 8.00002 3.91369 7.74195C5.04272 6.9355 6.55885 6.38711 8.17176 6.38711C8.62338 6.38711 10.1718 6.41937 11.6234 7.19356C13.075 7.96776 13.7524 8.87099 14.1718 9.61293C14.3653 9.93551 14.4944 10.2903 14.5911 10.6129C14.6234 10.8387 14.6879 11.0645 14.7202 11.2904C14.7524 11.6129 14.7524 11.871 14.7524 12.0323C14.7524 12.0645 14.7524 12.0645 14.7524 12.1291C14.7524 12.6129 14.4944 13.3226 14.075 13.871C14.0427 13.9033 14.0427 13.9033 13.9782 13.9678C13.8815 14.0646 13.8492 14.0968 13.8492 14.1936C13.8492 14.3226 13.946 14.4517 14.1073 14.6129C15.1395 15.3549 17.204 15.2904 17.3008 15.2581C18.1073 15.2581 18.8815 15.0323 19.6234 14.6129C21.075 13.8065 21.946 12.2581 21.946 10.5807C22.0428 8.87099 21.4944 7.74195 21.2363 7.19356Z"
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
export class SiMicrosoftEdgeIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
