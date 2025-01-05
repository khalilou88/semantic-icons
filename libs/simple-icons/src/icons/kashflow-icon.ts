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
  selector: 'svg[si-kashflow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>KashFlow</svg:title>
    <svg:path
      d="M16.278 2.141l-.83 2.702C8.007.174 2.958 4.724 2.958 4.724-1.638 8.564.49 14.678.495 14.678 1.252-.016 14.24 8.943 14.24 8.943c-.237 1.066-.996 2.63-.972 2.654l8.508-1.256zm7.228 7.181C22.747 24.016 9.76 15.057 9.76 15.057c.332-1.066 1.02-2.654 1.02-2.607L2.27 13.66l5.451 8.2.83-2.702c7.441 4.669 12.49.119 12.49.119 4.597-3.84 2.464-9.954 2.464-9.954z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKashflowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'E5426E');
  }
}
