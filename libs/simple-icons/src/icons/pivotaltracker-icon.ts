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
  selector: 'svg[si-pivotaltracker-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>Pivotal Tracker</title>
    <svg:path
      d="M12.002 0c-6.617 0-12 5.382-12 11.998 0 6.618 5.384 12.002 12 12.002S24 18.616 24 11.998C24 5.382 18.619 0 12.002 0zm0 2.43a9.568 9.568 0 0 1 9.568 9.568c0 5.286-4.283 9.572-9.568 9.572-5.285 0-9.57-4.286-9.57-9.572 0-5.285 4.285-9.568 9.57-9.568zm-.135 1.31L8.822 5.498V5.5l2.68 4.64c.425-.113.888-.08 1.31.118l1.41-2.442-2.355-4.076zm4.17 2.256l-2.68 4.643c.325.324.52.749.557 1.195h2.816l2.356-4.076-3.049-1.762zM4.781 7.984v3.55h.002v-.03h5.36a1.904 1.904 0 0 1 .756-1.08L9.49 7.984H4.781zm2.487 4.182L4.912 16.24l3.049 1.762 2.682-4.645a1.929 1.929 0 0 1-.557-1.191H7.268zm6.59.33a1.904 1.904 0 0 1-.756 1.078l1.41 2.442h4.707v-3.52h-5.362zm-2.67 1.244l-1.41 2.442 2.353 4.076 3.049-1.76-2.68-4.64c-.425.114-.89.08-1.313-.118z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPivotaltrackerIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}