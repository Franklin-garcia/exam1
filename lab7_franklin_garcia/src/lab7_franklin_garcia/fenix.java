/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package lab7_franklin_garcia;

import java.util.ArrayList;
import javax.swing.Icon;

/**
 *
 * @author Franklin Garcia
 */
public class fenix extends guerreros {
    
    private ArrayList<guerreros> fenix = new ArrayList();   

    public fenix() {
        super();
    }

    public fenix(String nombre, String nickname, int poder_ataque, int porder_defensa, int salud, int puntos) {
        super(nombre, nickname, poder_ataque, porder_defensa, salud, puntos);
    }

    public ArrayList<guerreros> getFenix() {
        return fenix;
    }

    public void setGuerreros(ArrayList<guerreros> fenix) {
        this.fenix = fenix;
    }
    

    @Override
    public String toString() {
        return nombre;
    }
    public void ataque(){
        
    }
}
