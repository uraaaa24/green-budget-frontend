export type DateRange = {
  startDate: Date
  endDate: Date
}

export const initialDateRange: DateRange = {
  /** Start of the current month */
  startDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), 1)),
  /** End of the current month */
  endDate: new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth() + 1, 0))
}

type SetDateRangeAction = {
  type: 'SET_DATE_RANGE'
  payload: DateRange
}

export type DateRangeAction = SetDateRangeAction

export const dateRangeReducer = (state: DateRange, action: DateRangeAction): DateRange => {
  switch (action.type) {
    case 'SET_DATE_RANGE':
      return action.payload
    default:
      return state
  }
}
