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
  selector: 'svg[si-hierarchy-1-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.2736 3.75C10.2736 2.7835 11.0571 2 12.0236 2C12.9901 2 13.7737 2.7835 13.7737 3.75C13.7737 4.7165 12.9902 5.5 12.0237 5.5C11.0572 5.5 10.2736 4.7165 10.2736 3.75Z"
      fill="#323544"
    />
    <svg:path
      d="M10.5214 7.92722C10.1758 8.1822 9.91299 8.55497 9.71818 9.03302C9.56188 9.41661 9.1242 9.60086 8.74061 9.44455C8.35702 9.28824 8.17278 8.85057 8.32909 8.46698C8.59746 7.80838 9.00617 7.18115 9.63066 6.72029C10.2619 6.25443 11.0578 6 12.0236 6C12.9894 6 13.7853 6.25443 14.4166 6.72029C15.0411 7.18115 15.4498 7.80838 15.7182 8.46698C15.8745 8.85057 15.6902 9.28824 15.3067 9.44455C14.9231 9.60086 14.4854 9.41661 14.3291 9.03302C14.1343 8.55497 13.8714 8.1822 13.5259 7.92722C13.1872 7.67724 12.7147 7.5 12.0236 7.5C11.3326 7.5 10.8601 7.67724 10.5214 7.92722Z"
      fill="#323544"
    />
    <svg:path
      d="M5.21818 21.533C5.41299 21.055 5.67584 20.6822 6.02135 20.4272C6.36008 20.1772 6.83259 20 7.52364 20C8.21468 20 8.68719 20.1772 9.02592 20.4272C9.37143 20.6822 9.63428 21.055 9.82909 21.533C9.9854 21.9166 10.4231 22.1009 10.8067 21.9445C11.1902 21.7882 11.3745 21.3506 11.2182 20.967C10.9498 20.3084 10.5411 19.6812 9.91661 19.2203C9.28535 18.7544 8.48944 18.5 7.52364 18.5C6.55783 18.5 5.76192 18.7544 5.13066 19.2203C4.50617 19.6812 4.09746 20.3084 3.82909 20.967C3.67278 21.3506 3.85702 21.7882 4.24061 21.9445C4.6242 22.1009 5.06188 21.9166 5.21818 21.533Z"
      fill="#323544"
    />
    <svg:path
      d="M5.77364 16.25C5.77364 15.2835 6.55714 14.5 7.52364 14.5C8.49013 14.5 9.27374 15.2835 9.27374 16.25C9.27374 17.2165 8.49023 18 7.52374 18C6.55724 18 5.77364 17.2165 5.77364 16.25Z"
      fill="#323544"
    />
    <svg:path
      d="M14.2182 21.533C14.413 21.055 14.6758 20.6822 15.0214 20.4272C15.3601 20.1772 15.8326 20 16.5236 20C17.2147 20 17.6872 20.1772 18.0259 20.4272C18.3714 20.6822 18.6343 21.055 18.8291 21.533C18.9854 21.9166 19.4231 22.1009 19.8067 21.9445C20.1902 21.7882 20.3745 21.3506 20.2182 20.967C19.9498 20.3084 19.5411 19.6812 18.9166 19.2203C18.2853 18.7544 17.4894 18.5 16.5236 18.5C15.5578 18.5 14.7619 18.7544 14.1307 19.2203C13.5062 19.6812 13.0975 20.3084 12.8291 20.967C12.6728 21.3506 12.857 21.7882 13.2406 21.9445C13.6242 22.1009 14.0619 21.9166 14.2182 21.533Z"
      fill="#323544"
    />
    <svg:path
      d="M14.7736 16.25C14.7736 15.2835 15.5571 14.5 16.5236 14.5C17.4901 14.5 18.2737 15.2835 18.2737 16.25C18.2737 17.2165 17.4902 18 16.5237 18C15.5572 18 14.7736 17.2165 14.7736 16.25Z"
      fill="#323544"
    />
    <svg:path
      d="M9.91621 12.8505C9.55749 13.0576 9.43459 13.5163 9.64169 13.875C9.8488 14.2337 10.3075 14.3566 10.6662 14.1495L12.0232 13.366L13.3803 14.1495C13.739 14.3566 14.1977 14.2337 14.4048 13.875C14.6119 13.5163 14.489 13.0576 14.1303 12.8505L12.7736 12.0672L12.7736 10.5C12.7736 10.0858 12.4378 9.75 12.0236 9.75C11.6094 9.75 11.2736 10.0858 11.2736 10.5V12.0668L9.91621 12.8505Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHierarchy1Icon implements OnInit {
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
