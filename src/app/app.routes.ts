import { Routes } from '@angular/router';
import { AddEmpComponent } from './components/add-emp/add-emp.component';
import { DatabindingComponent } from './components/data-binding/databinding.component';
import { AttributeDirectiveComponent } from './components/directive/attribute-directive/attribute-directive.component';
import { StucturalDirectiveComponent } from './components/directive/stuctural-directive/stuctural-directive.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';

export const routes: Routes = [
  {
    path: 'add-emp',
    component: AddEmpComponent,
  },
  {
    path: 'data-binding',
    component: DatabindingComponent,
  },
  {
    path: 'attribute-directive',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'structural-directive',
    component: StucturalDirectiveComponent,
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
];
