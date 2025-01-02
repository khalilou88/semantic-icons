# @semantic-icons/bootstrap-icons

`@semantic-icons/bootstrap-icons` helps developers to use [Bootstrap icons](https://icons.getbootstrap.com) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/bootstrap-icons | Angular   | Bootstrap-icons |
| ------------------------------- | --------- | --------------- |
| 0.x.x                           | >= 17.1.0 | 1.11.3          |

## Usage

First, install `@semantic-icons/bootstrap-icons` from npm:

```sh
npm install @semantic-icons/bootstrap-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiBalloonIcon } from '@semantic-icons/bootstrap-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiBalloonIcon],
  template: `
    <svg class="text-blue-500 size-6" si-balloon-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
```

The icons can be imported from `@semantic-icons/bootstrap-icons`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
