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
  selector: 'svg[si-exit-sharp-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M335.69 272h-161v-32h161V92a12 12 0 00-12-12h-280a12 12 0 00-12 12v328a12 12 0 0012 12h280a12 12 0 0012-12zM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiExitSharpIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
