import {Component, OnInit} from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  likeMovie: number;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    console.log(this.dataTransferService.store.getValue())
  }

  likeCounter(): void {
    return JSON.parse(<string>localStorage.getItem('likeNumber'))
  }
}
