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
  selector: 'svg[si-coggle-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Coggle</title>
    <svg:path
      d="M3.684 0A3.683 3.683 0 0 0 0 3.684v10.92c2.052-.535 3.606-1.577 5.158-3.13h7.367v7.368c-1.88 1.88-5.438 4.598-8.052 5.158h15.843A3.683 3.683 0 0 0 24 20.316V8.881c-1.544.537-3.087 1.575-4.63 3.119l-4.74 4.736V9.37H7.265l3.683-3.685c2.35-2.35 5.96-5.119 8.58-5.684H3.684z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCoggleIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}