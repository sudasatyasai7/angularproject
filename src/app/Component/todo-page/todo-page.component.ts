import { Component} from '@angular/core';
import { NgFor } from '@angular/common';
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  todoList:string[]=[];
  inputvalue:string=""
  remove(name:string){
    this.todoList=this.todoList.filter(value=>value!=name)
  }
  addTodo(){
    if(this.inputvalue!=''){
      this.todoList.push(this.inputvalue)
      this.inputvalue=''
    }
    else{
      alert("Empty")
    }
  }
  constructor(){ }
  ngOnInit():void{
    // this.todoList=["Task1","Task2"];
  }

}
