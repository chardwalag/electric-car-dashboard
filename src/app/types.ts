export interface MetricsParam {
  name: string;
  value: number | string;
}

export interface StationsParam {
  name: string;
  available: boolean;
}

export interface Analytics {
  metrics: MetricsParam[];
}

export interface BatteryStatus {
  batteryLevel: number;
}

export interface ChargingStations {
  stations: StationsParam[];
}
