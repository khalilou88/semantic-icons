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
  selector: 'svg[si-inkdrop-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Inkdrop</svg:title>
    <svg:path
      d="M8.8538 1.8124C9.423.8338 10.471.1434 11.607.0204c.9389-.1016 1.9145.1801 2.6558.7704a3.665 3.665 0 0 1 .873 1.0085c2.1647 3.7212 4.314 7.4514 6.471 11.1772.3424.5943.5005 1.282.4751 1.9621-.0216.5791-.1762 1.1527-.4632 1.6586-1.067 1.8622-2.1418 3.72-3.2127 5.58-.6375 1.1018-1.868 1.8129-3.134 1.8209-2.1693.0043-4.3387 0-6.508 0-1.2684-.0027-2.4975-.711-3.1373-1.8003-1.0817-1.8593-2.1556-3.7232-3.2335-5.585-.6362-1.1042-.6358-2.5271-.0076-3.6282 2.1483-3.7285 4.312-7.4481 6.468-11.1721ZM4.625 14.1495a1.1916 1.1916 0 0 0 0 1.183c1.074 1.864 2.085 3.6278 3.1744 5.4828a1.1875 1.1875 0 0 0 1.019.5845c2.1693.0046 4.2194.0135 6.3887 0a1.1873 1.1873 0 0 0 1.0179-.5912c1.0746-1.858 2.0949-3.6112 3.154-5.4781a1.1876 1.1876 0 0 0-.004-1.176c-2.1496-3.73-4.1723-7.26-6.3524-10.9724-.2298-.3875-.666-.6167-1.1181-.5809a1.1856 1.1856 0 0 0-.9324.5853 2974.9829 2974.9829 0 0 0-6.347 10.963Zm8.4659 4.0637a1.2598 1.2598 0 0 1-2.182 0L8.745 14.465a1.2597 1.2597 0 0 1 1.091-1.8896h4.328a1.2597 1.2597 0 0 1 1.091 1.8896l-2.164 3.7481Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiInkdropIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#7A78D7');
  }
}
