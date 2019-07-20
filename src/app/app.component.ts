import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';

  @ViewChild('home')
  home: ElementRef;

  @ViewChild('about')
  about: ElementRef;

  @ViewChild('tech')
  tech: ElementRef;

  
  @ViewChild('project')
  project: ElementRef;

  main : string = "Hello ! Welcome to My Website"
  birthdate:string = "09 October 1996";
  age: string = "22 years old";
  personality: string = 'fast learning and hard working, team player, positive attitude and open mind';
  nationality: string = "Thai";
  email : string = "Thiwakorn.chueykead@hotmail.com";
  religion: string = "Buddhist";
  th : string = "TH";
  en : string = '<b>EN<b>';
  enColor : string = 'greenyellow';
  spath = "../assets/img/angular.png";
  navbarOpen : boolean = false;
  engLang : boolean  = true;
  thLang : boolean  = false;

  constructor(){
 


  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  onclickChangeTh(){
    this.main  = "ยินดีต้อนรับ"
    this.birthdate = "09 ตุลาคม 2539";
    this.age= "22 ปี";
    this.personality = 'เรียนรู้ได้เร็วและอดทนต่องานหนักได้, สามารถทำงานเป็นทีม, มีทัศนคติเชิงบวก และยอมรับฟังความคิดเห็น';
    this.religion = "พุทธ"
    this.nationality = "ไทย";
    this.engLang = false;
    this.thLang = true;
    this.en  = 'EN';
    this.th  = '<b>TH</b>';
 
  }
  onclickChangeEng(){
    this.main = "Hello ! Welcome to My Website"
    this.engLang = true;
    this.thLang = false;
    this.en  = '<b>EN</b>';
    this.th = 'TH'
    this.main = "Hello ! Welcome to My Website"
  this.birthdate= "09 October 1996";
  this.age= "22 years old";
  this.personality= 'fast learning and hard working, team player, positive attitude and open mind';
  this.nationality = "Thai";
  this.email  = "Thiwakorn.chueykead@hotmail.com";
  this.religion = "Buddhist";
  }
  
  onClickHome(): void {
    this.home.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
  onClickAbout(): void {
    this.about.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
  onClickTech(): void {
    this.tech.nativeElement.scrollIntoView({behavior: 'smooth'}); 

  }

  onClickProject(): void {
    this.project.nativeElement.scrollIntoView({behavior: 'smooth'}); 
  }
  
 onclickURL1() {
  window.open('https://github.com/Kornthiwakorn/WebApplicationForCarParking','_blank');
}
onclickURL2() {
  window.open('https://github.com/Kornthiwakorn/CarParkingApplication','_blank');
}
onclickURL3() {
  window.open('https://github.com/Kornthiwakorn/UltrasonicForCarParking','_blank');
}
onclickURL4() {
  window.open('https://github.com/Kornthiwakorn/BuildSpecPc','_blank');
}
onclickURL5(){
  window.open('https://www.facebook.com/korncz7','_blank');
}  
onclickURL6(){
  window.open('https://github.com/Kornthiwakorn','_blank');
} 
  

}

