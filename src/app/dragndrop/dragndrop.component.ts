import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css'],
})

export class DragndropComponent {

  todo: BaseObjectHtml[];
  done: BaseObjectHtml [];

  constructor(){
  let obj1 = new ButtonObjHtml();
  let obj2 = new ButtonObjHtml2();
  let obj3 = new ButtonObjHtml3();
  let obj4 = new ButtonObjHtml4();

  this.todo = [obj1,obj2,obj3,obj4];
  this.done = [];
}


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}

//Obj1
export interface IObjectHtml
{
  toRawText(): string;
}

export class BaseObjectHtml
{
  constructor(name: string){
    this.name=name;
  }
  name: string;
}


export class ButtonObjHtml extends BaseObjectHtml implements IObjectHtml 
{
  constructor()
  {
    super('Bloco de Título');
  }

  
  public toRawText(): string
  {
    return `
<!-- text -->
<table>
  <tr>
    <td>
      <p> Title here </p>
    </td>
  </tr>
</table>`;
  }
}

//Obj2
export interface IObjectHtml2
{
  toRawText(): string;
}

export class BaseObjectHtml2
{
  constructor(name: string){
    this.name=name;
  }
  name: string;
}


export class ButtonObjHtml2 extends BaseObjectHtml2 implements IObjectHtml 
{
  constructor()
  {
    super('Bloco de Texto');
  }

  
  public toRawText(): string
  {
    return `
<!-- text -->
<table>
  <tr>
    <td>
      <p> Text here </p>
    </td>
  </tr>
</table>`;
  }
}

// Obj3
export interface IObjectHtml3
{
  toRawText(): string;
}

export class BaseObjectHtml3
{
  constructor(name: string){
    this.name=name;
  }
  name: string;
}


export class ButtonObjHtml3 extends BaseObjectHtml3 implements IObjectHtml 
{
  constructor()
  {
    super('Bloco de Imagem');
  }

  
  public toRawText(): string
  {
    return `
<!-- image -->
<table>
  <tr>
    <td>
      <img src="../sample.png">
    </td>
  </tr>
</table>`;
  }
}

// Obj4
export interface IObjectHtml4
{
  toRawText(): string;
}

export class BaseObjectHtml4
{
  constructor(name: string){
    this.name=name;
  }
  name: string;
}


export class ButtonObjHtml4 extends BaseObjectHtml4 implements IObjectHtml 
{
  constructor()
  {
    super('Bloco de Botão');
  }

  
  public toRawText(): string
  {
    return `
<!-- button -->
<table>
  <tr>
    <td>
      <a href="../sample.html">clique aqui</a>
    </td>
  </tr>
</table>`;
  }
}