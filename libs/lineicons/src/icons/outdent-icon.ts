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
  selector: 'svg[si-outdent-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.75 4C3.75 3.58579 4.08579 3.25 4.5 3.25H20.5C20.9142 3.25 21.25 3.58579 21.25 4C21.25 4.41421 20.9142 4.75 20.5 4.75L4.5 4.75C4.08579 4.75 3.75 4.41421 3.75 4Z"
      fill="#323544"
    />
    <svg:path
      d="M12.4644 9.33398C12.4644 8.91977 12.8001 8.58398 13.2144 8.58398H20.5002C20.9145 8.58398 21.2502 8.91977 21.2502 9.33398C21.2502 9.7482 20.9145 10.084 20.5002 10.084H13.2144C12.8001 10.084 12.4644 9.7482 12.4644 9.33398Z"
      fill="#323544"
    />
    <svg:path
      d="M13.2144 13.916C12.8001 13.916 12.4644 14.2518 12.4644 14.666C12.4644 15.0802 12.8001 15.416 13.2144 15.416L20.5002 15.416C20.9145 15.416 21.2502 15.0802 21.2502 14.666C21.2502 14.2518 20.9145 13.916 20.5002 13.916L13.2144 13.916Z"
      fill="#323544"
    />
    <svg:path
      d="M3.75 20C3.75 19.5858 4.08579 19.25 4.5 19.25H20.5C20.9142 19.25 21.25 19.5858 21.25 20C21.25 20.4142 20.9142 20.75 20.5 20.75H4.5C4.08579 20.75 3.75 20.4142 3.75 20Z"
      fill="#323544"
    />
    <svg:path
      d="M9.44955 9.30822L9.4638 9.31666L5.25133 11.9923L9.44955 9.30822Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.63556 8.04771C9.64291 7.40366 10.9642 8.12712 10.9642 9.32277V14.6772C10.9642 15.8729 9.64291 16.5963 8.63556 15.9523L4.44817 13.2751C3.51728 12.6799 3.51728 11.3201 4.44817 10.7249L8.63556 8.04771ZM9.46415 9.32277C9.46415 9.31967 9.46394 9.31768 9.4638 9.31666C9.46301 9.31575 9.46089 9.31305 9.4572 9.31103C9.4535 9.309 9.45075 9.3084 9.44955 9.30822C9.44861 9.30865 9.44617 9.30982 9.44356 9.31149L5.25617 11.9887C5.25417 11.99 5.25293 11.991 5.25226 11.9915L5.25133 11.9923C5.25106 11.9929 5.25 11.9956 5.25 12C5.25 12.0048 5.25122 12.0075 5.25133 12.0077L5.25226 12.0085L5.25435 12.0101L5.25618 12.0113L9.44356 14.6885C9.44617 14.6902 9.44796 14.6911 9.4489 14.6915C9.45009 14.6913 9.4535 14.691 9.4572 14.689C9.46089 14.687 9.46289 14.685 9.46368 14.684C9.46375 14.6836 9.46395 14.6822 9.46402 14.6813C9.46409 14.6802 9.46415 14.6789 9.46415 14.6772V9.32277Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiOutdentIcon implements OnInit {
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
