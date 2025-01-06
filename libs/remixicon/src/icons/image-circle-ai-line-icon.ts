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
  selector: 'svg[si-image-circle-ai-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.893489 19.7058 0.893489 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM12 4C7.58172 4 4 7.58172 4 12C4 14.4636 5.11358 16.6671 6.86484 18.1346L14.2925 10.707C14.683 10.3164 15.3162 10.3164 15.7067 10.707L19.5761 14.5764C19.5773 14.5729 19.5785 14.5693 19.5797 14.5658C19.8522 13.7604 20 12.8975 20 12C20 11.6765 19.9809 11.3579 19.9437 11.0452L21.9298 10.8094C21.9762 11.2002 22 11.5975 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.8614 2 13.6987 2.10914 14.4983 2.31487L14 4.25179C13.3618 4.0876 12.6919 4 12 4ZM10.813 19.9125C11.2 19.9701 11.5962 19.9998 11.9996 19.9998C14.7613 19.9998 17.1992 18.6003 18.6379 16.4666L14.9996 12.8283L8.58927 19.2386L8.59334 19.2405C9.28476 19.5664 10.0304 19.7961 10.813 19.9125ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiImageCircleAiLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
