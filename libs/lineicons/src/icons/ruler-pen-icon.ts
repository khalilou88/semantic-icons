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
  selector: 'svg[si-ruler-pen-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M3.75 5.5C3.75 4.25736 4.75736 3.25 6 3.25H10.5851C11.8278 3.25 12.8351 4.25736 12.8351 5.5V18.4978C12.8351 19.7404 11.8278 20.7478 10.5851 20.7478H6C4.75736 20.7478 3.75 19.7404 3.75 18.4978V5.5ZM6 4.75C5.58579 4.75 5.25 5.08579 5.25 5.5V6.44922H8.23863C8.65284 6.44922 8.98863 6.78501 8.98863 7.19922C8.98863 7.61343 8.65284 7.94922 8.23863 7.94922H5.25V9.64844H8.23863C8.65284 9.64844 8.98863 9.98422 8.98863 10.3984C8.98863 10.8127 8.65284 11.1484 8.23863 11.1484H5.25V12.8477H8.23863C8.65284 12.8477 8.98863 13.1834 8.98863 13.5977C8.98863 14.0119 8.65284 14.3477 8.23863 14.3477H5.25V16.0469H8.23863C8.65284 16.0469 8.98863 16.3827 8.98863 16.7969C8.98863 17.2111 8.65284 17.5469 8.23863 17.5469H5.25V18.4978C5.25 18.912 5.58579 19.2478 6 19.2478H10.5851C10.9993 19.2478 11.3351 18.912 11.3351 18.4978L11.3351 5.5C11.3351 5.08579 10.9993 4.75 10.5851 4.75L6 4.75Z"
      fill="#323544"
    />
    <svg:path
      d="M14.335 16.5814C14.335 16.9901 14.4463 17.391 14.6569 17.7412L15.8641 19.7478C16.7385 21.2013 18.8457 21.2013 19.7201 19.7478L20.9272 17.7412C21.1379 17.391 21.2492 16.9901 21.2492 16.5814V5.5C21.2492 4.25736 20.2418 3.25 18.9992 3.25H16.585C15.3423 3.25 14.335 4.25736 14.335 5.5V16.5814ZM18.9992 4.75C19.4134 4.75 19.7492 5.08579 19.7492 5.5V7.19922H15.835V5.5C15.835 5.08579 16.1707 4.75 16.585 4.75L18.9992 4.75ZM19.7492 8.69922V16.5814C19.7492 16.7176 19.7121 16.8513 19.6419 16.968L18.4347 18.9746C18.1433 19.4591 17.4409 19.4591 17.1494 18.9746L15.9423 16.968C15.8721 16.8513 15.835 16.7176 15.835 16.5814V8.69922H19.7492Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRulerPenIcon implements OnInit {
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
