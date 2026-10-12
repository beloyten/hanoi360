"use client";

import { CardItem } from "../shared/card-item";
import { RESTAURANTS } from "./restaurants";

export function RestaurantList() {
  return (
    <div className="flex flex-col gap-1 px-3 pb-6">
      {RESTAURANTS.map((restaurant) => (
        <CardItem
          key={restaurant.id}
          layout="horizontal"
          // Figma list cards show the address under the name.
          item={{ ...restaurant, description: restaurant.address ?? restaurant.description }}
          savedKey={`restaurant:${restaurant.id}`}
          href={`/am-thuc/${restaurant.id}`}
        />
      ))}
    </div>
  );
}
