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
  selector: 'svg[si-gears-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.25315 5.39728C5.24418 5.9627 6.47801 5.25034 6.48385 4.10938L7.98373 4.10938C7.98956 5.25038 9.22343 5.96275 10.2145 5.3973L10.9635 6.6946C11.3812 6.46162 11.8798 6.30786 12.3876 6.21697C12.3568 6.12702 12.3169 6.03871 12.2675 5.95326L11.5095 4.64028C11.0998 3.93076 10.1954 3.68503 9.48364 4.0873C9.47615 3.26978 8.81111 2.60938 7.99183 2.60938H6.47573C5.65647 2.60938 4.99145 3.26976 4.98393 4.08724C4.27222 3.68501 3.3678 3.93074 2.95817 4.64024L2.20012 5.95323C1.79048 6.66275 2.0299 7.56889 2.73413 7.98413C2.0299 8.39938 1.7905 9.30551 2.20013 10.015L2.95819 11.328C3.36782 12.0375 4.27222 12.2832 4.98394 11.881C4.98962 12.4994 5.37154 13.0279 5.91185 13.2486C5.909 12.6779 6.05286 12.0988 6.35883 11.5689L6.4266 11.4515C6.17233 10.5593 5.11989 10.0765 4.25316 10.571L3.50323 9.27204C4.48844 8.69649 4.48842 7.27175 3.50321 6.69621L4.25315 5.39728Z"
      fill="#323544"
    />
    <svg:path
      d="M7.23401 9.48438C8.06244 9.48438 8.73401 8.8128 8.73401 7.98438C8.73401 7.15595 8.06244 6.48438 7.23401 6.48438C6.40558 6.48438 5.73401 7.15595 5.73401 7.98438C5.73401 8.8128 6.40558 9.48438 7.23401 9.48438Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.6406 15.1107C11.6406 13.418 13.0129 12.0457 14.7056 12.0457C16.3984 12.0457 17.7706 13.418 17.7706 15.1107C17.7706 16.8035 16.3984 18.1757 14.7056 18.1757C13.0129 18.1757 11.6406 16.8035 11.6406 15.1107ZM14.7056 13.5457C13.8413 13.5457 13.1406 14.2464 13.1406 15.1107C13.1406 15.975 13.8413 16.6757 14.7056 16.6757C15.57 16.6757 16.2706 15.975 16.2706 15.1107C16.2706 14.2464 15.57 13.5457 14.7056 13.5457Z"
      fill="#323544"
    />
    <svg:path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.65797 17.9026C7.15164 17.0256 7.45257 15.9045 8.32916 15.3984C8.55144 15.27 8.55094 14.9496 8.32953 14.8218C7.45293 14.3157 7.15258 13.1948 7.65869 12.3182L8.76495 10.4021C9.27102 9.52553 10.3919 9.22535 11.2683 9.73135C11.49 9.85937 11.767 9.69928 11.767 9.44355C11.767 8.43154 12.5874 7.61115 13.5994 7.61115H15.8121C16.8245 7.61115 17.6448 8.43199 17.6448 9.44397C17.6448 9.7002 17.9221 9.85987 18.1434 9.73212C19.0198 9.22613 20.1404 9.52641 20.6464 10.4028L21.7531 12.3196C22.259 13.1959 21.9588 14.3164 21.0825 14.8223C20.8615 14.9499 20.861 15.2697 21.0829 15.3978C21.9591 15.9037 22.26 17.0245 21.7538 17.9012L20.6475 19.8173C20.1414 20.6939 19.0205 20.9942 18.1439 20.4881C17.9222 20.3601 17.6448 20.5201 17.6448 20.7764C17.6448 21.7886 16.8243 22.6094 15.8119 22.6094H13.5996C12.5875 22.6094 11.767 21.7889 11.767 20.7768C11.767 20.5211 11.4899 20.3606 11.2678 20.4888C10.3913 20.9949 9.27006 20.6948 8.76384 19.818L7.65797 17.9026ZM9.07916 16.6974C8.91962 16.7895 8.86512 16.9935 8.957 17.1526L10.0629 19.068C10.1547 19.2271 10.3584 19.2818 10.5178 19.1898C11.7392 18.4846 13.267 19.3656 13.267 20.7768C13.267 20.9605 13.4159 21.1094 13.5996 21.1094H15.8119C15.9957 21.1094 16.1448 20.9603 16.1448 20.7764C16.1448 19.3657 17.672 18.4836 18.8939 19.1891C19.0531 19.281 19.2566 19.2264 19.3485 19.0673L20.4548 17.1512C20.5465 16.9923 20.4921 16.7888 20.3329 16.6968C19.1119 15.9919 19.1106 14.2287 20.3325 13.5233C20.4913 13.4316 20.5458 13.2285 20.4541 13.0696L19.3474 11.1528C19.2556 10.9938 19.0523 10.9394 18.8934 11.0312C17.6715 11.7366 16.1448 10.8542 16.1448 9.44397C16.1448 9.2601 15.9957 9.11114 15.8121 9.11114L13.5994 9.11115C13.4158 9.11115 13.267 9.25997 13.267 9.44355C13.267 10.8543 11.7397 11.7356 10.5183 11.0304C10.3592 10.9385 10.1558 10.9931 10.064 11.1521L8.95773 13.0682C8.86583 13.2273 8.92037 13.4308 9.07953 13.5227C10.3018 14.2284 10.3006 15.9922 9.07916 16.6974Z"
      fill="#323544"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGears3Icon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '25');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 25');
    this.render.setAttribute(svg, 'fill', 'none');
  }
}
