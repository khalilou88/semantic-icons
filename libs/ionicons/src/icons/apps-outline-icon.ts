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
  selector: 'svg[si-apps-outline-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect
      x="64"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="216"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="368"
      y="64"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="64"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="216"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="368"
      y="216"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="64"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="216"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
    <svg:rect
      x="368"
      y="368"
      width="80"
      height="80"
      rx="40"
      ry="40"
      fill="none"
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="32"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppsOutlineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
