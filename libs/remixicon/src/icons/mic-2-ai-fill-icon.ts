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
  selector: 'svg[si-mic-2-ai-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.4668 7.69379L20.7134 7.12811C21.1529 6.11947 21.9445 5.31641 22.9323 4.87708L23.6919 4.53922C24.1027 4.35653 24.1027 3.75881 23.6919 3.57612L22.9748 3.25714C21.9616 2.80651 21.1558 1.97373 20.7238 0.930828L20.4706 0.319534C20.2942 -0.106511 19.7058 -0.106511 19.5293 0.319534L19.2761 0.930828C18.8442 1.97373 18.0384 2.80651 17.0252 3.25714L16.308 3.57612C15.8973 3.75881 15.8973 4.35653 16.308 4.53922L17.0677 4.87708C18.0555 5.31641 18.8471 6.11947 19.2866 7.12811L19.5331 7.69379C19.7136 8.10792 20.2864 8.10792 20.4668 7.69379ZM14.3869 5.33879C14.661 5.77254 15.0357 6.09305 15.5111 6.30032L16.0764 6.54679C16.4567 6.71256 16.7646 6.94544 17.0001 7.24543V12C17.0001 14.7614 14.7615 17 12.0001 17C9.23865 17 7.00008 14.7614 7.00008 12V6C7.00008 3.23858 9.23865 1 12.0001 1C13.1241 1 14.1615 1.37089 14.9965 1.99697C14.7564 2.17669 14.5532 2.39808 14.3869 2.66114C14.129 3.06938 14 3.51566 14 3.99997C14 4.48428 14.129 4.93056 14.3869 5.33879ZM2.19238 13.9615L4.15392 13.5692C4.88321 17.2361 8.11888 20 12.0001 20C15.8813 20 19.1169 17.2361 19.8462 13.5692L21.8078 13.9615C20.8961 18.5452 16.8516 22 12.0001 22C7.14858 22 3.104 18.5452 2.19238 13.9615Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMic2AiFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
