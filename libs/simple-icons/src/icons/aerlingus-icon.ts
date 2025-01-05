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
  selector: 'svg[si-aerlingus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Aer Lingus</svg:title>
    <svg:path
      d="M23.857 13.511c-.48 1.545-2.081 2.995-4.002 3.296.31.48.452 1.074.377 1.733-.208 1.789-1.921 3.23-3.758 3.249-1.243.009-2.928-.528-4.115-2.402-1.064-1.666-1.215-4.313-1.14-5.113-1.299 1.328-2.109 2.618-2.495 3.512-.866 2.025-1.196 4.492-1.177 5.65 0 0-.16.151-.31.18-.48-.085-.895-.264-1.206-.537-.376-.34-.461-.66-.461-.66.574-2.872 1.488-4.66 2.853-6.704 1.836-2.76 4.67-4.464 8.032-5.49 2.43-.744 4.954-.904 6.686.565.933.772.989 1.883.716 2.721zM9.544 11.986c-.575.96-2.147 2.505-3.39 3.305-2.59 1.657-4.454 1.77-5.387 1.177a1.451 1.451 0 0 1-.292-.235c-.725-.763-.602-2.119.245-3.23.415-.546.951-.932 1.47-1.111-.406-.189-.679-.584-.735-1.14-.113-1.11.725-2.57 1.883-3.164 1.017-.518 3.211-1.036 4.821 1.366.631.932 1.196 2.26 1.385 3.032zM20.184 1.89c-.14-1.384-1.62-1.893-3.248-1.196-.772.33-1.45.885-1.93 1.516.075-.63-.104-1.186-.556-1.516-.895-.65-2.524-.17-3.635 1.036-.386.424-1.648 1.95-1.714 4.19-.028 1.083.452 3.485 2.034 5.142 4.219-1.591 6.488-4.03 7.354-5.038.999-1.168 1.422-2.194 1.601-2.947.132-.594.113-1.017.094-1.187z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAerlingusIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '006272');
  }
}
