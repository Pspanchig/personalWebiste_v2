import { Component, signal } from '@angular/core';
import { Navbar } from '../../assets/shared/navbar/navbar';
import { EduactionApisService, EducationAPI } from '../../service/eduaction-apis.service';
import { CertAPI, CertsApisService } from '../../service/certs-apis.service';
import { SkillAPI, SkillsApisService } from '../../service/skills-apis.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-start',
  imports: [Navbar,RouterLink],
  templateUrl: './start.html',
  styleUrl: './start.css',
})
export class Start {
  
  // Education variables
  public loadingEducation = signal<boolean>(true);
  public showMoreEduation = signal<boolean>(true);
  
  // Certification variables
  public EduOrCert = signal<boolean>(true);
  public loadingCertificados = signal<boolean>(true);
  public indexCert = signal<number>(0);

  // Skills variables
  public loadingSkills = signal<boolean>(true)
  public indexSkill = signal<number>(0)

  constructor(
    private educationAPI: EduactionApisService,
    private certsAPI: CertsApisService,
    private skillsAPI: SkillsApisService
    ) {
    this.cargarEducacionAPI();
    this.CargarCertificadosAPI();    
    this.cargarSkillsAPI()
  }

  // Listas de edcuacion
  listEducation: Array<EducationAPI> = [];
  visibleEducation = signal<EducationAPI[]>([]);

  // Listas de certificados
  listaCertificados: Array<CertAPI> = [];
  visibleCertificados = signal<CertAPI[]>([]);

  // Listas de skills
  listaSkills: Array<SkillAPI>= []
  visibleSkills = signal<SkillAPI[]>([]);

  // Funciones education
  cargarEducacionAPI() {
    this.educationAPI.list().subscribe({
      next: (res) => {
        this.listEducation = res;
        this.cargarDos();
        this.loadingEducation.set(false);
      },
      error: (err) => {
        console.error('Error fetching education data:', err);
        this.loadingEducation.set(false);
      }
    });
  }

  changeCertEd(value: boolean) {
    this.EduOrCert.set(value);
  }

  isEducationTabActive() {
    return this.EduOrCert();
  }

  isCertificationTabActive() {
    return !this.EduOrCert();
  }

  cargarDos(){
    this.showMoreEduation.set(!this.showMoreEduation());
    const newLists: Array<EducationAPI> = [];
    if(this.showMoreEduation()){
      newLists.push(...this.listEducation.slice(0,2));
      this.visibleEducation.set(newLists);
    }
    else {
        newLists.push(...this.listEducation.slice(1,3));
        this.visibleEducation.set(newLists);
    }
    
  }

  // Funciones certificados
  CargarCertificadosAPI() {
    this.certsAPI.list().subscribe({
      next: (res) => {
        this.listaCertificados = res;
        this.cargarDosCertificados();
        this.loadingCertificados.set(false);
      },
      error: (err) => {
        console.error('Error fetching certification data:', err);
        this.loadingCertificados.set(false);
      }
    });
  }
  
  cambiarIndiceCert(){
    const nextIndex = this.indexCert() + 2;
    this.indexCert.set(nextIndex >= this.listaCertificados.length ? 0 : nextIndex);
    this.cargarDosCertificados();
  }

  cargarDosCertificados(){
    const start = this.indexCert();
    const end = start + 2;
    this.visibleCertificados.set(this.listaCertificados.slice(start, end));
  }

  // Funciones Skills
  cargarSkillsAPI() {
    this.skillsAPI.list().subscribe({
      next: (res) => {
        this.listaSkills = res;
        this.cargarSkillsLista();
        this.loadingSkills.set(false);
      },
      error: (err) => {
        console.error('Error fetching skills data:', err);
        this.loadingSkills.set(false);
      }
    });
  }

  cambiarIndiceSkill() {
    const nextIndex = this.indexSkill() + 4;
    this.indexSkill.set(nextIndex >= this.listaSkills.length ? 0 : nextIndex);
    this.cargarSkillsLista();
  }

  cargarSkillsLista() {
    const start = this.indexSkill();
    const end = start + 4;
    this.visibleSkills.set(this.listaSkills.slice(start, end));
  }

}
