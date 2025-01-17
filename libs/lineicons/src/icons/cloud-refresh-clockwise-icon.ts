import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-cloud-refresh-clockwise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6.38688 7.48329C6.45702 4.44302 8.94354 2 12.0007 2C15.0578 2 17.5444 4.44308 17.6144 7.48338C20.0688 7.67706 22.0001 9.7301 22.0001 12.2342C22.0001 12.2685 21.9997 12.3027 21.999 12.3368C21.4783 11.685 20.8414 11.13 20.1197 10.7032C19.571 9.67117 18.4847 8.96844 17.2343 8.96844H16.866C16.4518 8.96844 16.116 8.63266 16.116 8.21844V7.6153C16.116 5.34248 14.2735 3.5 12.0007 3.5C9.72784 3.5 7.88536 5.34248 7.88536 7.6153V8.21844C7.88536 8.63266 7.54957 8.96844 7.13536 8.96844H6.76578C4.96214 8.96844 3.5 10.4306 3.5 12.2342C3.5 14.0379 4.96214 15.5 6.76577 15.5H9.84159C9.78134 15.8661 9.75 16.2419 9.75 16.625C9.75 16.7508 9.75338 16.8758 9.76005 17H6.76577C4.13371 17 2 14.8663 2 12.2342C2 9.72969 3.93195 7.67638 6.38688 7.48329Z"
      fill="#323544"
    />
    <svg:path
      d="M12.0223 15.7449C11.6331 15.603 11.4327 15.1725 11.5746 14.7834C11.8569 14.009 12.3151 13.306 12.9178 12.732C13.7399 11.9491 14.7887 11.4466 15.9139 11.2964C17.0392 11.1463 18.1831 11.3562 19.1817 11.8961C20.1659 12.4282 20.9592 13.254 21.4515 14.2579C21.5044 14.3525 21.5375 14.4597 21.5449 14.5739C21.5656 14.8717 21.4062 15.1656 21.1206 15.3024C20.9956 15.3624 20.8622 15.3845 20.7334 15.3735H19.0637C18.6495 15.3735 18.3137 15.0378 18.3137 14.6235C18.3137 14.2093 18.6495 13.8735 19.0637 13.8735H19.3547C19.0937 13.6146 18.7956 13.3926 18.4683 13.2156C17.7483 12.8263 16.9236 12.675 16.1123 12.7832C15.3011 12.8915 14.5449 13.2538 13.9522 13.8183C13.5177 14.2321 13.1874 14.7389 12.9838 15.2972C12.8419 15.6864 12.4114 15.8868 12.0223 15.7449Z"
      fill="#323544"
    />
    <svg:path
      d="M14.781 20.0344C14.452 19.8564 14.1525 19.633 13.8905 19.3723H14.1851C14.5993 19.3723 14.9351 19.0365 14.9351 18.6223C14.9351 18.2081 14.5993 17.8723 14.1851 17.8723H12.4528C12.055 17.8723 11.7295 18.182 11.7043 18.5735C11.6958 18.6983 11.7185 18.827 11.7764 18.9479C12.267 19.9717 13.069 20.8139 14.0676 21.3538C15.0662 21.8938 16.2101 22.1037 17.3354 21.9535C18.4606 21.8034 19.5095 21.3008 20.3316 20.5179C20.9349 19.9433 21.3934 19.2394 21.6756 18.4641C21.8173 18.0749 21.6167 17.6445 21.2275 17.5028C20.8382 17.3611 20.4078 17.5617 20.2661 17.9509C20.0626 18.5099 19.7321 19.0174 19.2971 19.4317C18.7044 19.9961 17.9482 20.3584 17.137 20.4667C16.3257 20.575 15.501 20.4236 14.781 20.0344Z"
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
export class SiCloudRefreshClockwiseIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}
