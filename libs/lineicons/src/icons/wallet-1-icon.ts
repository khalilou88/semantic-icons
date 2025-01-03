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
  selector: 'svg[si-wallet-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.75 3.25C4.50736 3.25 3.5 4.25736 3.5 5.5V18.5C3.5 19.7426 4.50736 20.75 5.75 20.75H18.75C19.9926 20.75 21 19.7426 21 18.5V9.5C21 8.25736 19.9926 7.25 18.75 7.25H18.5V5.5C18.5 4.25736 17.4926 3.25 16.25 3.25H5.75ZM17 7.25H5V5.5C5 5.08579 5.33579 4.75 5.75 4.75H16.25C16.6642 4.75 17 5.08579 17 5.5V7.25ZM5 8.75H18.75C19.1642 8.75 19.5 9.08579 19.5 9.5V18.5C19.5 18.9142 19.1642 19.25 18.75 19.25H5.75C5.33579 19.25 5 18.9142 5 18.5V8.75Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiWallet1Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
