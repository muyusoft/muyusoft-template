import { View, Image, StyleProp, ImageStyle } from "react-native";
import { ICON_REGISTRY, type IconName } from "./index";

interface IconRendererProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}

/**
 * Renderiza un ícono SVG por nombre type-safe
 * - Busca en ICON_REGISTRY (centralizado en index.ts)
 * - TypeScript garantiza que el nombre es válido (IconName)
 * - Soporta size y color dinámicos
 */
export function IconRenderer({
  name,
  size = 24,
  color,
  style,
}: IconRendererProps) {
  const IconComponent = ICON_REGISTRY[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <View style={[{ width: size, height: size }, style as any]}>
      <Image
        source={IconComponent}
        style={{
          width: size,
          height: size,
        }}
        tintColor={color}
      />
    </View>
  );
}

export default IconRenderer;
