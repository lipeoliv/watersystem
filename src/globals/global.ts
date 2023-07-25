import { Injectable } from "@angular/core";

@Injectable()
export class GlobalVar{
    private idusuario: string = "";
    private user: string = "";
    private level: string = "";

    authenticateUser(idusuario: string, user: string, level: string){
        this.idusuario = idusuario;
        this.user = user;
        this.level = level;

    }
    isAuthenticated (){
        if(this.user != "" && this.level != "" ) {
            return true;
        }

        return false;
    }

    unAuthenticateUser(){
        this.user = "";
        this.idusuario = "";      
    }

    getIduser(){
        return this.idusuario;
    }

    getUser(){
        return this.user;
    }

    getLevel(){
        return this.level;
    }
}