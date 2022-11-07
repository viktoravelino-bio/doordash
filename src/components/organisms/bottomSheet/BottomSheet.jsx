import { BottomSheet as RSBottomSheet } from 'react-spring-bottom-sheet';
import { BSRestaurantSection } from '../../molecules/BSRestaurantSection/BSRestaurantSection';

export function BottomSheet({ isOpen, restaurantList }) {
  return (
    <RSBottomSheet
      open={isOpen}
      blocking={false}
      defaultSnap={({ maxHeight }) => maxHeight / 3}
      snapPoints={({ maxHeight }) => [
        maxHeight - maxHeight / 6,
        maxHeight / 3,
        // maxHeight / 10,
      ]}
      expandOnContentDrag
    >
      <div style={{ paddingInline: '1rem' }}>
        <h2>All Stores</h2>

        {restaurantList?.map((restaurant) => (
          <BSRestaurantSection {...restaurant} />
        ))}
      </div>
    </RSBottomSheet>
  );
}
