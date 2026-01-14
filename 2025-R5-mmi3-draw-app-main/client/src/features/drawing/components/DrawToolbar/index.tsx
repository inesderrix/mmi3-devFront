import { useDrawingStore } from "../../store/useDrawingStore"

//Je define les couleurs dispo dans la toolbar
const BRIGHT_COLORS = ['black', 'white', 'gray', '#FF0000', '#FFA500', '#FFFF00', '#00ff00', '#0000FF', '#9900f1', '#FF1493', '#654321'];
const PASTEL_COLORS = ['#7F7F7F', '#F2F2F2', '#D3D3D3', '#FFA3A3', '#FFCBA3', '#FFF5A3', '#A3FFC4', '#A3D4FF', '#D9A4FF', '#FFC0CB','#D8B4A3'];


const WIDTHS = [2, 4, 6, 8, 10, 15, 20];

export function DrawToolbar() {

  const { strokeWidth, setStrokeWidth } = useDrawingStore();

  const { strokeColor, setStrokeColor } = useDrawingStore();

  return (
    <div className=" bg-base-100 rounded-box shadow-md p-4">
      <span className="font-bold">Palette de couleur: </span>
      <div className="flex gap-2 p-2">
        {PASTEL_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setStrokeColor(color)}
            className={[
              'w-8 h-8 rounded-full shadow-md',
              strokeColor === color
                ? 'ring-2 ring-offset-2 ring-primary'
                : '',
            ].join(' ')}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div className="flex gap-2 p-2">
        {BRIGHT_COLORS.map((color) => (
          <button
            key={color}
            onClick={() => setStrokeColor(color)}
            className={[
              'w-8 h-8 rounded-full shadow-md',
              strokeColor === color
                ? 'ring-2 ring-offset-2 ring-primary'
                : '',
            ].join(' ')}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <span className="font-bold">Épaisseur:</span>
      <div className="flex gap-2 p-2">
        {WIDTHS.map((w) => (
          <button
            key={w}
            onClick={() => setStrokeWidth(w)}
            className={`w-8 h-8 rounded-full border flex items-center justify-center 
              ${strokeWidth === w ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
          >
            <div className="bg-current rounded-full" style={{ width: w, height: w }} />
          </button>
        ))}
      </div>
    </div>
  )
}