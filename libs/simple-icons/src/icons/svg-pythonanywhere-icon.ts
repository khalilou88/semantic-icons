import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pythonanywhere-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>PythonAnywhere</title>
      <path
        d="M11.435 20.69c-.09-.11-.219-.182-.328-.255-.092-.055-.128-.11-.11-.238.183-1.077.347-2.154.511-3.25.11-.73.22-1.46.347-2.227.165.11.329.22.475.329.036.036.018.091.018.128-.036.255-.073.53-.128.785l-.273 1.77-.274 1.753c-.019.146-.037.31-.073.457.073.018.11-.037.164-.055 1.387-.73 2.775-1.442 4.163-2.173l.11-.054c.036-.019.072-.037.109 0 .146.09.292.2.456.31-.073.036-.11.073-.164.091-1.607.84-3.195 1.68-4.802 2.52-.055.018-.11.036-.128.091l-.073.018zm-4.874-9.858c-.037.292-.091.547-.128.803-.128.84-.274 1.661-.402 2.501-.073.493-.164.986-.237 1.479-.018.091-.055.128-.128.146-.146.036-.31.091-.456.146-.018-.037 0-.073 0-.11.146-.912.292-1.807.438-2.72.146-.876.274-1.77.42-2.647.018-.073.036-.128.128-.146.127-.037.237-.073.365-.11.073-.036.128-.018.2.037l.932.93c.986.987 1.99 1.973 2.976 2.94.018.019.036.055.073.073-.183.073-.366.11-.53.183-.055.018-.091-.037-.11-.055-.237-.237-.474-.475-.73-.712a375.76 375.76 0 0 1-2.702-2.684c-.036 0-.054-.018-.11-.054m4.748 2.83a8.286 8.286 0 0 1-.402-.384c-.037-.037-.018-.091 0-.128.11-.328.219-.657.347-.986l1.205-3.45a.338.338 0 0 0 .036-.128c-.073-.018-.128.018-.182.036-1.497.475-2.976.932-4.473 1.406-.238.073-.165.092-.329-.073l-.274-.274c.037-.054.11-.054.165-.073 1.734-.547 3.468-1.095 5.185-1.643.127-.036.2-.018.292.073.054.073.146.146.219.22.073.054.073.127.054.2-.2.548-.383 1.096-.584 1.643-.401 1.15-.803 2.3-1.205 3.433a.318.318 0 0 1-.054.127m-.31 1.15a5.268 5.268 0 0 0-.074.53c0 .073-.055.073-.11.091-.401.128-.784.256-1.168.365-1.132.366-2.282.712-3.414 1.078-.036.018-.091.036-.146.054a.284.284 0 0 0 .146.11c1.278.876 2.556 1.77 3.834 2.647.11.073.183.146.128.292-.037.128-.037.256-.073.384-.055 0-.091-.037-.128-.055C8.496 19.284 7 18.244 5.502 17.22c-.091-.073-.128-.127-.11-.255.019-.11.055-.201.055-.31 0-.092.055-.128.128-.147 1.77-.566 3.56-1.113 5.33-1.68.02 0 .056 0 .092-.017M6.944 3.62c-.018.183-.055.365-.073.53 0 .073-.073.073-.128.073-.328.11-.675.2-1.004.31-1.205.365-2.391.73-3.596 1.095-.037.019-.092.019-.128.073.055.037.091.073.146.11 1.278.895 2.538 1.807 3.816 2.702.09.073.127.128.11.256a3.37 3.37 0 0 0-.074.42c-.055-.019-.091-.055-.146-.074L1.431 5.994c-.11-.074-.146-.147-.11-.256.018-.11.037-.2.055-.31 0-.073.036-.11.128-.147l1.26-.383c1.35-.402 2.683-.821 4.034-1.223.037-.037.091-.037.146-.055m5.477 3.725c-.146.054-.292.09-.438.146-.091.036-.164.018-.237-.055-.493-.511-1.004-1.004-1.516-1.516a183.922 183.922 0 0 0-1.825-1.807c-.037-.036-.055-.091-.128-.11a6.081 6.081 0 0 0-.091.566c-.146.859-.274 1.717-.42 2.556-.092.548-.183 1.078-.256 1.625-.018.092-.036.128-.128.146-.146.037-.31.092-.456.146-.018-.11.018-.2.036-.273l.548-3.396c.091-.603.201-1.205.292-1.808.019-.073.037-.11.11-.127.128-.037.237-.073.365-.11.091-.037.146-.018.219.055l1.46 1.46c.786.785 1.589 1.57 2.374 2.355.018.037.073.073.091.147m.672 7.755a3.728 3.728 0 0 1-.13-.76c-.115-.959-.014-1.885.36-2.774.572-1.388 1.56-2.417 2.904-3.073a8.12 8.12 0 0 1 2.116-.676c.05.059.027.13.023.185l.032.332c.013.074-.026.108-.1.12-.484.113-.97.262-1.423.469-1.228.536-2.164 1.367-2.76 2.57a4.954 4.954 0 0 0-.526 2.544c.02.24.04.478.078.719.013.074.009.129-.085.159a3.57 3.57 0 0 0-.489.185m2.53 1.77c.013-.183.006-.348.02-.53.004-.073.025-.108.117-.12.481-.076.947-.19 1.382-.397 1.606-.712 2.66-1.92 3.09-3.628.177-.683.207-1.376.146-2.076.002-.036-.012-.092-.01-.129.006-.072-.06-.169-.002-.22.04-.052.131-.045.205-.058.13-.028.242-.057.373-.102.057.242.075.5.077.737a7.32 7.32 0 0 1-.054 1.552 5.652 5.652 0 0 1-1.478 3.081c-.87.928-1.953 1.492-3.179 1.754a2.843 2.843 0 0 1-.687.135m5.343-10.442c.054.004.075-.032.113-.047a54.441 54.441 0 0 1 2.265-1.251c.039-.034.095-.048.147-.008.157.102.333.206.509.31a.555.555 0 0 1-.134.082c-.95.501-1.917.983-2.867 1.483a.865.865 0 0 0-.195.17c-.349.543-.718 1.103-1.067 1.646-.062.105-.062.105-.167.043-.106-.063-.193-.124-.299-.186-.105-.062-.105-.062-.044-.15l.677-1.05c.143-.21.268-.42.41-.63a.368.368 0 0 0 .07-.197 182.142 182.142 0 0 1 .211-3.297c.142.064.263.164.405.23.16.083.19.177.176.36a76.356 76.356 0 0 0-.16 2.038c-.01.145-.039.29-.05.454m-3.882 4.468c-.018.255-.316.6-.575.637a.458.458 0 0 1-.465-.16.43.43 0 0 1-.077-.463.87.87 0 0 1 .436-.482.445.445 0 0 1 .474.033c.156.12.238.255.207.435m1.856 1.21c-.018.255-.317.6-.577.655-.186.042-.328-.023-.464-.16a.4.4 0 0 1-.08-.445c.09-.232.23-.405.457-.5.322-.16.688.104.664.45M.883 6.432c.164.091.292.2.456.31.055.037.037.091.019.146l-.165 1.04c-.2 1.242-.401 2.465-.602 3.707 0 .036-.037.091 0 .146.055-.037.11-.055.164-.091l4.108-2.246c.11-.055.182-.055.274.018.11.092.219.165.347.256-.037.055-.092.073-.128.091-1.589.877-3.177 1.735-4.747 2.61-.11.056-.183.074-.274-.017-.073-.073-.164-.128-.255-.183-.073-.036-.092-.091-.073-.164.073-.438.146-.858.2-1.296.22-1.388.457-2.776.676-4.163a.253.253 0 0 1 0-.164"
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
export class SvgPythonanywhereIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}
