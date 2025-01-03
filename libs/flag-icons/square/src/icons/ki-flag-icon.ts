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
  selector: 'svg[si-ki-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="ki-a">
        <svg:path fill-opacity=".7" d="M161.8 5.8h491.7v491.6H161.8z" />
      </clipPath>
    </defs>
    <svg:g clip-path="url(#ki-a)" transform="translate(-168.5 -6)scale(1.0413)">
      <svg:path fill="#e73e2d" fill-rule="evenodd" d="M4 5.8h802.6V300H4z" />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M358 276.6c-18.7-14.5-53.5-9.6-59.2-49.2 26.6 20.6 21.8-1.2 61.6 18.5z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M363 258.6c-13.4-19.6-48-25.5-41.3-65 19 27.8 21.1 5.6 53 36.5l-11.8 28.5z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M369 245.8c-4.8-23.1-34.5-41.9-13.2-75.8 7 33 17.3 13.2 35 54z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M383 234c2.5-23.6-20-50.5 10.6-76.3-3.5 33.5 12.5 18 16.8 62L382.9 234z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M395.4 224.4c12-20.4 2.4-54.2 40.9-65.2-16.9 29.1 4 21.4-10.1 63.5z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M413.5 226.9c17.8-15.6 19.5-50.6 59.5-48.8-25.3 22.2-3 21.6-29.7 57z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M429.4 236c21.6-9.6 33.5-42.6 71.2-29.1-30.7 13.8-9.2 19.8-45.2 45.7l-26-16.5z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M442.6 250.6c23.5-3.2 44.2-31.6 76.6-8-33.4 4.6-14.4 16.4-56.2 31.2z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m526.2 255-107.6 2.4 4.5 29z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m510.4 215.5-99.7 38.3 16.7 32z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m431.2 275.3 51.6-93.7-79.1 73.6z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.3"
        d="m381.9 573.2-13.5-82.6-15.4 82.6z"
        transform="matrix(1.2145 .40191 -.39943 1.207 195.4 -577.8)"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m424 259-17.4-105.9-19.2 106.4z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.3"
        d="m378.5 569.7-10.2-79-17.9 83.5z"
        transform="matrix(1.1791 -.4886 .48383 1.1816 -307 -238.2)"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m407.2 249.3-77.9-65.8 55.4 94.1z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m302 216 83.5 69 12.9-36.1-96.5-33z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="m384.7 256.3-98.3-1.4 97.9 32.6.3-31.2z"
      />
      <svg:path
        fill="#fec74a"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M464.4 274a59 59 0 1 1-117.9 0 59 59 0 0 1 118 0z"
      />
      <svg:path
        fill="#005989"
        fill-rule="evenodd"
        d="M3.2 297.1h806.6v200.3H3.2z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        d="M2.8 441.7c15 7 36.4 24.3 59.4 24.3 38.5-.2 39.5-26.3 78.5-25 39 1 32 28.4 84.7 28.2 43.5 0 57.6-33.3 95.2-29.3 27.8-1.4 39.2 31.4 82 31.8 44.3 1 60.5-35.8 88.3-32.7 29.7 0 39.4 29.6 81 29.8 53 .3 62.2-30.8 95.3-28.8 23.6-.5 42.2 22.8 76.8 23.3 27.5.5 50.6-20.3 66.2-27.8l.8-35.4c-16.4 6.1-40.7 26-65.1 26.3-35 1.3-56.7-23-81.1-22.8-29.2.3-40.8 30-90.3 30-45.3 0-55.7-30-84.9-30-28.5.2-37.2 32.7-86.6 32-40.3-.4-56-31-84.6-30.7-30.2 0-61.5 29.7-95 28.2-46.2-2-56.2-28.2-86.5-28.2-22.6 0-47 24.6-74.2 25-27 .5-57.5-24.5-60.3-25zm0-70c15 7 36.4 24.3 59.4 24.3 38.5-.3 39.5-26.4 78.5-25.1 39 1 32 28.4 84.7 28.3 43.5-.1 57.6-33.3 95.2-29.3 27.8-1.5 39.2 31.4 82 31.8 44.3 1 60.5-35.8 88.3-32.8 29.7 0 39.4 29.6 81 29.9 53 .2 62.2-30.8 95.3-28.9 23.6-.5 42.2 22.8 76.8 23.4 27.5.5 50.6-20.4 66.2-27.8l.8-35.4c-16.4 6-40.7 26-65.1 26.2-35 1.3-56.7-23-81.1-22.8-29.2.3-40.8 30-90.3 30-45.3 0-55.7-30-84.9-30-28.5.3-37.2 32.7-86.6 32.1-40.3-.5-56-31-84.6-30.7-30.2 0-61.5 29.6-95 28.2-46.2-2-56.2-28.2-86.5-28.2-22.6 0-47 24.6-74.2 25-27 .4-57.5-24.5-60.3-25z"
      />
      <svg:path
        fill="#fff"
        fill-rule="evenodd"
        d="M2.8 302.4c15 7 36.4 24.3 59.4 24.3 38.4-.3 39.4-26.3 78.3-25.1 39 1 32 28.4 84.7 28.3 43.5 0 57.6-33.3 95-29.3 27.9-1.4 39.2 31.4 82 31.8 44.2 1 60.5-35.8 88.3-32.7 29.6 0 39.3 29.6 80.8 29.8 53 .2 62.2-30.8 95.3-28.8 23.6-.5 42.1 22.7 76.7 23.3 27.5.5 50.6-20.4 66.1-27.8l.8-35.4c-16.3 6.1-40.7 26-65 26.2-35 1.3-56.7-23-81-22.7-29.2.2-40.8 30-90.3 30-45.2 0-55.6-30-84.7-30-28.5.2-37.3 32.6-86.6 32-40.3-.4-56-31-84.5-30.7-30.2 0-61.4 29.6-94.9 28.2-46.2-2-56.2-28.2-86.4-28.2-22.6 0-47 24.6-74.2 25-27 .4-57.4-24.5-60.2-25z"
      />
      <svg:path
        fill="#ffc84b"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.7"
        d="M293.2 78.7c58.6-4 47.9-9 71.5-12.8 29.7 4 33.1 22 49.7 33.1 0 0-6.2 21-26.6 18.1-2.7-8.4 9.9-11-26.4-33.2-21.1-1.2-58.8 3.7-68.2-5.2zm181.7 32.6-42.2 1.7v10.5c28.5.9 33.6-3 42.2-12.2z"
      />
      <svg:path
        fill="#ffc84b"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-linejoin="round"
        stroke-width="1.6"
        d="M329.7 109.5c7.4-3.8 11-2.2 17.4-2.5 4.4 8 8.5 8.7 18.1 9.7a47.5 47.5 0 0 0 38.3 20.9c28.7-.8 37.8-20.9 57.1-23.1H481c-3.4-5.8-6-9.1-13.4-9.4a195 195 0 0 0-52 3.4l-24 6c-7-3.4-24.3-21.5-35.3-21.1-6.5 1.7-6.5 4-9.7 6.4-6.2 2.7-12.4 1.4-17 9.7z"
      />
      <svg:path
        fill="#ffc84b"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.6"
        d="M358.7 100.7a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
      />
      <svg:path
        fill="#ffc84b"
        fill-rule="evenodd"
        stroke="#d8aa3f"
        stroke-width="1.7"
        d="M378.4 109.3c43.1-52 80.8-45.7 130-49.2 1.6 6 1 15-22.4 23-32 4.8-89.5 38.6-89.7 38.6-10.7-.5-18.2-11.7-18-12.4z"
      />
      <svg:path
        fill="none"
        stroke="#d9a43e"
        stroke-linecap="round"
        stroke-width="1.7"
        d="m467 75.4 31.8 1.4m-35.2 3.8 23.2 1.9"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKiFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}