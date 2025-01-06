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
  selector: 'svg[si-apps-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:rect x="48" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="48" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="48" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="200" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="48" y="352" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="200" y="352" width="112" height="112" rx="8" ry="8" />
    <svg:rect x="352" y="352" width="112" height="112" rx="8" ry="8" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAppsSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
