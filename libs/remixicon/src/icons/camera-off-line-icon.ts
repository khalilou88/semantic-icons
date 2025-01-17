import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-camera-off-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.5859 21H3.00016C2.44787 21 2.00016 20.5523 2.00016 20V6.00003C2.00016 5.44775 2.44787 5.00003 3.00016 5.00003H3.58594L1.39355 2.80765L2.80777 1.39343L22.6068 21.1924L21.1925 22.6066L19.5859 21ZM5.58594 7.00003H4.00016V19H17.5859L15.4053 16.8194C14.4688 17.5588 13.286 18 12.0002 18C8.96259 18 6.50016 15.5376 6.50016 12.5C6.50016 11.2142 6.94141 10.0314 7.68076 9.09485L5.58594 7.00003ZM9.11052 10.5246C8.72543 11.0868 8.50016 11.7671 8.50016 12.5C8.50016 14.433 10.0672 16 12.0002 16C12.7331 16 13.4134 15.7748 13.9756 15.3897L9.11052 10.5246ZM22.0002 17.7858L20.0002 15.7858V7.00003H16.1717L14.1717 5.00003H9.82858L9.52147 5.30715L8.10726 3.89293L9.00016 3.00003H15.0002L17.0002 5.00003H21.0002C21.5524 5.00003 22.0002 5.44775 22.0002 6.00003V17.7858ZM11.2633 7.04897C11.5043 7.0167 11.7503 7.00003 12.0002 7.00003C15.0377 7.00003 17.5002 9.46247 17.5002 12.5C17.5002 12.7499 17.4835 12.9959 17.4512 13.2369L15.1133 10.899C14.7794 10.251 14.2492 9.72077 13.6012 9.38686L11.2633 7.04897Z"
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
export class SiCameraOffLineIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}
