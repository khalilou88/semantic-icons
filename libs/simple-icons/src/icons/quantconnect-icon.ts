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
  selector: 'svg[si-quantconnect-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>QuantConnect</svg:title>
    <svg:path
      d="M23.0673 16.6635a12.1084 12.1084 0 0 1-6.404 6.4046A12.0185 12.0185 0 0 1 12.0002 24v-2.7975a8.63 8.63 0 0 0 3.5454-.7466 9.4574 9.4574 0 0 0 2.9836-1.9273 11.3659 11.3659 0 0 0 1.9273-2.922 9.1472 9.1472 0 0 0 .7465-3.6064 8.6298 8.6298 0 0 0-.7465-3.5454 8.9285 8.9285 0 0 0-4.9109-4.9122 9.5282 9.5282 0 0 0-7.091 0 9.4798 9.4798 0 0 0-4.9108 4.9122A9.7584 9.7584 0 0 0 2.7977 12H.0003A12.0115 12.0115 0 0 1 .932 7.3375 12.093 12.093 0 0 1 7.336.9328a12.121 12.121 0 0 1 9.326 0 11.5066 11.5066 0 0 1 3.7923 2.609 11.4988 11.4988 0 0 1 2.613 3.7963 12.1232 12.1232 0 0 1 0 9.3254zM11.998 9.8868V7.0892a4.7884 4.7884 0 0 0-3.4826 1.4296 4.7089 4.7089 0 0 0-1.4911 3.482 4.609 4.609 0 0 0 1.4911 3.4779c1.8316 1.923 4.8752 1.9972 6.7983.1656a4.7631 4.7631 0 0 0 .1656-.1656 4.34 4.34 0 0 0 1.4296-3.4786h-2.7976a2.0583 2.0583 0 0 1-.6215 1.4918 2.0189 2.0189 0 0 1-1.4918.6221c-1.1653-.0051-2.1088-.9485-2.114-2.114a2.0199 2.0199 0 0 1 .6216-1.4917 2.0637 2.0637 0 0 1 1.4924-.6215zm5.972 8.0798a7.0439 7.0439 0 0 0 1.806-2.6759 7.4712 7.4712 0 0 0 .6838-3.2953 7.655 7.655 0 0 0-.6837-3.2953 8.453 8.453 0 0 0-4.4767-4.4767 7.4678 7.4678 0 0 0-3.2953-.6836v2.7976a5.3066 5.3066 0 0 1 3.979 1.6784 5.4031 5.4031 0 0 1 1.6784 3.979c-.0338 3.1246-2.5943 5.6303-5.719 5.5964-3.077-.0333-5.5632-2.5195-5.5965-5.5964H3.5484a8.4 8.4 0 0 0 .616 3.298 9.2912 9.2912 0 0 0 4.5397 4.5381 9.0414 9.0414 0 0 0 6.59 0 7.9963 7.9963 0 0 0 2.6758-1.8643z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiQuantconnectIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'F98309');
  }
}
