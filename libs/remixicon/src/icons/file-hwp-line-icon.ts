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
  selector: 'svg[si-file-hwp-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M16 2L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44749 2 3.9985 2H16ZM16 8.66667H8V7.33333L11.333 7.333L11.3333 6H12.6667L12.666 7.333H14.999L15 4H5V20H19V8L16 7.999V8.66667ZM9.33333 14.6667L9.333 16.666L16 16.6667V18H8V14.6667H9.33333ZM12 14.3333C12.5523 14.3333 13 14.781 13 15.3333C13 15.8856 12.5523 16.3333 12 16.3333C11.4477 16.3333 11 15.8856 11 15.3333C11 14.781 11.4477 14.3333 12 14.3333ZM12 9C13.3807 9 14.5 10.1193 14.5 11.5C14.5 12.8807 13.3807 14 12 14C10.6193 14 9.5 12.8807 9.5 11.5C9.5 10.1193 10.6193 9 12 9ZM12 10.3333C11.3557 10.3333 10.8333 10.8557 10.8333 11.5C10.8333 12.1443 11.3557 12.6667 12 12.6667C12.6443 12.6667 13.1667 12.1443 13.1667 11.5C13.1667 10.8557 12.6443 10.3333 12 10.3333Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileHwpLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
