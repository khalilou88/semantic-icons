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
  selector: 'svg[si-sofa-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M9.00065 3C5.68694 3 3.00065 5.68629 3.00065 9V9.35115C1.47959 10.0975 0.633328 11.916 1.2667 13.6578L1.5792 14.5172C1.85802 15.2839 2.00065 16.0935 2.00065 16.9094V19.5C2.00065 20.3284 2.67222 21 3.50065 21H20.5006C21.3291 21 22.0006 20.3284 22.0006 19.5V16.9094C22.0006 16.0935 22.1433 15.2839 22.4221 14.5172L22.7346 13.6578C23.368 11.916 22.5217 10.0975 21.0006 9.35115V9C21.0006 5.68629 18.3144 3 15.0006 3H9.00065ZM19.0006 9.03175C17.3064 9.2618 16.0006 10.7141 16.0006 12.4715L16.0006 14H8.00065V12.4715C8.00065 10.7141 6.69488 9.2618 5.00065 9.03175V9C5.00065 6.79086 6.79151 5 9.00065 5H15.0006C17.2098 5 19.0006 6.79086 19.0006 9V9.03175ZM16.0006 16L16.0006 17H18.0006V12.4715C18.0006 11.6588 18.6595 11 19.4721 11C20.4933 11 21.204 12.0147 20.855 12.9743L20.5425 13.8337C20.184 14.8195 20.0006 15.8604 20.0006 16.9094V19H4.00065V16.9094C4.00065 15.8604 3.81727 14.8195 3.45879 13.8337L3.14629 12.9743C2.79732 12.0147 3.50802 11 4.52917 11C5.34185 11 6.00065 11.6588 6.00065 12.4715V17H8.00065V16H16.0006Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSofaLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
