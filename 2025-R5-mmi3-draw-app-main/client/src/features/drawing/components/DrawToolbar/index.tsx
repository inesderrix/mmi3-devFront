import { useDrawingStore } from "../../store/useDrawingStore"

//Je define les couleurs dispo dans la toolbar
const COLORS = ['black', 'red', 'blue', 'orange'];

export function DrawToolbar() {

  const { strokeColor, setStrokeColor } = useDrawingStore();

  return (
    <div className="flex gap-2 p-2">
      {COLORS.map((color) => (
        <button
          key={color}
          onClick={() => setStrokeColor(color)}
          className={[
            'w-8 h-8 rounded-full border-2',
            strokeColor === color
              ? 'ring-2 ring-offset-2 ring-primary'
              : '',
          ].join(' ')}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}