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
  selector: 'svg[si-phone-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.52 17.35C11.39 19.83 7.36 21.22 3 20.97v-5.51l5.27-.61 2.52 2.52c.81-.41 1.58-.9 2.3-1.45L1.39 4.22l1.42-1.41L21.19 21.2l-1.41 1.41-5.26-5.26zm1.39-4.24c.56-.73 1.05-1.51 1.47-2.33l-2.53-2.53.61-5.25h5.51c.25 4.37-1.15 8.4-3.63 11.54l-1.43-1.43z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiPhoneDisabledIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
