import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-mt-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-mt"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" stroke-width=".00756015" d="M0 0h512v512H0Z" />
      <path fill="#cf142b" stroke-width=".00756015" d="M256 0h256v512H256Z" />
      <g
        fill="#fff"
        stroke="#000"
        stroke-width="96"
        transform="translate(109 119.6)scale(.00919)"
      >
        <path
          fill="none"
          stroke="#cf142b"
          stroke-width="512"
          d="M-2048-7168h4096v3890.8A1094 964 45 0 1 3277.2-2048H7168v4096H3277.2A964 1094 45 0 1 2048 3277.2V7168h-4096V3277.2A1094 964 45 0 1-3277.2 2048H-7168v-4096h3890.8A964 1094 45 0 1-2048-3277.2Z"
        />
        <path
          stroke="none"
          d="M2024-3275.2A1094 964 45 0 1 3275.2-2024v4048A964 1094 45 0 1 2024 3275.2h-4048A1094 964 45 0 1-3275.2 2024v-4048A964 1094 45 0 1-2024-3275.2Z"
        />
        <path
          stroke-width="48"
          d="M-2024-7144h4048V7144h-4048zm-5120 5120H7144v4048H-7144Z"
        />
        <path d="M-1792-6912h3584V6912h-3584zm-5120 5120H6912v3584H-6912Z" />
        <circle r="3200" />
        <circle r="2368" />
        <g id="mt-a" stroke-linejoin="round" stroke-width="48">
          <path
            d="M3084-2565c-111 85-322 302-450 461l-119-74c163-141 389-350 514-499zm-101-185c-201 59-585 172-749 276l-36-52c69-99 147-506 144-622l125 28c-41 100-81 314-92 453 129-23 435-123 522-186z"
          />
          <path
            d="M3240.8-2291.9h-158.6a600 330 45 1 0-242.3 173.3l112.1-133.7 138.1 138.1-154.5 154.4a1070 940 45 0 1-974.1-1283 1070 940 45 0 1 1279.3 950.9z"
          />
        </g>
        <use xlink:href="#mt-a" transform="rotate(90)" />
        <use xlink:href="#mt-a" transform="scale(-1)" />
        <use xlink:href="#mt-a" transform="rotate(-90)" />
      </g>
      <g transform="translate(109 119.6)scale(.00919)">
        <path
          d="M-2541 1790c-72-126-167-287-219-329 32-22 75-54 97-60-1 80 120 246 120 246l178-117c-50-77-94-136-130-159 44-32 91-59 104-62 1 39 24 104 92 184 0 0 166-88 220-156l70 114c-78 15-428 233-532 339m-247-1517c-187 34-282 193-250 372 32 181 194 305 372 275 178-31 279-195 245-385s-180-296-367-262m27 108c150-27 276 46 297 162s-72 231-223 258-271-69-288-166c-18-99 63-227 214-254m366-1100c-62 98-199 188-320 271-17-86-81-141-155-146-79-4-160 59-174 101-20 58-45 307-45 307 156-12 497 15 614 58l14-132c-77 20-251-16-251-16l4-58 180-142c23-18 158-144 162-234 1-28-23-21-29-9m-361 441c-71 2-219-6-260-24 16-143 60-194 136-187 70 7 144 47 124 211m682-1772c-136 11-306 139-302 249 1 58 21 138 98 196 76 58 155 75 218 63 61-11 162-96 161-143 0-46-108-174-176-174l113-121c29 70 145 172 188 185-49 117-110 239-238 298-128 60-261 57-382-57-114-108-70-316 2-397 79-89 226-127 229-196zm638-673 24 454s9 161-28 261l141-99c-55-44-44-179-44-179l228-122s108 69 97 153l194-79c-113-43-253-142-253-142zm73 141 208 138-203 109zm1018-474c-26 111 2 330 43 512 141-13 249-27 297-87l13 150c-139 0-292 16-432 38 2-205-19-474-77-590zm1059 67c-65 94-119 308-147 492 136 40 242 66 309 27l-43 145c-129-50-278-92-416-123 76-189 155-448 144-576zm1071 485-396 225s-140 81-246 93l151 80c15-68 141-119 141-119l212 149s-14 129-94 156l157 138c-11-120 14-291 14-291zm-94 128-31 249-189-133zm304 932-62-117c102-8 409-188 550-280l22 40-132 603c118-47 305-145 356-199l70 133c-131-19-374 101-558 213l-18-32 113-587s-305 138-341 226m930 872c-12-89-14-150-57-170l-5-37 109-18c45 117 96 443 89 527l-112 18-5-31c37-42 0-196 0-196-166 17-455 64-496 121l-26-154c59 20 350-11 503-60M2388 752c62-98 201-187 322-269 17 86 80 142 155 146 79 5 160-56 174-99 21-58 47-306 47-306-156 10-496-19-613-63l-15 132c77-19 251 17 251 17l-4 58-181 141c-24 18-160 143-165 233-1 28 23 20 29 10m365-439c71-1 219 8 260 26-17 143-62 194-138 186-70-8-143-48-122-212m-566 836-93 160c72-11 172 46 253 99 27 72 133 256 125 436l120-206c-53-24-115-50-155-243 158-59 276-78 326-50l106-180c-123 74-412 150-460 134-50-29-192-73-222-150"
        />
        <circle cx="1475" cy="2361" r="125" />
        <circle cx="-1475" cy="2361" r="125" />
      </g>
      <g transform="translate(109 145.2)scale(.00919)">
        <path
          d="M195 268c-13 9-48-9-56-37 0 9-2 37-19 53-41 39-85 20-120 20s-79 19-120-20c-17-16-19-44-19-53-8 28-43 46-56 37-12-9-6-48 18-64-8 2-36 9-56-2-50-27-45-75-56-108s-43-69-18-120c10-21 36-32 44-35-29 1-56-27-52-41 5-15 44-21 67-3-6-7-20-31-16-54 10-56 57-66 85-87 29-21 53-62 109-54 23 3 41 24 47 31-10-27 8-62 23-62s33 35 23 62c6-7 24-28 47-31 56-8 80 33 109 54 28 21 75 31 85 87 4 23-10 47-16 54 23-18 62-12 67 3 4 14-23 42-52 41 8 3 34 14 44 35 25 51-7 87-18 120s-6 81-56 108c-20 11-48 4-56 2 24 16 30 55 18 64M-93 128c16 12-27 48-10 93 19 53 72 37 103 37s84 16 103-37c17-45-26-81-10-93s38 40 85 39c57-3 58-57 67-87 10-30 42-75-3-110-37-30-86 0-92-19s50-23 64-69c15-55-37-72-62-91-26-18-59-62-106-31-39 27-26 82-46 82s-7-55-46-82c-47-31-80 13-106 31-25 19-77 36-62 91 14 46 70 50 64 69s-55-11-92 19c-45 35-13 80-3 110 9 30 10 84 67 87 47 1 69-51 85-39"
        />
        <path
          d="M0 199c-9 0-20-21-14-38-3 5-14 17-28 19-34 5-48-20-65-32-17-13-45-19-51-52-3-14 6-29 9-33-14 11-37 7-40-2-3-8 14-25 31-25-5-1-20-8-26-20-15-31 4-52 11-72 6-20 3-49 33-65 12-7 29-3 34-1-15-10-18-33-11-39 8-5 29 6 34 22 0-5 1-22 11-31 25-24 51-12 72-12s47-12 72 12c10 9 11 26 11 31 5-16 26-27 34-22 7 6 4 29-11 39 5-2 22-6 34 1 30 16 27 45 33 65 7 20 26 41 11 72-6 12-21 19-26 20 17 0 34 17 31 25-3 9-26 13-40 2 3 4 12 19 9 33-6 33-34 39-51 52-17 12-31 37-65 32-14-2-25-14-28-19 6 17-5 38-14 38M0 85c11 0 4 30 25 44 25 17 43-6 57-16s42-20 33-49c-7-25-37-27-34-38 3-10 29 6 50-10 24-19 7-43 2-59-6-16-6-46-37-47-26-1-37 27-46 21s15-26 6-50c-11-29-39-20-56-20s-45-9-56 20c-9 24 15 44 6 50s-20-22-46-21c-31 1-31 31-37 47-5 16-22 40 2 59 21 16 47 0 50 10 3 11-27 13-34 38-9 29 19 39 33 49s32 33 57 16c21-14 14-44 25-44"
        />
        <circle r="48" />
      </g>
      <g
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="36"
      >
        <path stroke-width=".4" d="M94 135.4a367.6 367.6 0 0 1 29.9 0" />
        <path
          stroke-width=".2"
          d="m107.8 108.8.8 1m1.2 12 .1 2m-2-2c.3.4.7 1.5.7 2"
        />
        <path
          fill="#fff"
          stroke-width=".3"
          d="M114.1 135.3c-.3.1-1 .5-1 .8 0 .3.8.3 1 .4-.4.2-1.6.4-2.2.1-.4.3-3.3-.4-3.9-.4-.3 0-.9-.3-.8-1 0-.2.1-.6.5-.7-.2-.3.7-1 1.5-1.4-1.3.1-3-.4-3.4-.9-1-.3-1.4 0-1.8.9 0 1.5-.9 2.2-1.9 2-.7 0-.8.3-1 .4l2 .6c1.4 1.3.6 2.3.3 2.5-.3.3-1 .1-1.5.1-.4 0-.4.2-.6.3-.3.1-.7.2-.8 0 0-.1.2-1 .8-1 .3-.1.9-.3 1-.6 0-.3-1.2-.2-2-.6-.8-.2-1-.6-.8-1.8.2-1.2 1.7-1.4 2.4-1.4 0-.5 0-1.5.7-2 1-1 2.5-.7 3.8-.6.8-.4 2.1-1 3.5-1 1.2-.1 6.6-1.5 9-1.2-.5-.9-.4-2.8.6-3.4 1.3-.7 2.7 1.3 3 1 .3-.4-.4-1-1.4-1.9-.2-.4-.1-.4-.1-.5l.1-.8c.1 0 .9.2 1 .5.3.4.6.5.9.3.3-.2-.1-.1-.3-.7 0-.2-.3-.4-.3-.7.2-.2 1-.8 1.5-1l.5.8c.5.7 1 .5 1.2 1 .1.2.1.7.3 1a6 6 0 0 0 2.2 2.3c.2.1.4.3.4.5l-.2.6h-1c-.7-.4-1-.6-1.3-.5-1 .1-1.5 1.5-2.7 1.5-1.2-.2-2-1.8-2.6-1.3-.7.5 1.6 1.9 1.3 2.5.2.1.5.6.4 1 1.2-.2 2-1 2.4-1.6.6-.9 1-1.3 1.4-1.5.4-.1.8.1.8.4l.6.1c.3.2.2.5 0 .7 0 0-.1-.2-.3-.2-.2-.1-.5.1-.7.3l-.7 1.1-1.3 1.3c.2.3 0 .7.1 1l.4.1v.5c0 .3-1.1 1.6-1.5 1.6-.5 0-.8-.6-.8-.8-.5.2-.8-.4-.8-.6-.2.3-1 .7-1.3.8-.3.2-.4.2-.5-.2-.1.3-.9.5-1 .6-1 .2-2 .6-3 .6H114z"
        />
        <path
          fill="#fff"
          stroke-width=".2"
          d="M117.4 126.4c0 .4-.5 1.3.3 2 .5.4 1.3.7 1.6 1.2.2.5-.1.9-.2.9-.5-.2-1.2.7-1.4 1.3-.3-.8-.9-.6-1.6-.5.2-.9-.5-1.4-1.6-1.6.1-.2-.2-.5-.4-.7-.3-.2-1.2 0-1.2-.2-.1-.2.4-.6.1-1-.2-.4-1.3-.2-1.6-.3 0-.5.1-.8-.1-1.2-.3-.5-1.4-.3-2-.4.5-.4.7-.9.4-1.4-.2-.5-1.5.1-1.5-.6 0-.3 1.5-.5 2-.5.6 0 2.4.4 4.1.8.4.3 3.1 1.1 3.1 2.2"
        />
        <path
          stroke-width=".3"
          d="M122 133.4c.9-.4 1.7-1 2.6-1.8m-16-.6c.7 0 2.4.3 2.9.9.5.6.8 1.7-2.5 2.5 1 0 2.4-.2 3 0 .4-.2 1.5-.5 2-.4-.2.1-.8.3-.8.6s.2.4.7.5m3.2-2.2c1.2.2 2.8-.1 3 1.1"
        />
        <path
          stroke-width=".2"
          d="m121 123.5 1.7 1.3c.6.5.9 0 .4-.9M112.9 128.8c1.1-.3 2.8-.5 3.8-.5m-5.3-.8c1.8-.5 3.8-.3 5.1-.3m-.3 4c.3-.4 1-1 1.7-1.5m-3.4 0 2.5-.8m-2.7-4.7c1-1 2.2-.9 3.3-1.4.6-.4 1.2-1.3 1.9-2 .3-.2.5-.4 1.3-.4s.9.3-.2.5c-.7 0-.7.4-1 1-.3.4 0 1 .1 1.4l-.5 1.4c0 .2 0 .3.3.6m-10.2.6c2.6-.6 6.3.4 7 .4"
        />
        <path
          stroke-width=".1"
          d="M125 130c.9-.5.9-1.4 2-1.7m-4.2 5.7c1.1-.5 1.3-1 2-1.4m.4-8.6s-.3 0-.4-.2c-.2-.1-.2-.4-.1-.5l.4.1c.3.2.2.5.1.6m.3 2c-.5 0-.6-.4-1.1-.5-.5 0-.9.3-.9.6s.3.6.7.6c.3 0 .6-.2 1.3-.1M123 122c.5 0 .9.1 1.2-.2"
        />
        <path
          fill="#fff"
          stroke-width=".1"
          d="M109.5 113.5a.2.1 75 0 1-.2-.5.2.1 76 0 1 0-.4.2.1 77 0 1-.2-.4.2.1 79 0 1-.1-.5.2.1 80 0 1-.1-.4.1.2-8 0 1 0-.5.1.2-7 0 1-.2-.4.1.2-5 0 1 0-.5.1.2-3 0 1 0-.5.1.2-1 0 1-.1-.4.1.2 1 0 1 0-.5.1.2 4 0 1 0-.5.1.2 6 0 1 0-.4.1.2 9 0 1 0-.5.1.2 12 0 1 .1-.5.1.2 15 0 1 .1-.5.1.2 19 0 1 .2-.4.1.2 23 0 1 .1-.5.1.3 27 0 1 .2-.4.1.3 31 0 1 .2-.5.1.3 35 0 1 .3-.4.1.3 40 0 1 .3-.4.1.3 45 0 1 .4-.4.1.3 49 0 1 .4-.4"
        />
        <path
          stroke-width=".1"
          d="m110 113.3-.5.2m.4-.6-.6.1m.5-.5-.6.1m.6-.6-.7.2m.6-.6-.7.1m.6-.5h-.7m.7-.5-.8.1m.7-.5h-.8m.8-.5-.8.1m.8-.5h-.9m1-.4h-1m1-.5h-1m1-.4h-1m1-.4-1-.1m1.1-.3-1-.2m1.1-.2-1-.3m1.1-.2-1-.3m1.2 0-1.1-.4m1.2 0-1-.5m1.2.1-1-.5m1.3.2-1.2-.7m1.4.4-1-.8m1.3.4-1-.8m1.3.5-1-1m1.3.8-1-1.1"
        />
        <path
          fill="#fff"
          stroke-width=".3"
          d="M115.8 107.2a7 7 0 0 1-1.5.2l-.1 1.5c1.5 1.4 2.9 3.2 3 5 .5.3.7.7 1 1.4 1-.6 2.1-1.5 3-1.7.6-.1 1.7-.2 2.2.1l3.5 2.2c.7.4 1.2 1 1.6 1.5.4.6.4 1.5.3 1.8l-2.1-.6c-.2-.4 0-.8.1-1.2.2-.3.2-.3-.1-.5-.3-.2-.5-.2-.7-.1a.7.7 0 0 1-.7-.4c-.2-.3-2.5-1.2-2.8-1.3-.4 0-1 0-1.4.4-.2.3-1 1.5-1.6 2-.1.2-.2.4 0 .5l2.2.1c.9.1 2 1 2.4 1.6l3.7 3.7c.3.3.6.7.5 1.1h-2a4.8 4.8 0 0 0-.3-1.7c-.2-.4-.7-.2-.9-.2-.1 0-.4-.3-.6-.7-.3-.6-1.4-1.4-2-1.7-.4-.3-.6-.2-1.1-.2-.4-.1-1.1-.2-1.6 0-.6.2-2.1.7-3.6.8-.5.3-2 .6-3.7 1l-4.7.7a7 7 0 0 1-2 3.4c-.4.6-.4 1-.1 1.3.3.3 2.4.3 3 .3h1.7c.4.1.9.5 1.4.8.4.3.5.5.7.9l.5.7h-2.5c0-.6-.3-1-.7-1-.3.2-.7.5-1.2.3l-5-.1c-.6 0-1-.8-.8-1.5.2-.7 0-1.2 0-1.7l-1.3 1.4c-.7.7-.3 1.5 0 1.9a20 20 0 0 1 2.6 3l2 1.6c.2.6.7.9 1 1.3H104l.2-.8c0-.2-.2-.6-.7-.5-.4 0-.7-.5-.9-.8-.1-.5-1.5-2.3-2-2.7-.4-.4-1.6-1.7-1.9-1.8-.2 0-.2-.5 0-.8.3-.3 1-1.5 1.3-2.3.2-.6 0-.6-.1-.8-1.4-1-2.6-2.4-3.4-3.7-.2.1-1.8.1-2.5-.3-.6-.2-1.4-.3-1.8.3-.2.4-.2 1.1.2 1.5.6.4 1.3 1.2 2 2 .7 1 .1 1.5-.8 2.2.2.4 0 .3.2.9.3.4.3 1.4 0 1.7-.5.2-1 .4-1.4 1-.4.5-.6 0-.4-1 0-.5-.4-1-.7-1.3-.4-.5-.2-1.7 0-2 .3-.4.5-1.1 0-1.7-.6-.5-1.6-1.6-1.5-3.1.2-2 2.2-2.6 3.3-2 1.8.7 3 .6 3.5.4.5-.8 1.2-1.7 2.3-2.3 1-.6 3.2-1.5 5.2-1.8l5.1-1.8c.7-.2.7-.8.6-1.2-.6-3.4-.4-7 2.3-8.9.3-.3.3-1 .7-1.6 0 .3.6 1 .8 1.4a43 43 0 0 1 4.2 1.6l1.1.3c.2.1.5.3.6.6.2.4 0 .9-.2 1-.2 0-1.2-.3-1.5 0 0 .2.3.4.9.6.2.2-.2.6-.4.6a.9.9 0 0 1-.6-.1z"
        />
        <path
          stroke-width=".3"
          d="M112.4 105c0 2.1.6 3.2 1.8 4m4 6.3a6 6 0 0 1 0 2.5m-15.4 8.1c1.6-.7 3-2.5 2.9-3.6 0-.6-.5-1.6-2-1.7m2 1.7c.4.2 1.4 0 2.1.2m8-5.2c1.1 0 2.8.8 3.6.7m-4.3 1.8c1 .2 1 .7 3.3.6m-3.8-7.6c1.2 0 2 .6 2.6 1"
        />
        <path
          stroke-width=".2"
          d="M105.5 123.3c.8 0 1.5-.1 1.8-.9m5-17.4c0 1.7.7 2.2 2 2.4"
        />
        <path
          stroke-width=".1"
          d="M119 105.3c0 .4 0 .8.6.7m-3.8-2c-.5 1.5 2.3 1.7 2.4 2.6m-15.6 9.2c1.3.6 1.2 3.3 1.2 4.8"
        />
        <path
          fill="#fff"
          stroke-width=".1"
          d="M117.5 106.6c-.4.8-1.4 2.2-2.4 2.9a14 14 0 0 1-5 2.3h-1c-.4 0-.8-.3-1-.8-.2-.3-.2-1.6.3-1.8a3.7 3.7 0 0 1 1.6-.3c.2 0 .6.1.6.5 0 .3-.3.5-.6.4-.4 0-1-.3-1.3 0-.3 0-.4.7-.3 1 .3.4.5.5.8.6h.8c1.9-.5 3.4-1.3 4.8-2.3 1-.7 2-2.1 2.3-2.8zm-7.5 2.7c-.5-.2-1.5 0-1.5.2.4-.2.9-.2 1.5 0 .2 0 .3-.2 0-.2m3.7-4.7.3-.4c0-.1-.2-1.1.9-.6 1 .6.2 1 .1 1.1l-.2.5"
        />
        <path stroke-width=".2" d="m112 103.7 5.9 3" />
        <g stroke-width=".2">
          <path
            fill="#fff"
            d="m104.5 104-4-.4c-.6 0-2 2-2.7 2.1-.8.2-1.5-1.5-2.6-1-.5.3 0 2.4-.3 2.6-.3.3-1.3-1-2-.6-.5.4.6 3.2.3 3.5-.3.3-1.6-1.2-2-1-.5.3.4 4.6 0 4.8-.4.2-2.3-1.1-2.6-.6-.2.6 2.7 2 3.5 2l.9-.3 2.8.3 1.4-1.3c2-2.7 4.3-5.3 7.3-5.1z"
          />
          <path
            d="m95.4 104.6 4-.2m-6.4 2.3 2-.7m-3.8 3.2 1.8-.8m-4.4 5 2.5-2.2M93 115c1-1.8 3.1-3.8 4.9-4.9m-6.7 3.9c1.5-1.8 5.7-4.8 7-5m-3.3-1.7c1.7-.8 4.3-.9 6.2-1m-3.4-.6c.3 0 3.3-.4 4.6-.3m-9.1 4.8c2.3-1.4 4.6-2.5 7.2-3.3"
          />
        </g>
        <path
          fill="#fff"
          stroke-width=".3"
          d="m113 138.8.3.5-.6.1-18.3-5.5c-.6-.1-.4-1 .2-.8zm-17.6-25.7c-.2-.4-.5-.7-.7-.7-.2 0-.6.4-.6.5 0 .2.6.6.8.7zm1.7.7-1.5 1.5c-.2.2.1.6.3.4l1.5-1.6c.2-.2-.1-.5-.3-.3m-.8 1.5 4.8 5h1l-.1-1-5-4.7z"
        />
        <path stroke-width=".1" d="m101.4 119.7-4.7-4.8" />
        <path
          fill="#fff"
          stroke-width=".3"
          d="M107.8 105.9c0-.3 0-.4.3-.6.3-.2.2 0 .4 0s.3.2.4.3h.3l.2-.5a.1.1 0 0 0 .1-.1l.2-.2.1-.3c.2 0 .4.2.4 0l.2-1c.4.1.2-.3.4-.4.4.2.5-.5.3-.7 0-.5.4-.6 1-.6 0-.3-.5-.4-.8-.9-.3-.4-1.3-1-2.4-1-1 0-2 1-2.4 1.5-.4.4-1.2.6-1.4.6-.3 0-.4-.3-.7-.3h-1c-.4 0-.5.3-1 .2a7 7 0 0 0-1.5.1c-.3.1 0 .8.3.8.2 0 1 0 1.2.2a3 3 0 0 0 1.7.1c.8-.3 1.3.3 2.2.5h.3c0 .5 0 .8-.2.8h-.8l-.8-.4c-.4-.1-.7 0-.8.1a24 24 0 0 0-5.2 4c-.4.8-1 1.2-1.6 2.4-.3.6-1 1.3-1.3 2.4-.7.2-1.3.8-1.4 1-.1.1 0 .4.2.4 0 0 .2.3.4.3-.1 0 .1.3.3.3-.1 0 0 .4.2.4l1.6-1.6c0-.6.3-1.3.5-1.7.9-1 2-2.6 2.2-3 .2-.3 2-1 2.4-1.5l.1 3 1 3c.2 1 0 1.7 0 2.2 0 .4.1.5.5.7.4.2 1.8 0 2.3.1.9.3 1.6.3 2 .4a3 3 0 0 1 2.2.4c.3.3 1 1.8 1.2 2.4.3.6 1.7 1.4 2 1.8.2.3.5 1.2.4 1.6 0 .4 0 .6.4.6l1.8.3 1 .5 1.4.1c.4 0 .4-.7.2-.7a18.3 18.3 0 0 1-1.2-.3c-.5 0-1.4-.9-1.7-1.3-.4-.5-.6-1.1-.8-1.6a36 36 0 0 0-2-2.8l-1-2.3c-.1-.5-.5-.5-.8-.6-1.1-.3-1.5-.5-2.7-.7-.9-.2-1-.2-1.1-.8 0-.5-.4-1.4-.2-2l.2-1.2.3-1 .1-2zm.8 5.2a2 2 0 0 1-.9 0v-.3s-.1-.2 0-.2v-.6l.9-.1z"
        />
        <path
          stroke-width=".3"
          d="M106.6 103.7c.2.2.2 0 .7-.1.5-.2.8.2.6.6-.1.4-.1.7.4.8.5 0 .6-.4.7-.6l.5-.5c0-.5.6-.4 1-.3m.6-1.2c-.3.2-.8-.3-1-.7 0-.5-.4-.9-1-.9-.7 0-2 .4-2.2 1.1l-.1 1c-.2.1-.5 0-.5.2v.5m-4 4 1.3-.6"
        />
        <path
          stroke-width=".2"
          d="M103.6 107c.4.8.6 1.6 1.1 1.9m.7.3c.6.3 1 .2 1.5 0m-3.1 6c1.3 0 1.8.7 3 1 1 .3 2.5.1 4 .8m-7.4-6c.3.2.8.4 1.2.4m.5 0c.7.1 1.4.4 1.5.8m-1.7.7c.6.6 1.8 1.1 2.6 1.2"
        />
        <path
          stroke-width=".1"
          d="M105.8 104.3c.6 2 .7 2.8 2.1 3m-2.6-3c.6 1.9 1.3 2.9 2.6 3m-3.1-3.3c.6 2 1.5 3.3 3.1 3.4m7.2 15.4c-.3-.2-.3-.3-.5-.8l-.5-1-.4.2s-.2-.2 0-.2l.2-.2-.4-.7c-.2 0 0-.1.2-.2.1 0 .3-.2.2 0l.4.7h.2c.2-.2.3 0 .2.2l-.3.1.5 1c.2.4.2.6.2 1M115.1 120.7l-1.5.8m-1.4-1.1 2-1m-2.3.7 2-1M95.4 114.9l.6-.7m-1 .4.7-.6m-1 .3.7-.6m12.3-2.9h.7m-.7-.5h.6m-.6.3.6-.1m.8-5.7.4.2"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMtFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}
