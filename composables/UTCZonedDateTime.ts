import {ChronoUnit, DateTimeFormatter, ZonedDateTime, ZoneId, ZoneOffset} from "@js-joda/core";

export const nowUTC = (): ZonedDateTime => ZonedDateTime.now(ZoneId.of('UTC'))

export const usDateTimeMask = 'MM/dd/yyyy HH:mm:ss' // works
export const usDateFormatter = DateTimeFormatter.ofPattern(usDateTimeMask)

export const quasarFormat = 'MM/DD/YYYY HH:mm:ss'

export interface Preset {
    label: string,
    value: string,
    period: () => PresetDetails,
}

export const availablePresets: Preset[] = [
    {
        label: 'Last 24 hrs',
        value: 'l24h',
        period: (): PresetDetails => {
            const endDateTime = nowUTC()
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    },
    {
        label: 'Yesterday',
        value: 'yest',
        period: (): PresetDetails => {
            const endDateTime = nowUTC().truncatedTo(ChronoUnit.DAYS)
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    },
    {
        label: 'Last 7 days',
        value: 'l7d',
        period: (): PresetDetails => {
            const endDateTime = nowUTC()
            const startDateTime = endDateTime.minusHours(24)
            return {
                startDateTime,
                endDateTime,
                available: [Granularity.MINUTE, Granularity.HOUR]
            }
        }
    }
]