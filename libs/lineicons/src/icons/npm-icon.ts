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
  selector: 'svg[si-npm-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 12.5805H10.871V10.3547H12V12.5805ZM22 8.12891V14.7741H12V15.8708H7.54839V14.7418H2V8.12891H22ZM7.54839 9.19342H3.09677V13.645H5.32258V10.3547H6.45161V13.7096H7.58064L7.54839 9.19342ZM13.129 9.19342H8.67742V14.7418H10.9032V13.6128H13.129V9.19342ZM20.871 9.19342H14.2258V13.645H16.4516V10.3547H17.5806V13.7096H18.7097V10.3547H19.8387V13.7096H20.9677V9.19342H20.871Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiNpmIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
