import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDataService } from '../services/student-data.service';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  providers: [StudentDataService]
})
export class DepartmentListComponent implements OnDestroy {

  

  constructor(private router: Router, private route: ActivatedRoute) {

  }


  ngOnDestroy(): void {
    console.log("Departemtn destroyed")
  }

  computerRedirect() {
    this.router.navigate(['compDept', 'computer'], { relativeTo: this.route });
  }
  mechicalRediect() {
    this.router.navigate(['mechDept', 'mechanical'], { relativeTo: this.route });
  }
}

@Component({
  selector: 'app-user-ComputerDept',
  template: `
    <div class="inline-container">
      <h1>ComputerDept Component</h1>
    </div>
  `,
  styles: [`
    .inline-container {
      border: 1px solid #ddd;
      padding: 20px;
      background-color: #f5f5f5;
      text-align: center;
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }
  `]

})
export class ComputerDept implements OnInit {

  constructor(private route: ActivatedRoute) {
    console.log('Constructor called');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('dept');
      console.log(id)
      // Do something with the id parameter
    });
  }

}


@Component({
  selector: 'app-user-MechanicalDept',
  template: `
    <div class="inline-container">
      <h1>MechanicalDept Component</h1>
    </div>
  `,
  styles: [`
    .inline-container {
      border: 1px solid #ddd;
      padding: 20px;
      background-color: #f5f5f5;
      text-align: center;
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }
  `]

})
export class MechanicalDept {

  constructor() {
    console.log('Constructor called');
  }

}