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
  selector: 'svg[si-rimacautomobili-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Rimac Automobili</title>
    <svg:path
      d="M21.422 1.317C18.428.488 15.194-.017 12.007 0 8.819-.017 5.586.487 2.594 1.317a.488.488 0 00-.342.455c0 7.95 2.976 17.802 9.479 22.142a.464.464 0 00.537 0c6.503-4.34 9.495-14.175 9.479-22.142.016-.21-.13-.39-.326-.455zM15.91 17.055c-1.025 1.723-2.244 3.267-3.691 4.454a.32.319 0 01-.407 0C7.845 18.241 5.537 12.47 4.658 6.893L3.65 6.356h7.479c2.407 0 2.715.78 2.715 1.35 0 .57-.308 1.35-2.714 1.35H8.934a.128.128 0 00-.13.13c0 .032.016.065.05.097l7.332 7.332.78.78zm1.333-2.65l-4.374-4.374c-.065-.065-.016-.162.065-.18l.862-.096c1.805-.195 2.845-1.106 2.845-2.244 0-1.317-1.398-2.049-3.723-2.049H4.446A24.735 24.733 0 014.268 3.3a.462.462 0 01.374-.487 32.298 32.296 0 017.3-.862h.13c2.39 0 4.878.293 7.301.862.227.049.39.26.373.487-.179 3.625-.99 7.593-2.503 11.104z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRimacautomobiliIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
