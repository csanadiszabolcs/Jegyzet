import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPipePipe } from '../../color-pipe.pipe';

export interface Note {
  id: number,
  title:string;
  content:string;
  priority:'Sürgős'| 'Nem sürgős';
}

@Component({
  selector: 'app-notesite',
  imports: [FormsModule],
  templateUrl: './notesite.component.html',
  styleUrl: './notesite.component.scss',
  standalone:true
})



export class NotesiteComponent implements OnInit {
@Input() catogory:string  ='Jegyzeteim';
@Output() noteAdding = new EventEmitter<Note>();

newNote: string = '';
newNotePriority: 'Sürgős' | 'Nem sürgős' = "Sürgős";
selectedIndex:number = 0;
notes:Note[] = [
  {
    id:1,
    title:'Bevasarlas',
    content:'Tej, vaj, paprika',
    priority:'Sürgős'
  },
  
 {
  id:2,
   title:'Hazimunka',
   content:'El rakni a szennyest',
   priority:'Nem sürgős'
  }

]
ngOnInit():void{
}
  
  // Jegyzet hozzáadása
  addNote(): void {
    if (this.newNote.trim()) {

      const newNotes: Note = {
        id:this.newNote.length+1,
        title: this.newNote.trim(),
        content:this.newNote.trim(),
        priority: this.newNotePriority,
       
      };


      this.notes.push(newNotes);
      this.saveNotes();
      this.newNote = ''; 
    }
  }

  // Jegyzet törlése
  deleteNote(index: number): void {
    this.notes.splice(index, 1);
    this.saveNotes();
  }

  // Jegyzetek betöltése a localStorage-ból
  loadNotes(): void {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      this.notes = JSON.parse(storedNotes);
    }
  }

  // Jegyzetek mentése a localStorage-ba
  saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  trackById(index: number, item: Note): number {
    return item.id;
  }
}
