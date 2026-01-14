import { create } from 'zustand';

// Création d'un pour pouvoir partager la couleur du trait et la taille au fichier drawtoolbar et drawarea
type DrawingState = {
    strokeColor: string;
    strokeWidth: number;
    setStrokeColor: (color: string) => void;
    setStrokeWidth: (width: number) => void;
};

export const useDrawingStore = create<DrawingState>((set) => ({
    strokeColor: 'black',
    strokeWidth: 4,
    setStrokeColor: (color) => set({ strokeColor: color }),
    setStrokeWidth: (width) => set({ strokeWidth: width })
}));
