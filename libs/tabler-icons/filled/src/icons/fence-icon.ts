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
  selector: 'svg[si-fence-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M19 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z" />
    <svg:path d="M11 17v3a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-3z" />
    <svg:path
      d="M20 12a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1z"
    />
    <svg:path
      d="M8.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0"
    />
    <svg:path
      d="M16.707 3.293l2 2a1 1 0 0 1 .293 .707v5h-6v-5a1 1 0 0 1 .293 -.707l2 -2a1 1 0 0 1 1.414 0"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFenceIcon implements OnInit {
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
