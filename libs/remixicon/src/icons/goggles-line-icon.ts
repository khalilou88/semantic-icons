import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-goggles-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.71771 10.1469C3.28501 10.7007 3 11.4459 3 12.5C3 13.5152 3.37054 14.5519 3.96367 15.3216C4.55979 16.0952 5.29419 16.5 6 16.5C6.76159 16.5 7.5137 16.066 8.53831 15.4084C9.58713 14.7353 10.7058 14 12 14C13.2942 14 14.4129 14.7353 15.4617 15.4084C16.4863 16.066 17.2384 16.5 18 16.5C18.7058 16.5 19.4402 16.0952 20.0363 15.3216C20.6295 14.5519 21 13.5152 21 12.5C21 11.4459 20.715 10.7007 20.2823 10.1469C19.8394 9.57996 19.1829 9.13906 18.3265 8.80757C16.5808 8.13182 14.251 8 12 8C9.74904 8 7.41918 8.13182 5.67349 8.80757C4.81714 9.13906 4.16063 9.57996 3.71771 10.1469ZM4.95151 6.94243C7.08082 6.11818 9.75096 6 12 6C14.249 6 16.9192 6.11818 19.0485 6.94243C20.1296 7.36094 21.1294 7.98254 21.8583 8.91561C22.5975 9.86175 23 11.0541 23 12.5C23 13.9701 22.4751 15.4334 21.6205 16.5424C20.7689 17.6475 19.5033 18.5 18 18.5C16.5751 18.5 15.3437 17.7094 14.4251 17.1196C13.7195 16.6666 12.8833 16 12 16C11.1167 16 10.2804 16.6666 9.5749 17.1196C8.65627 17.7094 7.42486 18.5 6 18.5C4.49667 18.5 3.23108 17.6475 2.37947 16.5424C1.52489 15.4334 1 13.9701 1 12.5C1 11.0541 1.40249 9.86175 2.14166 8.91561C2.87062 7.98254 3.87036 7.36094 4.95151 6.94243Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGogglesLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
