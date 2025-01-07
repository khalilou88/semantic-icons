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
  selector: 'svg[si-brightness-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m20 15.31 2.6-2.6a.996.996 0 0 0 0-1.41L20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrightness5Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
