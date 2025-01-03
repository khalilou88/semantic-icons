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
  selector: 'svg[si-shuffle-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M18.9699 3.71967C19.2628 3.42678 19.7376 3.42678 20.0305 3.71967L22.2804 5.96957C22.5733 6.26246 22.5733 6.73733 22.2804 7.03023L20.0303 9.28033C19.7374 9.57322 19.2626 9.57322 18.9697 9.28033C18.6768 8.98744 18.6768 8.51256 18.9697 8.21967L19.9393 7.25L17.1865 7.25C16.9685 7.25 16.7614 7.34482 16.6189 7.50979L12.741 12L16.6189 16.4902C16.7614 16.6552 16.9685 16.75 17.1865 16.75H19.9395L18.9699 15.7803C18.677 15.4874 18.677 15.0126 18.9699 14.7197C19.2628 14.4268 19.7376 14.4268 20.0305 14.7197L22.2804 16.9696C22.5733 17.2625 22.5733 17.7373 22.2804 18.0302L20.0303 20.2803C19.7374 20.5732 19.2626 20.5732 18.9697 20.2803C18.6768 19.9874 18.6768 19.5126 18.9697 19.2197L19.9393 18.25H17.1865C16.5326 18.25 15.9111 17.9655 15.4837 17.4706L11.75 13.1475L8.01634 17.4706C7.58894 17.9655 6.96738 18.25 6.31349 18.25H3.25C2.83579 18.25 2.5 17.9142 2.5 17.5C2.5 17.0858 2.83579 16.75 3.25 16.75H6.31349C6.53145 16.75 6.73864 16.6552 6.8811 16.4902L10.759 12L6.8811 7.50979C6.73864 7.34482 6.53145 7.25 6.31349 7.25H3.25C2.83579 7.25 2.5 6.91421 2.5 6.5C2.5 6.08579 2.83579 5.75 3.25 5.75H6.31349C6.96738 5.75 7.58894 6.03447 8.01634 6.52936L11.75 10.8525L15.4837 6.52936C15.9111 6.03447 16.5326 5.75 17.1865 5.75L19.9395 5.75L18.9699 4.78033C18.677 4.48744 18.677 4.01256 18.9699 3.71967Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShuffleIcon implements OnInit {
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