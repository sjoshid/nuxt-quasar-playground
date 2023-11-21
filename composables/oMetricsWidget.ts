import {ZonedDateTime} from "@js-joda/core";

export interface OMetricsWidget {
    chartOptions: Object,
    dims: [number, number],
    name?: string,
    origin: [number, number],
}

export enum Granularity {
    MINUTE, HOUR, WEEK
}

export interface PresetDetails {
    startDateTime: ZonedDateTime,
    endDateTime: ZonedDateTime,
    // sj_todo How to make available of size at least 1?
    available: Granularity[],
}