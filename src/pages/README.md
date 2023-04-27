# Pages

In this directory, place a page for each feature.
The file name of the page file should be as follows.

```
ex)
XxxPage.tsx

The file name must pascal case and end with `Page`.
```

The components placed here are specific a page or feature.
Page or Component files describe only the DOM.
The business logic is described in the `hooks.ts` file and the style in `style.ts`.

```
ex)

pages
  └── settings
        ├── components
        |     └── tabs
        |           └── settingMenuTab
        |                 ├── SettingMenuTab.tsx
        |                 ├── hooks.test.ts
        |                 ├── style.ts
        |                 └── hooks.ts
        ├── profile
        |     ├── components
        |     |     └── avatar
        |     |           └── avatarUploader
        |     |                 ├── AvatarUploader.tsx
        |     |                 ├── hooks.test.ts
        |     |                 ├── style.ts
        |     |                 └── hooks.ts
        |     ├── ProfilePage.tsx
        |     ├── hooks.test.ts
        |     ├── style.ts
        |     └── hooks.ts
        └── Notify
              ├── NotifyPage.tsx
              ├── hooks.test.ts
              ├── style.ts
              └── hooks.ts
```
