import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-coolermaster-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cooler Master</title>
      <path
        d="M12 2.526c-.97 0-2.528.285-5.647 1.43-2.721 1-3.219 1.246-3.65 1.443C.603 6.361 0 7.356 0 9.863v4.608c0 2.326.357 3.004 2.49 3.933.741.32 1.858.875 4.71 1.956 1.263.478 3.153 1.114 4.797 1.114 1.645 0 3.543-.636 4.801-1.114 2.857-1.081 3.975-1.636 4.714-1.956C23.647 17.475 24 16.797 24 14.471V9.863c.003-2.507-.593-3.502-2.694-4.464-.431-.197-.929-.444-3.65-1.443-3.124-1.145-4.685-1.43-5.656-1.43Zm0 .645c1.373 0 3.347.595 5.492 1.393 2.609.967 2.824 1.106 3.344 1.323 1.472.615 2.5 1.384 2.5 3.667l-.003 2.401v2.691c0 1.769-.408 2.442-1.867 3.096-1.22.542-1.344.6-3.871 1.59-1.596.625-3.716 1.451-5.595 1.451-1.878 0-3.998-.826-5.589-1.451-2.525-.989-2.644-1.047-3.869-1.59-1.461-.653-1.866-1.327-1.866-3.095V9.555c0-2.284 1.028-3.053 2.495-3.668.522-.218.736-.357 3.342-1.323C8.666 3.766 10.628 3.171 12 3.171Zm.722.811v7.681h3.071v-1.381l-1.724-.125V4.435l-1.347-.453Zm-2.212.275a1.132 1.132 0 0 0-.45.078c-1.197.456-1.659 2.22-1.576 4.115.086 1.936.747 3.292 1.813 3.292 1.191 0 1.985-1.341 1.939-3.985-.033-1.903-.72-3.46-1.726-3.5Zm5.666.867.001 6.539h2.962v-1.159l-1.739-.118V9.203l1.442.195V8.221L17.4 7.925V6.817l1.739.462V6.108l-2.963-.984Zm-9.641.436a1.106 1.106 0 0 0-.3.059c-.978.328-1.489 1.71-1.431 3.357.059 1.62.642 2.765 1.603 2.765 1.174 0 1.788-1.278 1.751-3.314-.032-1.619-.686-2.912-1.623-2.867Zm3.8.302c.339.019.556.844.586 2.042.034 1.332-.188 2.349-.608 2.39-.379.038-.606-.808-.645-1.965-.045-1.319.212-2.246.514-2.424a.271.271 0 0 1 .153-.043Zm9.194.379v5.422h1.121V9.919l.376.043.526 1.701h.954l-.593-1.798c.265-.115.56-.451.56-1.199 0-.813-.426-1.578-1.15-1.822l-1.794-.603Zm-16.355.554c-.068.002-.136.01-.204.025-1.117.253-1.561 1.476-1.525 2.782.036 1.27.635 2.14 1.594 2.14.859 0 1.585-.886 1.585-1.857l-.976.082c-.048.429-.324.74-.623.762-.455.032-.64-.483-.656-1.268-.016-.796.154-1.432.615-1.562.3-.084.506.143.579.502l1.015-.189c-.139-.844-.749-1.436-1.404-1.417Zm3.234.021c.356-.021.598.704.619 1.739.025 1.082-.207 1.912-.598 1.944-.367.031-.585-.701-.615-1.702-.029-1.132.26-1.879.521-1.967a.277.277 0 0 1 .073-.014Zm14.241.864.526.14c.253.067.43.318.43.664 0 .346-.177.517-.43.47l-.526-.098V7.68ZM10.53 12.161c-.95-.012-1.868.806-1.839 2.039.048 2.208 2.456 1.856 2.474 3.691 0 .275-.154.553-.435.525-.356-.068-.623-.314-.647-1.07l-1.251-.307c-.013 1.153.404 2.373 1.625 2.638 1.187.261 2.276-.697 2.019-2.346-.304-1.917-2.469-2.031-2.524-3.059-.02-.385.259-.645.534-.615.203.024.468.24.431.762l1.338.132c.071-1.353-.499-2.369-1.725-2.39Zm-8.982.072v4.305l.761.266v-2.722l.576 2.919.327.113.742-2.789v3.047l.997.345v-5.484H3.659l-.578 2.286-.445-2.286H1.548Zm4.648 0-1.015 5.56.97.335.136-.856 1.066.302.154 1.019 1.181.412-1.269-6.772H6.196Zm6.526 0v1.599l.937-.063.002 5.841 1.281-.427v-5.505l.842-.069v-1.376h-3.062Zm3.454 0v6.539l2.963-.987v-1.149l-1.739.457v-1.207l1.533-.305V14.41l-1.533.198v-1.095l1.739-.122v-1.158h-2.963Zm3.353 0v5.422l1.122-.373v-1.733l.377-.082.52 1.516.958-.319-.585-1.594c.264-.204.559-.64.559-1.392 0-.819-.426-1.445-1.153-1.445h-1.798Zm1.696 1.03c.229.008.385.198.385.523 0 .348-.178.579-.431.617l-.529.077v-1.179l.529-.037.046-.001ZM6.79 13.96l.376 2.291-.723-.162.347-2.129Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCoolermasterIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
