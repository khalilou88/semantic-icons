import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-brand-messenger-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M18.894 5.446c3.667 3.127 4.168 8.238 1.152 11.897c-2.842 3.447 -7.965 4.583 -12.231 2.805l-.233 -.101l-4.374 .931l-.033 .005l-.042 .008l-.031 .002l-.01 .003h-.018l-.052 .004l-.024 -.001l-.02 .001l-.033 -.003h-.035l-.022 -.004l-.022 -.002l-.035 -.007l-.034 -.005l-.016 -.004l-.024 -.005l-.049 -.016l-.024 -.005l-.011 -.005l-.022 -.007l-.045 -.02l-.03 -.012l-.011 -.006l-.014 -.006l-.031 -.018l-.045 -.024l-.016 -.011l-.037 -.026l-.04 -.027l-.015 -.013l-.043 -.04l-.025 -.02l-.062 -.07l-.013 -.013l-.011 -.014l-.027 -.04l-.026 -.035a1 1 0 0 1 -.054 -.095l-.006 -.013l-.019 -.045l-.02 -.042l-.004 -.016l-.004 -.01l-.011 -.04l-.013 -.04l-.002 -.014l-.005 -.019l-.005 -.033l-.008 -.042l-.002 -.031l-.003 -.026l-.004 -.054l.001 -.036l.001 -.023l.002 -.053l.004 -.025v-.019l.008 -.036l.005 -.033l.004 -.017l.005 -.023l.018 -.06l.003 -.013l1.15 -3.45l-.022 -.037c-2.21 -3.747 -1.209 -8.392 2.411 -11.118l.23 -.168c3.898 -2.766 9.469 -2.54 13.073 .535m-2.062 5a1 1 0 0 0 -1.387 -.278l-2.318 1.544l-1.42 -1.42a1 1 0 0 0 -1.262 -.124l-3 2a1 1 0 0 0 -.277 1.387l.07 .093a1 1 0 0 0 1.317 .184l2.317 -1.545l1.42 1.42a1 1 0 0 0 1.263 .125l3 -2a1 1 0 0 0 .277 -1.387"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandMessengerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
  }
}
