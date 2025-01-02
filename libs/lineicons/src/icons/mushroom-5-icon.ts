import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-mushroom-5-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M8.51938 9.05078C7.82903 9.05078 7.26938 9.61043 7.26938 10.3008C7.26938 10.9911 7.82903 11.5508 8.51938 11.5508C9.20974 11.5508 9.76948 10.9911 9.76948 10.3008C9.76948 9.61043 9.20974 9.05078 8.51938 9.05078Z"
      fill="#323544"
    />
    <svg:path
      d="M14.9377 11.2656C14.9377 10.7686 15.3407 10.3656 15.8377 10.3656C16.3348 10.3656 16.7378 10.7686 16.7378 11.2656C16.7378 11.7627 16.3349 12.1656 15.8378 12.1656C15.3408 12.1656 14.9377 11.7627 14.9377 11.2656Z"
      fill="#323544"
    />
    <svg:path
      d="M13.4598 5.79688C12.4933 5.79688 11.7098 6.58038 11.7098 7.54688C11.7098 8.51337 12.4933 9.29688 13.4598 9.29688C14.4263 9.29688 15.2099 8.51337 15.2099 7.54688C15.2099 6.58038 14.4263 5.79688 13.4598 5.79688Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.42906 12.9823C2.41634 7.78887 6.46877 2.5 12.0234 2.5C17.5781 2.5 21.6305 7.78887 20.6178 12.9823C20.4147 14.0238 19.4677 14.6223 18.534 14.6223H14.6096L15.0876 19.0049C15.2327 20.3362 14.19 21.4988 12.8508 21.4988H11.1958C9.85656 21.4988 8.81384 20.3362 8.95901 19.0049L9.43693 14.6223H5.51285C4.57915 14.6223 3.63215 14.0238 3.42906 12.9823ZM13.731 13.1223C13.7601 13.1206 13.7889 13.1206 13.8173 13.1223H18.534C18.8812 13.1223 19.1035 12.9109 19.1455 12.6952C19.9854 8.38835 16.5945 4 12.0234 4C7.45232 4 4.06149 8.38835 4.90133 12.6952C4.94339 12.9109 5.1657 13.1223 5.51285 13.1223H10.2293C10.2577 13.1206 10.2865 13.1206 10.3156 13.1223H13.731ZM13.1008 14.6223H10.9458L10.4502 19.1675C10.4018 19.6112 10.7494 19.9988 11.1958 19.9988H12.8508C13.2972 19.9988 13.6448 19.6112 13.5964 19.1675L13.1008 14.6223Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMushroom5Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '25');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 25 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
