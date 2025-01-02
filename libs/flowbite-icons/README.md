# @semantic-icons/flowbite-icons

`@semantic-icons/flowbite-icons` helps developers to use [Flowbite icons](https://flowbite.com/icons) inside [Angular](https://angular.dev) projects.

## Supported versions

| @semantic-icons/flowbite-icons | Angular   | Flowbite-icons |
| ------------------------------ | --------- | -------------- |
| 0.x.x                          | >= 17.1.0 | 1.3.0          |

## Usage

First, install `@semantic-icons/flowbite-icons` from npm:

```sh
npm install @semantic-icons/flowbite-icons
```

Now each icon can be imported individually as an Angular component:

```js
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { SiBellIcon } from '@semantic-icons/flowbite-icons/solid';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [SiBellIcon],
  template: `
    <svg class="size-6 text-blue-500" si-bell-icon></svg>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePage {}
```

The outline icons can be imported from `@semantic-icons/flowbite-icons/outline`, the filled icons can be imported from `@semantic-icons/flowbite-icons/solid`.

Icons use the Angular naming convention and are always prefixed with the word `si` and suffixed with the word `icon`.

## License

MIT © 2024-2025 Khalil LAGRIDA
