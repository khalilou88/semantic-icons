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
  selector: 'svg[si-adventofcode-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Advent Of Code</svg:title>
    <svg:path
      d="m14.05 13.236 6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158 6.498-9.606L.553 9.22l.615-1.69 9.596 3.463L11.087 0h1.826l.323 10.993 9.596-3.462.615 1.69-9.387 4.015z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAdventofcodeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'FFFF66');
  }
}
