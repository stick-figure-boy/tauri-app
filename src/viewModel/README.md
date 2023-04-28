# ViewModel

In this directory, responses received form the backend are molded for the `View`.
It also molds requests received from the `View` to communicate with the backend.

In other words, this directory serves as a middleman between the backend and the `View`.

You should not reference `Repository` directly from the `View`.

```
ex)

viewModel
  └── member
        ├── MemberViewModel.ts
        └── model.ts
```
