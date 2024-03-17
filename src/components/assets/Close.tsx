
export default function Close({ className, onClose, width, height, color }: CloseType) {
  return (
    <svg fill={color} onClick={onClose} className={className}
      xmlns="http://www.w3.org/2000/svg"
      height={height || "35"} viewBox="0 -960 960 960" width={width || "35"}>
      <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
    </svg>
  )
}

interface CloseType {
  className?: string,
  onClose: () => any | undefined
  width?: number
  height?: number
  color?: string | undefined
}