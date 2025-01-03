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
  selector: 'svg[si-clubforce-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Clubforce</title>
    <svg:path
      d="M1.4 0C.624 0 0 .624 0 1.4v21.2c0 .776.624 1.4 1.4 1.4h21.2c.776 0 1.4-.624 1.4-1.4V1.4c0-.776-.624-1.4-1.4-1.4Zm4.778 5.5h9.61l-2.83 2.112H8.331v3.472L6.18 12.72V5.5Zm11.644 1.317v7.415L11.96 18.5l-4.786-3.629 1.675-1.317 3.111 2.354 3.19-2.392-3.23-2.234 1.834-1.355 1.955 1.355v-2.87Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiClubforceIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}