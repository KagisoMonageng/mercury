import { Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

export const routes: Routes = [
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path:'orders',
        component: OrdersComponent
    },
    {
        path: 'reservations',
        component:ReservationsComponent
    }
];
