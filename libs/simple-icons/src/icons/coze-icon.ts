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
  selector: 'svg[si-coze-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Coze</title>
    <svg:path
      d="M9.366 12.096a.61.61 0 0 0-.608.608v1.218a.609.609 0 1 0 1.217 0v-1.218a.61.61 0 0 0-.609-.608m.8 3.453a.605.605 0 0 1 0-.86.605.605 0 0 1 .859 0 1.52 1.52 0 0 0 2.149 0 .605.605 0 0 1 .859 0 .605.605 0 0 1 0 .86 2.73 2.73 0 0 1-3.867 0m4.062-2.24a.61.61 0 1 1 .609.609.606.606 0 0 1-.61-.609zM3.023 0A3.024 3.024 0 0 0 0 3.023v17.954A3.024 3.024 0 0 0 3.023 24h17.954A3.024 3.024 0 0 0 24 20.977V3.023A3.024 3.024 0 0 0 20.977 0ZM12.1 3.78h.004a6.287 6.287 0 0 1 6.283 6.286v2.635h1.508c1.73 0 2.12 2.426.476 2.97l-1.984.663v1.137a1.513 1.513 0 0 1-2.19 1.353l-1.101-.549c-.052-.024-.115 0-.131.055-.892 2.785-4.835 2.785-5.727 0a.095.095 0 0 0-.13-.055l-1.102.55a1.513 1.513 0 0 1-2.19-1.354v-1.139l-1.984-.66c-1.647-.541-1.254-2.97.477-2.97h1.507v-2.636A6.285 6.285 0 0 1 12.1 3.78"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCozeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}