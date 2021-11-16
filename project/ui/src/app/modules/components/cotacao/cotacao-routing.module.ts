import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CotacaoComponent } from './cotacao.component';
import { CotacaoTabelaComponent } from './cotacao-tabela/cotacao-tabela.component';
import { CotacaoExternaComponent } from './cotacao-externa/cotacao-externa.component';

const routes: Routes = [
    {
        path: 'grupo-cotacao',
        component: CotacaoComponent
    },
    {
        path: 'cotacao-fornecedor',
        component: CotacaoExternaComponent
    },
    {
        path: '',
        component: CotacaoTabelaComponent
    }
];

@NgModule ({
    imports: [ CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class CotacaoRoutingModule {}