import { Action } from '@ngrx/store'

export enum ProjectActionTypes {
    UPDATE_NODES = 'UPDATE_NODES',
    UPDATE_LINKS = 'UPDATE_LINKS',
    UPDATE_DRAWINGS = 'UPDATE_DRAWINGS',
    UPDATE_SYMBOLS = 'UPDATE_SYMBOLS'
}

export class UpdateNodes implements Action {
    readonly type = ProjectActionTypes.UPDATE_NODES
    constructor(public payload: any[]) {}
}

export class UpdateLinks implements Action {
    readonly type = ProjectActionTypes.UPDATE_LINKS
    constructor(public payload: any[]) {}
}

export class UpdateDrawings implements Action {
    readonly type = ProjectActionTypes.UPDATE_DRAWINGS
    constructor(public payload: any[]) {}
}

export class UpdateSymbols implements Action {
    readonly type = ProjectActionTypes.UPDATE_SYMBOLS
    constructor(public payload: any[]) {}
}

export type ProjectActions = UpdateNodes | UpdateLinks | UpdateDrawings | UpdateSymbols
