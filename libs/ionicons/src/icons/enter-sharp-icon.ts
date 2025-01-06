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
  selector: 'svg[si-enter-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0012 12h296a12 12 0 0012-12V92a12 12 0 00-12-12H172a12 12 0 00-12 12zM32 240h128v32H32z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEnterSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
