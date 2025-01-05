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
  selector: 'svg[si-kde-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>KDE</svg:title>
    <svg:path
      d="M13.881 0L9.89.382v16.435l3.949-.594V9.216l5.308 7.772 4.162-1.317-5.436-7.475 5.479-7.05L19.105.17 13.84 7.22zM4.834 4.005a.203.203 0 0 0-.123.059L3.145 5.63a.203.203 0 0 0-.03.248L4.949 8.9a7.84 7.84 0 0 0-.772 1.759l-3.367.7a.203.203 0 0 0-.162.199v2.215c0 .093.064.174.155.196l3.268.8a7.83 7.83 0 0 0 .801 2.03L2.98 19.683a.203.203 0 0 0 .027.254l1.566 1.567a.204.204 0 0 0 .249.03l2.964-1.8c.582.336 1.21.6 1.874.78l.692 3.325c.02.094.102.161.198.161h2.215a.202.202 0 0 0 .197-.155l.815-3.332a7.807 7.807 0 0 0 1.927-.811l2.922 1.915c.08.053.186.042.254-.026l1.567-1.566a.202.202 0 0 0 .03-.248l-1.067-1.758-.345.11a.12.12 0 0 1-.135-.047L17.371 15.8a6.347 6.347 0 1 1-8.255-8.674V5.488c-.401.14-.79.31-1.159.511l-.001-.002-2.99-1.96a.203.203 0 0 0-.132-.033Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKdeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '1D99F3');
  }
}
