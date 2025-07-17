# Jackpot Wheel Component Guide

## Overview
The `JackpotWheel` component is a React component that renders a circular wheel image inside a div, designed for jackpot games. It provides smooth spinning animations, customizable segments, and interactive functionality.

## Features
- ✅ **Circular wheel rendering** - Displays any image as a circular wheel
- ✅ **Smooth spin animation** - Realistic spinning with easing and multiple rotations
- ✅ **Customizable segments** - Configure number of prize segments
- ✅ **Interactive pointer** - Visual indicator for winning position
- ✅ **Center spin button** - Prominent button to trigger spins
- ✅ **Responsive design** - Works on mobile and desktop
- ✅ **Accessibility support** - Respects reduced motion preferences
- ✅ **TypeScript support** - Full type safety

## Component Structure

```typescript
interface JackpotWheelProps {
  wheelImage: string;           // Required: URL or path to wheel image
  segments?: number;            // Optional: Number of segments (default: 8)
  onSpinComplete?: (winningSegment: number) => void; // Callback when spin ends
  disabled?: boolean;           // Optional: Disable the wheel
  size?: number;               // Optional: Wheel size in pixels (default: 400)
  duration?: number;           // Optional: Spin duration in ms (default: 3000)
}
```

## Usage Examples

### Basic Usage
```tsx
import JackpotWheel from './components/JackpotWheel';

function App() {
  return (
    <JackpotWheel 
      wheelImage="/path/to/your/wheel-image.png"
    />
  );
}
```

### Advanced Usage with Callbacks
```tsx
import JackpotWheel from './components/JackpotWheel';

function GameComponent() {
  const [lastWin, setLastWin] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSpinComplete = (winningSegment: number) => {
    setLastWin(winningSegment);
    console.log(`Player won segment: ${winningSegment}`);
    
    // Add your game logic here
    // e.g., award prizes, update score, etc.
  };

  return (
    <div>
      <JackpotWheel
        wheelImage="/images/my-jackpot-wheel.png"
        segments={12}
        onSpinComplete={handleSpinComplete}
        disabled={isDisabled}
        size={350}
        duration={4500}
      />
      
      {lastWin !== null && (
        <div>🎉 You won segment {lastWin}!</div>
      )}
    </div>
  );
}
```

## Component Architecture

### HTML Structure
```
div.jackpot-wheel-container
  └── div.jackpot-wheel-wrapper
      ├── div.wheel-pointer
      │   └── div.pointer-triangle (visual indicator)
      ├── div.jackpot-wheel (spinning container)
      │   └── img.wheel-image (your wheel image)
      └── button.spin-button (center spin button)
```

### CSS Classes
- `.jackpot-wheel-container` - Outer container with centering
- `.jackpot-wheel-wrapper` - Main wheel wrapper with golden gradient background
- `.wheel-pointer` - Positioned pointer/indicator at top
- `.pointer-triangle` - Red triangle pointer styling
- `.jackpot-wheel` - Spinning wheel container with rotation transform
- `.wheel-image` - The actual wheel image (circular, responsive)
- `.spin-button` - Center button with gradient and hover effects

### Animation Logic
1. **Random Calculation**: Determines winning segment randomly
2. **Multiple Spins**: Adds 5-10 full rotations for realism
3. **Easing Function**: Uses cubic-bezier for smooth deceleration
4. **Final Position**: Stops at calculated winning segment
5. **Callback Trigger**: Fires `onSpinComplete` when animation ends

## Wheel Image Requirements

### Recommended Image Specifications
- **Format**: PNG or SVG for best quality
- **Dimensions**: Square aspect ratio (e.g., 800x800px)
- **Segments**: Evenly divided segments matching the `segments` prop
- **Background**: Transparent or solid color
- **Quality**: High resolution for crisp display

### Example Wheel Design
```
     12
 11      1
10        2
9          3
8          4
 7        5
     6
```

## Styling Customization

### CSS Variables (you can override these)
```css
.jackpot-wheel-wrapper {
  --wheel-border-color: #ffd700;
  --pointer-color: #ff4444;
  --button-bg: linear-gradient(135deg, #ff6b6b, #ee5a52);
  --button-size: 80px;
}
```

### Custom Styling Example
```css
/* Custom wheel styling */
.my-custom-wheel .jackpot-wheel-wrapper {
  background: linear-gradient(45deg, #purple, #blue);
  border: 5px solid #gold;
}

.my-custom-wheel .spin-button {
  background: linear-gradient(135deg, #green, #darkgreen);
  width: 100px;
  height: 100px;
}
```

## Performance Considerations

- Uses `transform` instead of changing position for smooth animations
- `will-change: transform` hints to browser for optimization
- Disables pointer events on image to prevent drag
- Respects `prefers-reduced-motion` for accessibility

## Browser Support

- Modern browsers with CSS transform support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## Integration Tips

1. **Image Loading**: Ensure wheel image is preloaded for instant display
2. **Sound Effects**: Add audio feedback in the `onSpinComplete` callback
3. **Game Logic**: Implement prize/reward systems based on winning segment
4. **Analytics**: Track spin results for game balancing
5. **Animations**: Add entrance/exit animations for better UX

## Troubleshooting

### Common Issues
- **Image not circular**: Ensure CSS `border-radius: 50%` is applied
- **Jerky animation**: Check for conflicting CSS transforms
- **Wrong segment calculation**: Verify segments prop matches actual wheel divisions
- **Button not clickable**: Check z-index and positioning

### Debug Mode
```tsx
// Add debug logging
const handleSpinComplete = (segment: number) => {
  console.log('Winning segment:', segment);
  console.log('Segment angle:', 360 / segments);
  console.log('Final rotation:', rotation);
};
```

This component provides a complete, production-ready jackpot wheel that you can easily integrate into any React application!