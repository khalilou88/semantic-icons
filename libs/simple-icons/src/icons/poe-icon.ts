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
  selector: 'svg[si-poe-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>Poe</svg:title>
    <svg:path
      d="M24 12.513V8.36c0-.888-.717-1.608-1.603-1.615h-.013c-.498-.009-1.194-.123-1.688-.619-.44-.439-.584-1.172-.622-1.783l-.001.003c-.002-.014-.002-.03-.003-.044l-.001-.03a1.616 1.616 0 0 0-1.607-1.45H5.54a1.59 1.59 0 0 0-.164.008l-.055.009c-.034.004-.068.008-.102.015l-.069.017c-.028.008-.056.013-.083.022-.024.007-.045.015-.07.024-.026.01-.053.018-.08.03-.021.008-.042.02-.063.029-.027.013-.054.024-.08.038l-.059.034c-.025.015-.052.03-.077.047a.967.967 0 0 0-.061.045c-.021.015-.044.03-.065.05a1.21 1.21 0 0 0-.099.09c-.006.005-.013.01-.018.016l-.014.016a1.59 1.59 0 0 0-.094.102c-.017.02-.03.042-.046.062-.016.021-.033.042-.047.063l-.045.074-.037.062-.036.076a.682.682 0 0 0-.058.143l-.027.075-.02.074a.773.773 0 0 0-.018.078c-.006.03-.009.058-.013.088-.003.022-.008.045-.01.069-.003.022-.003.045-.004.068l-.002-.002c-.036.61-.182 1.345-.62 1.784-.496.495-1.191.61-1.69.618h-.012c-.05 0-.1.003-.147.007a1.27 1.27 0 0 0-.072.012c-.029.004-.057.007-.084.012l-.082.02-.072.018c-.026.009-.052.019-.079.027-.024.009-.048.016-.07.026-.024.01-.048.022-.072.034a.767.767 0 0 0-.072.033l-.068.04-.068.041a1.228 1.228 0 0 0-.072.054c-.018.014-.037.026-.053.04a1.627 1.627 0 0 0-.226.227c-.015.016-.027.036-.041.053a1.398 1.398 0 0 0-.054.074c-.016.022-.028.045-.041.067L.19 7.6c-.012.023-.022.047-.033.07l-.034.073c-.01.024-.017.046-.026.07-.01.027-.02.053-.027.08-.007.023-.012.047-.018.071l-.02.082-.012.084c-.003.024-.009.048-.01.072-.007.052-.01.106-.01.16v4.152c0 .888.717 1.609 1.603 1.616h.01c.5.008 1.196.123 1.69.618.43.43.577 1.143.618 1.746v4.13c0 .524.66.754.986.346l2.333-2.92h11.22c.861 0 1.563-.675 1.611-1.524l.001.003c.037-.61.183-1.344.622-1.783.495-.496 1.19-.61 1.689-.619h.012c.044 0 .088-.003.132-.007l.022-.001A1.613 1.613 0 0 0 24 12.513zm-3.85 1.69c-.502.503-1.215.613-1.717.619H5.566c-.501-.006-1.215-.114-1.717-.618-.408-.409-.565-1.117-.618-1.744V8.415c.052-.627.209-1.337.618-1.745.503-.503 1.216-.613 1.717-.619h12.867c.502.006 1.216.115 1.718.619.409.41.564 1.117.618 1.744v4.041c-.052.63-.209 1.339-.618 1.749zM8.424 7.99c-.892 0-1.615.723-1.615 1.615v1.616a1.615 1.615 0 1 0 3.23 0V9.604c0-.892-.723-1.615-1.615-1.615Zm7.154 0c-.893 0-1.616.723-1.616 1.615v1.616a1.615 1.615 0 1 0 3.231 0V9.604c0-.892-.723-1.615-1.615-1.615z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPoeIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
