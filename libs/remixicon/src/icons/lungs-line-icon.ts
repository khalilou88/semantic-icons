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
  selector: 'svg[si-lungs-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22.0013 17C22 21 22 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.6216 12.9834 14.0822 12.9746 13.4495L14.9976 14.6186L15.0013 15C15.0013 17.7759 15.8173 19 18.0012 19C19.1415 19 19.6118 18.993 19.9637 18.9625C19.9943 18.6106 20.0012 18.1403 20.0012 17C20.0012 13.7947 19.298 10.9675 18.1657 9.09922C17.3283 7.71769 16.5533 7.2575 16.1337 7.39737C15.8411 7.49489 15.5286 8.04672 15.3027 9.02034L13.5124 7.98683C13.882 6.79047 14.4945 5.83557 15.5013 5.5C18.5007 4.50018 22.0036 9.5 22.0013 17ZM8.5 5.5C9.50665 5.83555 10.1192 6.79037 10.4888 7.98665L8.69853 9.02034C8.47269 8.04672 8.16013 7.49489 7.86754 7.39737C7.44794 7.2575 6.67292 7.71769 5.83557 9.09922C4.70322 10.9675 4 13.7947 4 17C4 18.1403 4.00698 18.6106 4.0375 18.9625C4.3894 18.993 4.85973 19 6 19C8.18395 19 9 17.7759 9 15L9.00367 14.6176L11.0266 13.4502C11.0179 14.0826 11 14.6218 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM13 2L12.9998 9.422L17.6962 12.134L16.6962 13.866L11.9998 11.155L7.30385 13.866L6.30385 12.134L10.9998 9.422L11 2H13Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiLungsLineIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
