import {DateTimeFormatter, ZonedDateTime, ZoneId, ZoneOffset} from "@js-joda/core";

export const nowUTC = (): ZonedDateTime => ZonedDateTime.now(ZoneId.of('UTC'))

export const usDateTimeMask = 'MM/dd/yyyy HH:mm:ss' // works
export const usDateFormatter = DateTimeFormatter.ofPattern(usDateTimeMask)

export const quasarFormat = 'MM/DD/YYYY HH:mm:ss'

