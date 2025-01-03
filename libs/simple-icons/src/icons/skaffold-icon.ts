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
  selector: 'svg[si-skaffold-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Skaffold</title>
    <svg:path
      d="M6.602 20.097H24v3.836H6.602v-3.836zm-2.766-6.692h13.562v3.837H0V6.714h3.836v6.691zm13.562-9.502H0V.067h17.398v3.836zm2.766 6.692H6.602V6.758H24v10.528h-3.836v-6.691z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSkaffoldIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
