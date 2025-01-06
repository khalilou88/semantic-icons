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
  selector: 'svg[si-mixtral-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3 3H8.20002V6.20004L11.4001 6.20013V9.40015L12.6 9.40018L12.6001 6.2001H15.8V3H21V21H15.8V14.6001L14.6 14.6V17.7999H9.39999V14.6001L8.20002 14.6V21H3V3ZM5 5V19H6.20002V12.5998L11.4 12.6003V15.7999H12.6V12.5998L17.8 12.6003V19H19V5H17.8V8.2001H14.6001L14.6 11.4002L9.40012 11.4001V8.20008L6.20002 8.19999V5H5Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMixtralLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
