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
  selector: 'svg[si-rewind-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 10.6667L21.2227 4.51823C21.4524 4.36506 21.7629 4.42714 21.9161 4.65691C21.9708 4.73904 22 4.83554 22 4.93426V19.0657C22 19.3419 21.7762 19.5657 21.5 19.5657C21.4013 19.5657 21.3048 19.5365 21.2227 19.4818L12 13.3333V19.0657C12 19.3419 11.7762 19.5657 11.5 19.5657C11.4013 19.5657 11.3048 19.5365 11.2227 19.4818L0.62407 12.416C0.394306 12.2628 0.332219 11.9524 0.485395 11.7226C0.522013 11.6677 0.569144 11.6206 0.62407 11.584L11.2227 4.51823C11.4524 4.36506 11.7629 4.42714 11.9161 4.65691C11.9708 4.73904 12 4.83554 12 4.93426V10.6667Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRewindFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
