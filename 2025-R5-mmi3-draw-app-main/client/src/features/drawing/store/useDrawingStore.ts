import { create } from 'zustand';

// Création d'un pour pouvoir partager la couleur du trait au fichier drawtoolbar et drawarea
type DrawingState = {
    strokeColor: string;
    setStrokeColor: (color: string) => void;
};

export const useDrawingStore = create<DrawingState>((set) => ({
    strokeColor: 'black',
    setStrokeColor: (color) => set({ strokeColor: color }),
}));
