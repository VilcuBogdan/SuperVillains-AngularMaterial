import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Villain } from '../core/interfaces/villain.interface';
import { VillainService } from '../core/services/villain.service';

@Injectable({
  providedIn: 'root'
})
export class VillainStoreService {
 villain$ = new BehaviorSubject<Villain[]>([]);
 private updateVillain$ = new Subject<Villain>();
private addVillain$ = new Subject<Villain>();
private deleteVillain$ = new Subject<number>()

  constructor(private villainService: VillainService) { 
    this.addVillain$.subscribe((newVillain: Villain) => 
    (this.villain$.next([...this.villain$.getValue(), newVillain])));

    this.deleteVillain$.subscribe((id:number) =>
    (this.villain$.next(this.villain$.getValue().filter((villain) => {
      return villain.id != id
    }))));
this.updateVillain$.subscribe((updatedVillain)=>{
  this.villain$.next(this.villain$.getValue().map((villain) => {
    return villain.id === updatedVillain.id ? updatedVillain :villain;
  }))
})

    this.villainService.getVillains().subscribe((villains) =>(this.villain$.next(villains)));
  }

addNewVillain(villain: Villain) {
  this.addVillain$.next(villain);
}

deleteVillain(id : number) {
this.deleteVillain$.next(id)
}

updateVillain(payLoad:Villain, id:number) {
  this.villainService.editVillain(payLoad, id).subscribe((updatedVillain) =>{
    this.updateVillain$.next(updatedVillain)
  });

}

}
