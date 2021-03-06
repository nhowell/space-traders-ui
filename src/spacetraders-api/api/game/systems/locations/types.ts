import { ILocation, LocationType } from "../../locations/types";

export interface IGetLocationsInSystemParams {
	/**
	 * The type of location to filter by, e.g. "PLANET".
	 */
	type: LocationType;
}

export interface ISystemLocationsResponse {
	locations: ILocation[];
}
