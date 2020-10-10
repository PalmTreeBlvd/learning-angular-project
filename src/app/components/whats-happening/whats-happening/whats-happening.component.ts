import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/models/theme';
import { ColorThemeService } from 'src/app/services/color-theme.service';

@Component({
  selector: 'app-whats-happening',
  templateUrl: './whats-happening.component.html',
  styleUrls: ['./whats-happening.component.css'],
})
export class WhatsHappeningComponent implements OnInit {
  colorTheme: Theme;

  // "private colorThemeService: ColorThemeService" is shorthand for dependency injection. See this video @6.32: https://www.youtube.com/watch?v=xaYuxILKBlo&t=41s&ab_channel=AndreMadarang
  constructor(private colorThemeService: ColorThemeService) {
  }

  ngOnInit(): void {
    this.colorThemeService.getTheme().subscribe((data) => {
      this.colorTheme = data;
    });
  }
}
