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
  selector: 'svg[si-bolt-2-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.6767 3.09336C6.75061 2.74731 7.05632 2.5 7.41016 2.5H14.6891C14.9457 2.5 15.1845 2.6312 15.3221 2.8478C15.4597 3.0644 15.477 3.33632 15.368 3.56863L13.1876 8.21482L18.8398 8.21482C19.1127 8.21482 19.3641 8.36309 19.4962 8.60195C19.6282 8.84081 19.6201 9.13255 19.4749 9.36368L11.4461 22.1489C11.2619 22.4422 10.9008 22.5712 10.5724 22.4611C10.244 22.3509 10.0338 22.0302 10.0637 21.6852L10.6842 14.5352H5.16016C4.93376 14.5352 4.71947 14.4329 4.57707 14.2569C4.43468 14.0809 4.37942 13.8499 4.4267 13.6285L6.6767 3.09336ZM8.0169 4L6.08725 13.0352H11.5021C11.7123 13.0352 11.9128 13.1234 12.0549 13.2783C12.1969 13.4332 12.2675 13.6406 12.2493 13.85L11.8264 18.7226L17.4832 9.71482L12.0071 9.71482C11.7505 9.71482 11.5117 9.58362 11.3741 9.36702C11.2365 9.15042 11.2192 8.8785 11.3282 8.64619L13.5086 4H8.0169Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBolt2Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}