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
  selector: 'svg[si-medication-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zm-2 0H7v11h10V8zm1-5H6v2h12V3z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMedicationIcon implements OnInit {
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
