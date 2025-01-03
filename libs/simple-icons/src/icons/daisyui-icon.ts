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
  selector: 'svg[si-daisyui-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>DaisyUI</title>
    <svg:path
      d="M12 0C7.828.001 4.396 3.433 4.395 7.605c.001 4.172 3.433 7.604 7.605 7.605 4.172-.001 7.604-3.433 7.605-7.605C19.604 3.433 16.172.001 12 0Zm0 .286c4.016 0 7.32 3.304 7.32 7.32-.001 4.015-3.305 7.318-7.32 7.318-4.015 0-7.319-3.304-7.32-7.319 0-4.016 3.304-7.32 7.32-7.32zm0 4.04a3.294 3.294 0 0 0-3.279 3.279v.001A3.296 3.296 0 0 0 12 10.884a3.294 3.294 0 0 0 3.279-3.279A3.294 3.294 0 0 0 12 4.326ZM8.34 16.681h-.008a3.67 3.67 0 0 0-3.652 3.652v.015A3.67 3.67 0 0 0 8.332 24h7.336a3.67 3.67 0 0 0 3.652-3.652v-.016a3.67 3.67 0 0 0-3.652-3.652h-.008Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDaisyuiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}