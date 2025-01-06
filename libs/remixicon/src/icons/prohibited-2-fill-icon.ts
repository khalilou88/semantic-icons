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
  selector: 'svg[si-prohibited-2-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.25705 18.3287C2.84636 16.6049 2 14.4013 2 12C2 6.47715 6.47715 2 12 2C14.4013 2 16.6049 2.84637 18.3287 4.25705L4.25705 18.3287ZM19.7429 5.67127C21.1536 7.39514 22 9.59873 22 12C22 17.5228 17.5228 22 12 22C9.59873 22 7.39514 21.1536 5.67127 19.7429L19.7429 5.67127Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiProhibited2FillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
