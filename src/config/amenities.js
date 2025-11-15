/**
 * Amenities Data
 * List of features and amenities offered
 */

import { 
  Wifi, 
  BedDouble, 
  ParkingCircle, 
  Wind, 
  Waves,
  Lock 
} from 'lucide-react';

export const AMENITIES = [
  { 
    id: 'wifi',
    icon: Wifi, 
    name: 'Free Wi-Fi',
    description: 'High-speed internet throughout the property'
  },
  { 
    id: 'bed',
    icon: BedDouble, 
    name: 'Comfortable Bed',
    description: 'Premium quality bedding for a restful sleep'
  },
  { 
    id: 'parking',
    icon: ParkingCircle, 
    name: 'Free Parking',
    description: 'Secure parking available on premises'
  },
  { 
    id: 'ac',
    icon: Wind, 
    name: 'Air Conditioning',
    description: 'Climate control for year-round comfort'
  },
  { 
    id: 'beach',
    icon: Waves, 
    name: 'Beach Access',
    description: 'Just 1.3km away - easy access to the beach'
  },
  { 
    id: 'lock',
    icon: Lock, 
    name: 'Lock on Bedroom Door',
    description: 'Private and secure sleeping quarters'
  },
];
