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
  selector: 'svg[si-money-off-csred-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.53 7.43c.42-.31.93-.47 1.54-.47s1.11.16 1.5.49c.39.32.65.7.79 1.12l1.89-.8c-.24-.71-.71-1.35-1.4-1.92-.5-.4-1.12-.65-1.85-.77V3h-2v2.11c-.41.08-.79.21-1.14.39-.35.18-.64.39-.9.63l1.43 1.43c.04-.04.09-.09.14-.13zM2.81 2.81 1.39 4.22l12.35 12.35c-.43.28-.95.43-1.55.43-.71 0-1.32-.23-1.83-.7-.5-.47-.86-1.07-1.06-1.81l-1.98.8c.34 1.17.95 2.08 1.83 2.73.57.42 1.19.68 1.85.83V21h2v-2.08c.44-.07.87-.17 1.29-.35.34-.14.64-.32.92-.53l4.57 4.57 1.41-1.41L2.81 2.81z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMoneyOffCsredIcon implements OnInit {
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
