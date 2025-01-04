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
  selector: 'svg[si-hearth-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Hearth</svg:title>
    <svg:path
      d="M8.1958 10.318v9.576L.4531 24v-9.3298zm7.6591-4.162 7.692 4.1616v9.5736L15.8532 24v-9.3302l-7.6577-4.3522ZM8.196 0v9.576L.453 13.8027v-9.648Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHearthIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
