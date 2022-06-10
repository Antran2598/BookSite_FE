import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopping',
    loadChildren: () =>
      import('./user/shopping/shopping.module').then((m) => m.ShoppingModule),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./admin/user-admin/user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'book',
    loadChildren: () =>
      import('./admin/book-admin/book//book.module').then((m) => m.BookModule),
  },

  {
    path: 'insertBook',
    loadChildren: () =>
      import('./admin/book-admin/insert-book/insert-book.module').then(
        (m) => m.InsertBookModule
      ),
  },

  {
    path: 'category',
    loadChildren: () =>
      import('./admin/admin-book-details/category/category.module').then(
        (m) => m.CategoryModule
      ),
  },

  {
    path: 'author',
    loadChildren: () =>
      import('./admin/admin-book-details/author/author.module').then(
        (m) => m.AuthorModule
      ),
  },

  {
    path: 'publisher',
    loadChildren: () =>
      import('./admin/admin-book-details/publisher/publisher.module').then(
        (m) => m.PublisherModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterModule),
  },

  {
    path: 'cartItems',
    loadChildren: () =>
      import('./cart-items/cart-items.module').then((m) => m.CartItemsModule),
  },

  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },

  {
    path: 'bookDetail/:id',
    loadChildren: () =>
      import('./book-detail/book-detail.module').then(
        (m) => m.BookDetailModule
      ),
  },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
