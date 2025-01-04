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
  selector: 'svg[si-protondrive-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Proton Drive</svg:title>
    <svg:path
      d="M24 6.595v12.79c0 1.36-1.11 2.462-2.482 2.462h-1.62V9a2.925 2.925 0 0 0-2.93-2.914l-9.42.053a.943.943 0 0 1-.55-.172L4.905 4.493a2.918 2.918 0 0 0-1.694-.536H.1A2.47 2.47 0 0 1 2.482 2.15h4.657c.47 0 .928.148 1.305.424l1.559 1.134c.38.276.837.424 1.308.424h10.207A2.471 2.471 0 0 1 24 6.595zM18.897 9v12.85H2.482A2.471 2.471 0 0 1 0 19.387V4.957h3.21c.4 0 .792.122 1.118.353l2.095 1.476a1.94 1.94 0 0 0 1.13.353l9.402-.052A1.922 1.922 0 0 1 18.897 9z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiProtondriveIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
