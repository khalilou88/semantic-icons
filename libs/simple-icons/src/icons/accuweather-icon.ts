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
  selector: 'svg[si-accuweather-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>AccuWeather</svg:title>
    <svg:path
      d="M6.74 6.772a7.436 7.436 0 0 1 10.519 0 7.432 7.432 0 0 1 0 10.515 7.436 7.436 0 0 1-10.52 0c-2.904-2.905-2.904-7.64 0-10.515M12 20.337c-4.59 0-8.338-3.747-8.338-8.337s3.748-8.308 8.338-8.308c4.591 0 8.31 3.748 8.31 8.308 0 4.619-3.719 8.337-8.31 8.337zm12-8.366L21.27 9.5l1.103-3.514-3.603-.784-.784-3.602-3.515 1.133L11.97.004l-2.47 2.73L5.986 1.63 5.2 5.231l-3.602.785 1.133 3.515L0 12.03l2.732 2.47-1.105 3.514 3.603.784.784 3.603 3.516-1.134 2.5 2.731 2.468-2.73 3.516 1.103.785-3.602 3.603-.813-1.134-3.515L24 11.97z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAccuweatherIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#FF6600');
  }
}
