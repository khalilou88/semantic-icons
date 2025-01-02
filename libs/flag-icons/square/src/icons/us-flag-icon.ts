import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-us-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#bd3d44" d="M0 0h512v512H0" />
    <svg:path
      stroke="#fff"
      stroke-width="40"
      d="M0 58h512M0 137h512M0 216h512M0 295h512M0 374h512M0 453h512"
    />
    <svg:path fill="#192f5d" d="M0 0h390v275H0z" />
    <marker id="us-a" markerHeight="30" markerWidth="30">
      <svg:path fill="#fff" d="m15 0 9.3 28.6L0 11h30L5.7 28.6" />
    </marker>
    <svg:path
      fill="none"
      marker-mid="url(#us-a)"
      d="m0 0 18 11h65 65 65 65 66L51 39h65 65 65 65L18 66h65 65 65 65 66L51 94h65 65 65 65L18 121h65 65 65 65 66L51 149h65 65 65 65L18 177h65 65 65 65 66L51 205h65 65 65 65L18 232h65 65 65 65 66z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiUsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
