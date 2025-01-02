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
  selector: 'svg[si-monzo-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Monzo</title>
    <svg:path
      d="M4.244 1.174a.443.443 0 00-.271.13l-3.97 3.97-.001.001c3.884 3.882 8.093 8.092 11.748 11.748v-8.57L4.602 1.305a.443.443 0 00-.358-.131zm15.483 0a.443.443 0 00-.329.13L12.25 8.456v8.568L24 5.275c-1.316-1.322-2.647-2.648-3.97-3.97a.443.443 0 00-.301-.131zM0 5.979l.002 10.955c0 .294.118.577.326.785l4.973 4.976c.28.282.76.083.758-.314V12.037zm23.998.003l-6.06 6.061v10.338c-.004.399.48.6.76.314l4.974-4.976c.208-.208.326-.49.326-.785z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMonzoIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
