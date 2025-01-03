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
  selector: 'svg[si-target-user-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.3838 9.86042C10.3838 8.96777 11.1074 8.24414 12.0001 8.24414C12.8927 8.24414 13.6163 8.96777 13.6163 9.86042C13.6163 10.7531 12.8927 11.4767 12.0001 11.4767C11.1074 11.4767 10.3838 10.7531 10.3838 9.86042Z"
      fill="#323544"
    />
    <svg:path
      d="M10.7862 12.0869C9.55 12.0869 8.54785 13.0891 8.54785 14.3253V15.2555C8.54785 15.6697 8.88364 16.0055 9.29785 16.0055H14.7029C15.1171 16.0055 15.4529 15.6697 15.4529 15.2555V14.3253C15.4529 13.0891 14.4508 12.0869 13.2145 12.0869H10.7862ZM10.0479 14.3253C10.0479 13.9175 10.3784 13.5869 10.7862 13.5869H13.2145C13.6223 13.5869 13.9529 13.9175 13.9529 14.3253V14.5055H10.0479V14.3253Z"
      fill="#323544"
    />
    <svg:path
      d="M12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V3.28169C7.01581 3.64113 3.64113 7.01581 3.28169 11.25H2C1.58579 11.25 1.25 11.5858 1.25 12C1.25 12.4142 1.58579 12.75 2 12.75H3.28169C3.64113 16.9842 7.01581 20.3589 11.25 20.7183V22C11.25 22.4142 11.5858 22.75 12 22.75C12.4142 22.75 12.75 22.4142 12.75 22V20.7183C16.9842 20.3589 20.3589 16.9842 20.7183 12.75H22C22.4142 12.75 22.75 12.4142 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25H20.7183C20.3589 7.01581 16.9842 3.64113 12.75 3.28169V2ZM5.25 12.75C5.66421 12.75 6 12.4142 6 12C6 11.5858 5.66421 11.25 5.25 11.25H4.78832C5.13828 7.84488 7.84488 5.13828 11.25 4.78832V5.25C11.25 5.66421 11.5858 6 12 6C12.4142 6 12.75 5.66421 12.75 5.25V4.78832C16.1551 5.13828 18.8617 7.84488 19.2117 11.25H18.75C18.3358 11.25 18 11.5858 18 12C18 12.4142 18.3358 12.75 18.75 12.75H19.2117C18.8617 16.1551 16.1551 18.8617 12.75 19.2117V18.75C12.75 18.3358 12.4142 18 12 18C11.5858 18 11.25 18.3358 11.25 18.75V19.2117C7.84488 18.8617 5.13828 16.1551 4.78832 12.75H5.25Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTargetUserIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}