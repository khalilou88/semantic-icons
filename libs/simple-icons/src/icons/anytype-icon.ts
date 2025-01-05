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
  selector: 'svg[si-anytype-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Anytype</svg:title>
    <svg:path
      d="M5.333 0h13.334A5.322 5.322 0 0 1 24 5.333v13.334A5.322 5.322 0 0 1 18.667 24H5.333A5.322 5.322 0 0 1 0 18.667V5.333A5.322 5.322 0 0 1 5.333 0Zm10.334 7.667v-3H6.344v3zm0 0v11.666h3V7.667ZM9.5 19.333a4.833 4.833 0 1 0 0-9.666 4.833 4.833 0 0 0 0 9.666z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAnytypeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FF6A7B');
  }
}
