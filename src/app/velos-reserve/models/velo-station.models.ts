

export class Station{
  number!: number;
  contract_name!: string;
  name!: string;
  address!: string;
  bike_stands!: string;
  available_bike_stands!: string;
  position!: {
    lat: number;
    lng: number;
  }
  banking!: boolean;
  bonus!: boolean;
  status!: string;
  lastUpdate!: string;
  connected!: boolean;
  overflow!: boolean;
  totalStands!: {
    availabilities: {
      bikes: number;
      stands: number;
      mechanicalBikes: number;
      electricalBikes: number;
      electricalInternalBatteryBikes: number;
      electricalRemovableBatteryBikes: number;
    };
    capacity: number;
  };
  mainStands!: {
    availabilities: {
      bikes: number;
      stands: number;
      mechanicalBikes: number;
      electricalBikes: number;
      electricalInternalBatteryBikes: number;
      electricalRemovableBatteryBikes: number;
    };
    capacity: number;
  };
  overflowStands?: any;

}

