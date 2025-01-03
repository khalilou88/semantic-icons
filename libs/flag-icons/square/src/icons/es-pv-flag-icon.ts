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
  selector: 'svg[si-es-pv-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#d52b1e" d="M0 0h512v512H0z" />
    <svg:path
      fill="#009b48"
      d="M0 0h42.5l106.7 106.7L256 213.4 469.5 0H512v42.5L405.3 149.2 298.6 256 512 469.5V512h-42.5L362.8 405.3 256 298.6 42.5 512H0v-42.5l106.7-106.7L213.4 256 0 42.5V21.3z"
    />
    <svg:path
      fill="#fff"
      d="M221.9 0h68.2v221.9H512v68.2H290.1V512h-68.2V290.1H0v-68.2h221.9v-111z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiEsPvFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}
