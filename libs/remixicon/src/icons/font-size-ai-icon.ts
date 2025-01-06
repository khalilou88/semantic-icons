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
  selector: 'svg[si-font-size-ai-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.4668 8.69379L19.7134 8.12811C20.1529 7.11947 20.9445 6.31641 21.9323 5.87708L22.6919 5.53922C23.1027 5.35653 23.1027 4.75881 22.6919 4.57612L21.9748 4.25714C20.9616 3.80651 20.1558 2.97373 19.7238 1.93083L19.4706 1.31953C19.2942 0.893489 18.7058 0.893489 18.5293 1.31953L18.2761 1.93083C17.8442 2.97373 17.0384 3.80651 16.0252 4.25714L15.308 4.57612C14.8973 4.75881 14.8973 5.35653 15.308 5.53922L16.0677 5.87708C17.0555 6.31641 17.8471 7.11947 18.2866 8.12811L18.5331 8.69379C18.7136 9.10792 19.2864 9.10792 19.4668 8.69379ZM4.75416 15H11.246L13.246 20H15.4001L9.0001 4H7.0001L0.600098 20H2.75416L4.75416 15ZM8.0001 6.88516L10.446 13H5.55416L8.0001 6.88516ZM21.0001 12V12.5351C20.4118 12.1948 19.7287 12 19.0001 12C16.791 12 15.0001 13.7909 15.0001 16C15.0001 18.2091 16.791 20 19.0001 20C19.7287 20 20.4118 19.8052 21.0001 19.4649V20H23.0001V12H21.0001ZM21.0001 16C21.0001 17.1046 20.1047 18 19.0001 18C17.8955 18 17.0001 17.1046 17.0001 16C17.0001 14.8954 17.8955 14 19.0001 14C20.1047 14 21.0001 14.8954 21.0001 16Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFontSizeAiIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
