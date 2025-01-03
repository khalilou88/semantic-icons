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
  selector: 'svg[si-vc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd" stroke-width="1pt">
      <svg:path fill="#f4f100" d="M0 0h510.4v512H0z" />
      <svg:path fill="#199a00" d="M385.6 0H512v512H385.6z" />
      <svg:path fill="#0058aa" d="M0 0h126.4v512H0z" />
    </svg:g>
    <svg:path
      fill="#199a00"
      fill-rule="evenodd"
      d="m191.2 138.6-49.5 76.2 47.8 79.3 46.7-78.6zm129.4 0L271 214.8l47.7 79.3 46.8-78.6-45-76.9zm-65.4 103.9-49.4 76.1 47.7 79.4 46.7-78.7z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVcFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
