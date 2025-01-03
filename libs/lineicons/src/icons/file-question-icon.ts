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
  selector: 'svg[si-file-question-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.9453 20.5C11.3327 21.0667 11.8027 21.5725 12.338 22H6.75C5.50736 22 4.5 20.9926 4.5 19.75V9.62105C4.5 9.02455 4.73686 8.45247 5.15851 8.03055L10.5262 2.65951C10.9482 2.23725 11.5207 2 12.1177 2H17.25C18.4926 2 19.5 3.00736 19.5 4.25V10.3782C19.0266 10.1599 18.5241 9.99391 18 9.88753V4.25C18 3.83579 17.6642 3.5 17.25 3.5H12.248L12.2509 7.4984C12.2518 8.74166 11.2442 9.75 10.0009 9.75H6V19.75C6 20.1642 6.33579 20.5 6.75 20.5H10.9453ZM10.7488 4.55876L7.05986 8.25H10.0009C10.4153 8.25 10.7512 7.91389 10.7509 7.49947L10.7488 4.55876Z"
      fill="#323544"
    />
    <svg:path
      d="M14.916 14.5254C14.916 13.5816 15.6812 12.8164 16.625 12.8164C17.5689 12.8164 18.334 13.5816 18.334 14.5254C18.334 15.1044 18.0468 15.6165 17.6036 15.9268C17.2461 16.1771 16.8289 16.5014 16.4972 16.902C16.1627 17.306 15.875 17.837 15.875 18.4844C15.875 18.8986 16.2108 19.2344 16.625 19.2344C17.0392 19.2344 17.375 18.8986 17.375 18.4844C17.375 18.3034 17.4524 18.1004 17.6526 17.8586C17.8556 17.6134 18.1428 17.3804 18.4639 17.1555C19.2908 16.5766 19.834 15.6145 19.834 14.5254C19.834 12.7531 18.3973 11.3164 16.625 11.3164C14.8527 11.3164 13.416 12.7531 13.416 14.5254C13.416 14.9396 13.7518 15.2754 14.166 15.2754C14.5802 15.2754 14.916 14.9396 14.916 14.5254Z"
      fill="#323544"
    />
    <svg:path
      d="M16.624 20.4326C16.2098 20.4326 15.874 20.7684 15.874 21.1826C15.874 21.5968 16.2098 21.9326 16.624 21.9326C17.0382 21.9326 17.375 21.5968 17.375 21.1826C17.375 20.7684 17.0382 20.4326 16.624 20.4326Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiFileQuestionIcon implements OnInit {
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
