import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentInfoComponent } from './components/student-info/student-info.component';
import { FacultyInfoComponent } from './components/faculty-info/faculty-info.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { MarksComponent } from './components/marks/marks.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { AuthenticationGuard } from './_guards/authentication.guard';
import { FacultyDetailComponent } from './components/faculty-info/faculty-detail/faculty-detail.component';
import { ClassesComponent } from './components/classes/classes.component';
import { FacultyDetailsUpdateComponent } from './components/faculty-info/faculty-details-update/faculty-details-update.component';
import { StudentDetailsComponent } from './components/student-info/student-details/student-details.component';
import { StudentDetailsUpdateComponent } from './components/student-info/student-details-update/student-details-update.component';
import { AnnouncementAddComponent } from './components/announcements/announcement-add/announcement-add.component';
import { AnnouncementUpdateComponent } from './components/announcements/announcement-update/announcement-update.component';
import { FacultyInfoAddComponent } from './components/faculty-info/faculty-info-add/faculty-info-add.component';
import { StudentInfoAddComponent } from './components/student-info/student-info-add/student-info-add.component';
import { AssignmentDetailsComponent } from './components/assignments/assignment-details/assignment-details.component';
import { ClassDetailsComponent } from './components/classes/class-details/class-details.component';
import { FacultyClassesComponent } from './components/classes/faculty-classes/faculty-classes.component';
import { AssignmentCreateComponent } from './components/assignments/assignment-create/assignment-create.component';
import { ClassStudentComponent } from './components/classes/class-student/class-student.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./routing_modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./routing_modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./routing_modules/contact/contact.module').then(
        (m) => m.ContactModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'classes/all',
    loadChildren: () =>
      import('./routing_modules/classes/classes.module').then(
        (m) => m.ClassesModule
      ),
  },
  {
    path: 'classes/details/:id',
    component: ClassDetailsComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'classes/details/:classId/:studentId',
    component: ClassStudentComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'classes/:facId',
    component: FacultyClassesComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./routing_modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./routing_modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'student-info',
    loadChildren: () =>
      import('./routing_modules/student-info/student-info.module').then(
        (m) => m.StudentInfoModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'faculty-info',
    loadChildren: () =>
      import('./routing_modules/faculty-info/faculty-info.module').then(
        (m) => m.FacultyInfoModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'faculty-info/add',
    component: FacultyInfoAddComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'student-info/add',
    component: StudentInfoAddComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'faculty-info/:id',
    component: FacultyDetailComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'update',
        component: FacultyDetailsUpdateComponent,
      },
    ],
  },
  {
    path: 'student-info/:id',
    component: StudentDetailsComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'update',
        component: StudentDetailsUpdateComponent,
      },
    ],
  },
  {
    path: 'announcements',
    loadChildren: () =>
      import('./routing_modules/announcements/announcements.module').then(
        (m) => m.AnnouncementsModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'assignments/:id',
    component: AssignmentDetailsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'assignments/create/:classId',
    component: AssignmentCreateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'announcements/add',
    component: AnnouncementAddComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'announcements/update/:id',
    component: AnnouncementUpdateComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'marks',
    loadChildren: () =>
      import('./routing_modules/marks/marks.module').then((m) => m.MarksModule),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'assignments',
    loadChildren: () =>
      import('./routing_modules/assignments/assignments.module').then(
        (m) => m.AssignmentsModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'attendance',
    loadChildren: () =>
      import('./routing_modules/attendance/attendance.module').then(
        (m) => m.AttendanceModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  ContactComponent,
  ProfileComponent,
  DashboardComponent,
  StudentInfoComponent,
  FacultyInfoComponent,
  AnnouncementsComponent,
  MarksComponent,
  AttendanceComponent,
  AssignmentsComponent,
  FacultyDetailComponent,
  ClassesComponent,
  StudentDetailsComponent,
  StudentDetailsUpdateComponent,
  AnnouncementAddComponent,
  AnnouncementUpdateComponent,
  FacultyInfoAddComponent,
  StudentInfoAddComponent,
  AssignmentDetailsComponent,
  ClassDetailsComponent,
  FacultyClassesComponent,
  AssignmentCreateComponent,
  FacultyDetailsUpdateComponent,
  ClassStudentComponent,
];
