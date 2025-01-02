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
  selector: 'svg[si-wechat-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M19.9032 18.2739C21.1613 17.3707 22 16.0158 22 14.4674C22 11.6932 19.3226 9.40286 15.9677 9.40286C12.6128 9.40286 9.96765 11.6609 9.96765 14.4352C9.96765 17.2094 12.6451 19.4675 15.9677 19.4675C16.6451 19.4675 17.3225 19.3707 17.9355 19.2094C17.9677 19.1771 18.0322 19.1771 18.129 19.1771C18.2258 19.1771 18.3548 19.2094 18.4516 19.2739L19.7742 20.0481C19.8064 20.0804 19.8064 20.0804 19.871 20.0804C19.9677 20.0804 20.0645 19.9836 20.0645 19.8868C20.0645 19.8546 20.0322 19.79 20.0322 19.7578C20.0322 19.7255 19.8387 19.1126 19.8064 18.7255C19.8064 18.6933 19.8064 18.6287 19.8064 18.5965C19.7419 18.4674 19.8064 18.3384 19.9032 18.2739ZM13.9677 13.6932C13.5161 13.6932 13.1612 13.3384 13.1612 12.8868C13.1612 12.4351 13.5161 12.0803 13.9677 12.0803C14.4193 12.0803 14.7741 12.4351 14.7741 12.8868C14.7741 13.3384 14.4193 13.6932 13.9677 13.6932ZM17.9677 13.6932C17.5161 13.6932 17.1613 13.3384 17.1613 12.8868C17.1613 12.4351 17.5161 12.0803 17.9677 12.0803C18.4193 12.0803 18.7742 12.4351 18.7742 12.8868C18.7742 13.3384 18.4516 13.6932 17.9677 13.6932Z"
      fill="#323544"
    />
    <svg:path
      d="M15.9679 9.01576C16.0969 9.01576 16.1937 9.01576 16.3872 9.01576C15.8066 6.14477 12.8065 3.91895 9.22586 3.91895C5.25809 3.9512 2 6.62864 2 9.95125C2 11.8222 2.96775 13.4029 4.51615 14.4997C4.64518 14.5964 4.7097 14.7255 4.7097 14.919C4.7097 14.9513 4.67744 15.0158 4.67744 15.0481C4.54841 15.4997 4.35486 16.2416 4.35486 16.2739C4.25808 16.3384 4.25808 16.3707 4.25808 16.4674C4.25808 16.5965 4.35486 16.6932 4.51615 16.6932C4.54841 16.6932 4.61292 16.661 4.64518 16.661L6.22584 15.7577C6.32261 15.7255 6.48391 15.661 6.6452 15.661C6.67746 15.661 6.77423 15.6932 6.87101 15.6932C7.61295 15.919 8.4194 16.0158 9.22586 16.0158C9.3549 16.0158 9.45167 16.0158 9.64522 16.0158C9.51619 15.5642 9.41941 15.0481 9.41941 14.5642C9.41941 11.4029 12.3227 9.01576 15.9679 9.01576ZM11.6452 7.048C12.1936 7.048 12.613 7.49962 12.613 8.01575C12.613 8.53189 12.1614 8.9835 11.6452 8.9835C11.1291 8.9835 10.6775 8.53189 10.6775 8.01575C10.6775 7.49962 11.0968 7.048 11.6452 7.048ZM6.80649 9.01576C6.2581 9.01576 5.83874 8.56414 5.83874 8.04801C5.83874 7.53188 6.29036 7.08026 6.80649 7.08026C7.32262 7.08026 7.77424 7.53188 7.77424 8.04801C7.77424 8.56414 7.35488 9.01576 6.80649 9.01576Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiWechatIcon implements OnInit {
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
