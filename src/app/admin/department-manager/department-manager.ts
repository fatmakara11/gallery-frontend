import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../services/departmentservice';
import { Department } from '../../models/department.model';

@Component({
  selector: 'app-department-manager',
  standalone: false,
  templateUrl: './department-manager.html',
  styleUrls: ['./department-manager.scss']
})
//Kullanıcı arayüzünü kontrol eder. Service katmanı üzerinden gelen verileri alır ve HTML üzerinde kullanıcıya gösterir.
export class DepartmentManager implements OnInit {
  departments: Department[] = [];  //departman listesi
  newDepartment: Department = { name: '', description: '' };     //yeni departman icin gecici nesne
  editMode: boolean[] = [];      //hangi kartın düzenleme modunda oldugunu takip eden liste

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.fetchDepartments();   //sayfa ilk acıldıgında departmanlar cekılır
  }

  fetchDepartments() {  //tum departmanları servıceden ceker
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
      this.editMode = new Array(data.length).fill(false);
    });
  }

  addDepartment() {  //Yeni departman ekler
    if (!this.newDepartment.name || !this.newDepartment.description) return;

    this.departmentService.saveDepartment(this.newDepartment).subscribe(() => {
      this.newDepartment = { name: '', description: '' };
      this.fetchDepartments();
    });
  }

  deleteDepartment(id: number) {              //Departmanı siler
    this.departmentService.deleteDepartment(id).subscribe(() => {
      this.fetchDepartments();
    });
  }

  enableEdit(index: number) {            //Belirli index’teki kartı düzenleme moduna alır
    this.editMode = this.editMode.map((_, i) => i === index);
  }

  saveEdit(index: number) {      //Güncellenen veriyi backend’e gönderir
    const dept = this.departments[index];
    this.departmentService.updateDepartment(dept.id!, dept).subscribe(() => {
      this.editMode[index] = false;
      this.fetchDepartments();
    });
  }
}
