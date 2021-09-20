import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectosService } from '../data/proyectos.service';

@Component({
  selector: 'app-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss']
})
export class ProjectEditorComponent implements OnInit {
  public transaccionId = '';
  public transaccion = { id: '', kind: "" };
  constructor(private route: ActivatedRoute, private service: ProyectosService) {
    // const projectId = route.snapshot.params['id'];
    // this.projectId = projectId;
  }

  ngOnInit(): void {
    this.transaccionId = this.route.snapshot.params['id'];
    const projects = this.service.getTransacciones();
    this.transaccion = projects.find(p => p.id === this.transaccionId);
  }
}
