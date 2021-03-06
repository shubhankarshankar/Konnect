import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ClassService } from 'src/app/_services/class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { StudentDetails } from 'src/app/interfaces';
import { ClassDetails } from '../classes.component';

@Component({
  selector: 'app-faculty-classes',
  templateUrl: './faculty-classes.component.html',
  styleUrls: ['./faculty-classes.component.scss'],
})
export class FacultyClassesComponent implements OnInit {
  constructor(
    private classService: ClassService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  role: string;
  data: any;
  facId: string;
  displayedColumns: string[] = ['_id', 'subject'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
    this.role = this.userService.getCurrentUser().role;
    if (this.role != 'Faculty') this.router.navigateByUrl('/');
    this.route.params.subscribe((params) => (this.facId = params['facId']));
    this.getFacClasses();
  }

  onRowClick(row: any) {
    this.router.navigateByUrl(`classes/details/${row._id}`);
  }

  doFilter(event: Event) {
    let value: string = (<HTMLInputElement>event.target).value;
    this.data.filter = value.trim().toLocaleLowerCase();
  }

  getFacClasses() {
    this.classService.getFacultyClasses(this.facId).subscribe({
      next: (data) => {
        console.log(data);

        this.data = new MatTableDataSource(data as []);
        this.data.sort = this.sort;
        this.data.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
