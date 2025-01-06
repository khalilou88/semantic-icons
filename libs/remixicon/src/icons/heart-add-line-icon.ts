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
  selector: 'svg[si-heart-add-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.0001 14V17H22.0001V19H18.9991L19.0001 22H17.0001L16.9991 19H14.0001V17H17.0001V14H19.0001ZM20.2426 4.75748C22.505 7.02453 22.5829 10.6361 20.4795 12.9921L19.06 11.5741C20.3901 10.05 20.3201 7.66 18.827 6.17022C17.3244 4.67104 14.9076 4.60713 13.337 6.017L12.0019 7.21536L10.6661 6.01793C9.09098 4.60609 6.67506 4.66821 5.17157 6.1717C3.68183 7.66143 3.60704 10.0474 4.97993 11.6233L13.412 20.0691L11.9999 21.4851L3.52138 12.9931C1.41705 10.6371 1.49571 7.01913 3.75736 4.75748C6.02157 2.49327 9.64519 2.41699 12.001 4.52865C14.35 2.42012 17.98 2.49012 20.2426 4.75748Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiHeartAddLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
