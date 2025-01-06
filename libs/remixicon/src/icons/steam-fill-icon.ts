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
  selector: 'svg[si-steam-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12.0052 2C6.75435 2 2.44852 6.05 2.04102 11.1975L7.40102 13.4125C7.85518 13.1033 8.40352 12.9208 8.99435 12.9208C9.04685 12.9208 9.09852 12.9242 9.15102 12.9258L11.5352 9.47417V9.425C11.5352 7.34583 13.2252 5.655 15.3052 5.655C17.3835 5.655 19.0752 7.3475 19.0752 9.4275C19.0752 11.5075 17.3835 13.1983 15.3052 13.1983H15.2177L11.821 15.6242C11.821 15.6675 11.8243 15.7117 11.8243 15.7567C11.8243 17.3192 10.5618 18.5867 8.99935 18.5867C7.63685 18.5867 6.48602 17.6092 6.22352 16.3142L2.38602 14.725C3.57435 18.9225 7.42768 22 12.0052 22C17.5277 22 22.0043 17.5225 22.0043 12C22.0043 6.4775 17.5268 2 12.0052 2ZM7.07852 16.6667C7.29685 17.1192 7.67352 17.4992 8.17352 17.7083C9.25435 18.1575 10.501 17.645 10.9502 16.5625C11.1693 16.0375 11.1702 15.4633 10.9543 14.9383C10.7385 14.4133 10.3293 14.0042 9.80685 13.7858C9.28685 13.5692 8.73185 13.5783 8.24185 13.7608L9.51102 14.2858C10.3077 14.6192 10.6852 15.5358 10.3518 16.3317C10.021 17.1292 9.10435 17.5067 8.30685 17.175L7.07852 16.6667ZM17.8185 9.4225C17.8185 8.0375 16.691 6.91 15.306 6.91C13.9185 6.91 12.7935 8.0375 12.7935 9.4225C12.7935 10.81 13.9185 11.935 15.306 11.935C16.6918 11.935 17.8185 10.81 17.8185 9.4225ZM15.3118 7.53C16.3527 7.53 17.2002 8.375 17.2002 9.41833C17.2002 10.4608 16.3527 11.3058 15.3118 11.3058C14.2677 11.3058 13.4243 10.4608 13.4243 9.41833C13.4243 8.375 14.2685 7.53 15.3118 7.53Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSteamFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
