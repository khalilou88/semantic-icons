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
  selector: 'svg[si-dingding-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 2C6.47717 2 2 6.47715 2 12C2 17.5229 6.47717 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47717 17.5229 2 12 2ZM16.4904 11.0399L16.4838 11.0543C16.0641 11.9522 14.9684 13.7132 14.9684 13.7132C14.9684 13.7132 14.9669 13.7091 14.9627 13.7022L14.6424 14.2596H16.1856L13.2383 18.1788L13.9074 15.5127H12.6931L13.115 13.7496C12.7736 13.832 12.3703 13.9451 11.8923 14.0988C11.8923 14.0988 11.2459 14.4774 10.0302 13.3705C10.0302 13.3705 9.21029 12.6482 9.68568 12.4676C9.88788 12.3909 10.6672 12.2935 11.2805 12.2106C12.1092 12.0985 12.619 12.0392 12.619 12.0392C12.619 12.0392 10.0641 12.0775 9.45797 11.9821C8.85178 11.8868 8.08285 10.8753 7.91909 9.98621C7.91909 9.98621 7.66575 9.49805 8.46378 9.72912C9.26178 9.96021 12.5653 10.6286 12.5653 10.6286C12.5653 10.6286 8.26903 9.31176 7.98319 8.99048C7.69727 8.66918 7.14179 7.23638 7.21412 6.35602C7.21412 6.35602 7.24548 6.13656 7.47054 6.19532C7.47054 6.19532 10.6467 7.64667 12.8184 8.44116C14.9902 9.23567 16.8784 9.63987 16.6345 10.6686C16.6136 10.7563 16.5624 10.8848 16.4904 11.0399Z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDingdingFillIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'currentColor');
  }
}
