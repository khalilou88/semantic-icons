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
  selector: 'svg[si-fampay-icon]',
  standalone: true,
  imports: [],
  template: `
    <title>FamPay</title>
    <svg:path
      d="M14.828 23.971a.206.206 0 01-.233-.016c-.646-.407-3.892-2.571-6.089-5.288-1.34-1.677 3.783-4.173 3.783-3.844.005 1.782.5 6.467 2.603 8.747a.268.268 0 01-.013.356l-.051.035 M13.48 13.082l4.659-2.119a4.386 4.386 0 002.542-2.636l.581-1.634a.174.174 0 00-.11-.222.171.171 0 00-.125 0l-8.897 3.771.033-.142a.902.902 0 01.439-.626c1.505-.927 6.903-3.686 6.903-3.686a6.592 6.592 0 003.53-4.112L23.444.28a.225.225 0 00-.153-.268.222.222 0 00-.144 0s-8.123 3.156-10.734 4.425C9.8 5.707 7.126 7.34 6.2 12.142c-.376 1.945.313 3.592 1.607 5.46-.006-1.836 4.637-4.02 5.673-4.52z M2.026 4.86C1.289 4.299.662 4.25.553 4.299c-.049-.174.846-.597.956-.707.362-.346.565-.804.988-1.098.863-.611 1.93-.424 2.824.064.455.25 1.709 1.071 1.728 1.112A14.02 14.02 0 018.945 5.38a.241.241 0 010 .314c-.211.203-.418.348-.675.565-1.703 1.43-2.73 5.24-2.746 5.711V12s-.999-5.38-3.498-7.14z"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiFampayIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'role', 'img');
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
  }
}
