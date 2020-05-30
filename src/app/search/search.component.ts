import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: string;
  userObject: any;
  constructor(private service: GithubService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.getUserDetails(this.username).subscribe(data => {
      this.userObject = data;
      console.log(this.userObject)
      
    })
  }

}
