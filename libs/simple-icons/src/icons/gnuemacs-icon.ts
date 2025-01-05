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
  selector: 'svg[si-gnuemacs-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>GNU Emacs</svg:title>
    <svg:path
      d="M12,24C5.448,24,0.118,18.617,0.118,12S5.448,0,12,0c6.552,0,11.882,5.383,11.882,12S18.552,24,12,24z M12,0.661 C5.813,0.661,0.779,5.748,0.779,12S5.813,23.339,12,23.339c6.187,0,11.221-5.086,11.221-11.339S18.187,0.661,12,0.661z M8.03,20.197 c0,0,0.978,0.069,2.236-0.042c0.51-0.045,2.444-0.235,3.891-0.552c0,0,1.764-0.377,2.707-0.725c0.987-0.364,1.524-0.673,1.766-1.11 c-0.011-0.09,0.074-0.408-0.381-0.599c-1.164-0.488-2.514-0.4-5.185-0.457c-2.962-0.102-3.948-0.598-4.472-0.997 c-0.503-0.405-0.25-1.526,1.907-2.513c1.086-0.526,5.345-1.496,5.345-1.496c-1.434-0.709-4.109-1.955-4.659-2.224 c-0.482-0.236-1.254-0.591-1.421-1.021c-0.19-0.413,0.448-0.768,0.804-0.87c1.147-0.331,2.766-0.536,4.24-0.56 c0.741-0.012,0.861-0.059,0.861-0.059c1.022-0.17,1.695-0.869,1.414-1.976c-0.252-1.13-1.579-1.795-2.84-1.565 c-1.188,0.217-4.05,1.048-4.05,1.048c3.539-0.031,4.131,0.028,4.395,0.398c0.156,0.218-0.071,0.518-1.015,0.672 c-1.027,0.168-3.163,0.37-3.163,0.37c-2.049,0.122-3.492,0.13-3.925,1.046C6.202,7.564,6.787,8.094,7.043,8.425 c1.082,1.204,2.646,1.853,3.652,2.331c0.379,0.18,1.49,0.52,1.49,0.52c-3.265-0.18-5.619,0.823-7.001,1.977 c-1.562,1.445-0.871,3.168,2.33,4.228c1.891,0.626,2.828,0.921,5.648,0.667c1.661-0.09,1.923-0.036,1.939,0.1 c0.023,0.192-1.845,0.669-2.355,0.816C11.448,19.438,8.047,20.193,8.03,20.197z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGnuemacsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', '#7F5AB6');
  }
}
