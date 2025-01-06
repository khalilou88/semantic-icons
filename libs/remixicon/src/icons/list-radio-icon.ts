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
  selector: 'svg[si-list-radio-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.5 7C8.5 5.89543 7.60457 5 6.5 5C5.39543 5 4.5 5.89543 4.5 7C4.5 8.10457 5.39543 9 6.5 9C7.60457 9 8.5 8.10457 8.5 7ZM10.5 7C10.5 9.20914 8.70914 11 6.5 11C4.29086 11 2.5 9.20914 2.5 7C2.5 4.79086 4.29086 3 6.5 3C8.70914 3 10.5 4.79086 10.5 7ZM21 4H13V6H21V4ZM21 11H13V13H21V11ZM21 18H13V20H21V18ZM6.5 19C5.39543 19 4.5 18.1046 4.5 17C4.5 15.8954 5.39543 15 6.5 15C7.60457 15 8.5 15.8954 8.5 17C8.5 18.1046 7.60457 19 6.5 19ZM6.5 21C8.70914 21 10.5 19.2091 10.5 17C10.5 14.7909 8.70914 13 6.5 13C4.29086 13 2.5 14.7909 2.5 17C2.5 19.2091 4.29086 21 6.5 21ZM6.5 8C7.05228 8 7.5 7.55228 7.5 7C7.5 6.44772 7.05228 6 6.5 6C5.94772 6 5.5 6.44772 5.5 7C5.5 7.55228 5.94772 8 6.5 8Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiListRadioIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
