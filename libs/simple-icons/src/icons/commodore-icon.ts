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
  selector: 'svg[si-commodore-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Commodore</title>
    <svg:path
      d="M11.202.798C5.016.798 0 5.814 0 12s5.016 11.202 11.202 11.202c1.094 0 2.153-.157 3.154-.45v-5.335a6.27 6.27 0 1 1 0-10.839v-5.33c-1-.293-2.057-.45-3.154-.45Zm3.375 6.343v4.304h5.27L24 7.14Zm-.037 5.377v4.304h9.423l-4.156-4.304z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCommodoreIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}