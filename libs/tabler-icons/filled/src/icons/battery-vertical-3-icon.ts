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
  selector: 'svg[si-battery-vertical-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M13.5 3a1.5 1.5 0 0 1 1.395 .948l.018 .052h.087a3 3 0 0 1 2.995 2.824l.005 .176v11a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3v-11a3 3 0 0 1 3 -3h.086l.019 -.052a1.5 1.5 0 0 1 1.25 -.941l.145 -.007zm.5 13h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2m0 -3h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0 -2"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBatteryVertical3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
