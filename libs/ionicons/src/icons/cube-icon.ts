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
  selector: 'svg[si-cube-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M440.9 136.3a4 4 0 000-6.91L288.16 40.65a64.14 64.14 0 00-64.33 0L71.12 129.39a4 4 0 000 6.91L254 243.88a4 4 0 004.06 0zM54 163.51a4 4 0 00-6 3.49v173.89a48 48 0 0023.84 41.39L234 479.51a4 4 0 006-3.46V274.3a4 4 0 00-2-3.46zM272 275v201a4 4 0 006 3.46l162.15-97.23A48 48 0 00464 340.89V167a4 4 0 00-6-3.45l-184 108a4 4 0 00-2 3.45z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCubeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
